use cosmwasm_std::StdError;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("Unauthorized")]
    Unauthorized {},

    #[error("Custom Error val: {val:?}")]
    CustomError { val: String },

    #[error("There is no fundraising to conclude")]
    NotExistingError {},

    #[error("The fundraising is already completed.")]
    OfferExceeded {},

    #[error("The fundraising isn't completed yet, you can't cancel it.")]
    StillFunding {},

    #[error("The collector can't sponsor himself.")]
    SponsorIsCollector {},

    #[error("The collector can't sponsor himself.")]
    OfferNotFound {},
}
