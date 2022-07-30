use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::{CosmosMsg, CustomMsg};

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
/// A number of Custom messages that can call into the Plastic bindings
pub enum PlasticMsg {
    RegisterAccount {
        owner: String,
        connection_id: String,
    },
    SetTheString {
        the_string: String,
        creator: String,
    },
    SubmitTx {
        owner: String,
        connection_id: String,
        msg: String,
    }
}

impl From<PlasticMsg> for CosmosMsg<PlasticMsg> {
    fn from(msg: PlasticMsg) -> CosmosMsg<PlasticMsg> {
        CosmosMsg::Custom(msg)
    }
}

impl CustomMsg for PlasticMsg {}