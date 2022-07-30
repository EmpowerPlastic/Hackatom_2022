#[cfg(not(feature = "library"))]
use cosmwasm_std::entry_point;
use cosmwasm_std::{DepsMut, Env, MessageInfo, Response, SubMsg};
use cw2::set_contract_version;
use plastic_bindings::{PlasticMsg};

use crate::error::ContractError;
use crate::msg::{ExecuteMsg, InstantiateMsg};

// version info for migration info
const CONTRACT_NAME: &str = "crates.io:bindingcontract";
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    _msg: InstantiateMsg,
) -> Result<Response, ContractError> {
    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;

    Ok(Response::new()
        .add_attribute("method", "instantiate")
        .add_attribute("owner", info.sender))
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    _deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response<PlasticMsg>, ContractError> {
    match msg {
        ExecuteMsg::SetTheString { the_string } => { set_the_string(info, the_string) }
        ExecuteMsg::RegisterAccount {} => { register_account(info) }
        ExecuteMsg::SubmitTx { msg } => { submit_tx(info, msg) }
    }
}

pub fn submit_tx(info: MessageInfo, msg: String) -> Result<Response<PlasticMsg>, ContractError> {
    let submit_tx_message = PlasticMsg::SubmitTx {
        msg,
        owner: info.sender.to_string(),
        connection_id: "connection-0".to_string(), // TODO: Maaaaaaybe not hardocde this? :)
    };

    let msgs: Vec<SubMsg<PlasticMsg>> = vec![SubMsg::new(submit_tx_message)];

    Ok(Response::new()
        .add_attribute("action", "submit_tx_message")
        .add_submessages(msgs))
}

pub fn register_account(info: MessageInfo) -> Result<Response<PlasticMsg>, ContractError> {
    let register_account_message = PlasticMsg::RegisterAccount {
        owner: info.sender.to_string(),
        connection_id: "connection-0".to_string(), // TODO: Maaaaaaybe not hardocde this? :)
    };

    let msgs: Vec<SubMsg<PlasticMsg>> = vec![SubMsg::new(register_account_message)];

    Ok(Response::new()
        .add_attribute("action", "register_account")
        .add_submessages(msgs))
}

pub fn set_the_string(info: MessageInfo, the_string: String) -> Result<Response<PlasticMsg>, ContractError> {
    let set_string_msg = PlasticMsg::SetTheString {
        the_string,
        creator: info.sender.to_string()
    };
    let msgs: Vec<SubMsg<PlasticMsg>> = vec![SubMsg::new(set_string_msg)];

    Ok(Response::new()
        .add_attribute("action", "set_the_string")
        .add_submessages(msgs))
}
