#[cfg(not(feature = "library"))]
use cosmwasm_std::entry_point;
use cosmwasm_std::{Addr, BankMsg, Coin, DepsMut, Env, MessageInfo, Response, SubMsg, Uint128};
use cw2::set_contract_version;
use plastic_bindings::{PlasticMsg};

use crate::error::ContractError;
use crate::msg::{ExecuteMsg, InstantiateMsg};
use crate::state::{State, STATE};

// version info for migration info
const CONTRACT_NAME: &str = "crates.io:fundcollectors";
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    _info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response<PlasticMsg>, ContractError> {
    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;

    let validated_operator = deps.api.addr_validate(&msg.operator)?;
    let validated_collector = deps.api.addr_validate(&msg.collector)?;
    let amount_required = msg.amount;
    let asset_requested = msg.asset;

    let loan = State {
        operator: validated_operator.clone(),
        collector: validated_collector.clone(),
        amount: amount_required,
        asset: asset_requested.clone(),
        current_funding: Uint128::from(0u128),
    };
    STATE.save(deps.storage, &loan)?;

    let register_account_message = PlasticMsg::RegisterAccount {
        owner: env.contract.address.to_string(),
        connection_id: "connection-0".to_string(), // TODO: Maaaaaaybe not hardocde this? :)
    };
    let msgs: Vec<SubMsg<PlasticMsg>> = vec![SubMsg::new(register_account_message)];

    Ok(Response::new()
        .add_attribute("action", "instantiate")
        .add_attribute("operator", validated_operator)
        .add_attribute("collector", validated_collector)
        .add_attribute("asset_requested", asset_requested)
        .add_attribute("amount", amount_required.to_string())
        .add_submessages(msgs))
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::SupportFunding { amount } => execute_support_funding(deps, env, info, amount),
        ExecuteMsg::ConcludeFunding {} => execute_conclude_funding(deps, env, info),
        ExecuteMsg::StatusFunding {} => execute_status_funding(deps),
    }
}

fn execute_support_funding(
    deps: DepsMut,
    _env: Env, // _env as we won't be using it
    info: MessageInfo,
    amount: String,
) -> Result<Response, ContractError> {
    let current_state = STATE.may_load(deps.storage)?;
    let sponsor = info.sender;
    let storage = _env.contract.address.clone();

    match current_state {
        Some(current_state) => {
            let asset_required = current_state.asset.clone();
            let mut asset_not_found = false;
            for coin in info.funds {
                if coin.denom == asset_required {
                    asset_not_found = true;
                }
            }
            if asset_not_found == false {
                return Err(ContractError::OfferNotFound {});
            }

            let funding_required = current_state.amount;
            let sponsors_offer = amount.parse::<Uint128>().unwrap();
            let original_collector = current_state.collector;
            // Not over sponsor
            if funding_required - sponsors_offer < Uint128::from(0u128) {
                return Err(ContractError::OfferExceeded {});
            }
            if original_collector == sponsor {
                return Err(ContractError::SponsorIsCollector {});
            }

            // The resting_amount exists
            STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {
                state.amount = funding_required - sponsors_offer;
                state.current_funding += sponsors_offer;
                Ok(state)
            })?;
            let mut quantity = Vec::new();
            let currency = Coin{denom: current_state.asset, amount: sponsors_offer};
            quantity.push(currency);
            send_tokens(storage, quantity);
            return Ok(Response::new().add_attribute("method", "execute_support_funding"));
        }
        None => return Err(ContractError::Unauthorized {}), // There is no kickstart
    };
}

fn execute_status_funding(deps: DepsMut) -> Result<Response, ContractError> {
    let current_state = STATE.may_load(deps.storage)?;
    match current_state {
        Some(current_state) => {
            let asset_required = current_state.asset;
            let original_collector = current_state.collector;
            let funding_required = current_state.amount;
            let funding_collected = current_state.current_funding;
            // The resting_amount exists
            return Ok(Response::new()
                .add_attribute("method", "execute_status_funding")
                .add_attribute("asset", asset_required)
                .add_attribute("funding_required", funding_required.to_string())
                .add_attribute("funding_collected", funding_collected.to_string())
                .add_attribute("collector", original_collector));
        }
        None => return Err(ContractError::Unauthorized {}), // There is no kickstart
    };
}

