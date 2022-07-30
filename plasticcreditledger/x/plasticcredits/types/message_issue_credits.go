package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgIssueCredits = "issue_credits"

var _ sdk.Msg = &MsgIssueCredits{}

func NewMsgIssueCredits(issuer string, collector string, material string, description string, image string, lat string, lng string) *MsgIssueCredits {
	return &MsgIssueCredits{
		Issuer:      issuer,
		Collector:   collector,
		Material:    material,
		Description: description,
		Image:       image,
		Lat:         lat,
		Lng:         lng,
	}
}

func (msg *MsgIssueCredits) Route() string {
	return RouterKey
}

func (msg *MsgIssueCredits) Type() string {
	return TypeMsgIssueCredits
}

func (msg *MsgIssueCredits) GetSigners() []sdk.AccAddress {
	issuer, err := sdk.AccAddressFromBech32(msg.Issuer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{issuer}
}

func (msg *MsgIssueCredits) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgIssueCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Issuer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid issuer address (%s)", err)
	}
	return nil
}
