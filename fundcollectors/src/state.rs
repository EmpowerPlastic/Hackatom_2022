use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::{Addr, Uint128};
use cw_storage_plus::Item;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub operator: Addr,       // owner of the incubator
    pub collector: Addr,      // collector that will receive the assets
    pub amount: Uint128,          // amount required
    pub asset: String,        // asset that requests
    pub current_funding: Uint128, // current amount funded
}

pub const STATE: Item<State> = Item::new("state");