fn execute_conclude_funding(
    deps: DepsMut,
    _env: Env, // _env as we won't be using it
    info: MessageInfo,
) -> Result<Response, ContractError> {
    let current_state = STATE.may_load(deps.storage)?;
    match current_state {
        Some(current_state) => {
            let funding_required = current_state.amount;
            let original_operator = current_state.operator;
            let operator = info.sender;
            if funding_required > Uint128::from(0u128) {
                return Err(ContractError::StillFunding {}); // Goal not reached
            }
            if original_operator != operator {
                return Err(ContractError::Unauthorized {}); // Only the owner can conclude
            }

            let mut amount = Vec::new();
            let denom_required = current_state.asset;
            let funds_received = current_state.current_funding;
            let currency_to_give = Coin {
                denom: denom_required,
                amount: funds_received,
            };
            amount.push(currency_to_give);

            let collector = current_state.collector;

            send_tokens(collector, amount); // Collector receives the final funding.
            return Ok(Response::new().add_attribute("method", "execute_conclude_funding"));
        }
        None => return Err(ContractError::NotExistingError {}), // There is no kickstart
    };
}

// fn execute_fund_collector(
//     deps: DepsMut,
//     env: Env,
//     info: MessageInfo,
// ) -> Result<Response, ContractError> {
//     let current_state = STATE.may_load(deps.storage)?;

//     // throws error if the contract is isn't complete
//     match current_state {
//         Some(current_state) => {
//             let amount_funded = current_state.current_funding;
//             let denom = current_state.asset;
//             let amount = if let Some(quantity) = quantity {
//                 quantity
//             } else {
//                 // release everything
//                 // Querier guarantees to return up-to-date data, including funds sent in this handle message
//                 // https://github.com/CosmWasm/wasmd/blob/master/x/wasm/internal/keeper/keeper.go#L185-L192
//                 deps.querier.query_all_balances(&env.contract.address)?
//             };
//             let assets = Vec<Coin>[];
//             return Ok(send_tokens(current_state.collector, assets));
//         }
//         None => return Err(ContractError::NotExistingError {}), // There is no kickstart
//     };
// }

fn send_tokens(to_address: Addr, amount: Vec<Coin>) -> Response {
    Response::new()
        .add_message(BankMsg::Send {
            to_address: to_address.clone().into(),
            amount,
        })
        .add_attribute("to", to_address)
}

// #[cfg(test)]
// mod tests {
//     use crate::contract::{execute_support_funding, instantiate}; // the contract instantiate function
//     use crate::msg::InstantiateMsg;
//     use cosmwasm_std::attr; // helper to construct an attribute e.g. ("action", "instantiate")
//     use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info}; // mock functions to mock an environment, message info, dependencies // our instantate method

//     // Two fake addresses we will use to mock_info
//     pub const ADDR1: &str = "addr1";
//     pub const ADDR2: &str = "addr2";
//     pub const ASSET: &str = "ujunox";
//     pub const REQUESTED_AMOUNT: i64 = 1234;

//     #[test]
//     fn test_instantiate() {
//         // Mock the dependencies, must be mutable so we can pass it as a mutable, empty vector means our contract has no balance
//         let mut deps = mock_dependencies();
//         // Mock the contract environment, contains the block info, contract address, etc.
//         let env = mock_env();
//         // Mock the message info, ADDR1 will be the sender, the empty vec means we sent no funds.
//         let info = mock_info(&ADDR1, &vec![]);
//         let msg = InstantiateMsg {
//             operator: ADDR1.to_owned(),
//             collector: ADDR2.to_owned(),
//             asset: ASSET.to_owned(),
//             amount: Uint128::from(1234u128),
//         };

//         let res = instantiate(deps.as_mut(), env, info, msg).unwrap();

//         assert_eq!(
//             res.attributes,
//             vec![
//                 attr("action", "instantiate"),
//                 attr("operator", ADDR1),
//                 attr("collector", ADDR2),
//                 attr("asset_requested", ASSET),
//                 attr("amount", REQUESTED_AMOUNT.to_string()),
//             ]
//         );
//     }
// }
