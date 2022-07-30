package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTransferCredit = "transfer_credit"

var _ sdk.Msg = &MsgTransferCredit{}

func NewMsgTransferCredit(owner string, index string, newOwner string) *MsgTransferCredit {
	return &MsgTransferCredit{
		Owner:    owner,
		Index:    index,
		NewOwner: newOwner,
	}
}

func (msg *MsgTransferCredit) Route() string {
	return RouterKey
}

func (msg *MsgTransferCredit) Type() string {
	return TypeMsgTransferCredit
}

func (msg *MsgTransferCredit) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgTransferCredit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTransferCredit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
