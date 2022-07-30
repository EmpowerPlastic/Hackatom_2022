package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateApprovedCollector = "create_approved_collector"
	TypeMsgUpdateApprovedCollector = "update_approved_collector"
	TypeMsgDeleteApprovedCollector = "delete_approved_collector"
)

var _ sdk.Msg = &MsgCreateApprovedCollector{}

func NewMsgCreateApprovedCollector(
	creator string,
	addr string,
	issuer string,

) *MsgCreateApprovedCollector {
	return &MsgCreateApprovedCollector{
		Creator: creator,
		Addr:    addr,
		Issuer:  issuer,
	}
}

func (msg *MsgCreateApprovedCollector) Route() string {
	return RouterKey
}

func (msg *MsgCreateApprovedCollector) Type() string {
	return TypeMsgCreateApprovedCollector
}

func (msg *MsgCreateApprovedCollector) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateApprovedCollector) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateApprovedCollector) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateApprovedCollector{}

func NewMsgUpdateApprovedCollector(
	creator string,
	addr string,
	issuer string,

) *MsgUpdateApprovedCollector {
	return &MsgUpdateApprovedCollector{
		Creator: creator,
		Addr:    addr,
		Issuer:  issuer,
	}
}

func (msg *MsgUpdateApprovedCollector) Route() string {
	return RouterKey
}

func (msg *MsgUpdateApprovedCollector) Type() string {
	return TypeMsgUpdateApprovedCollector
}

func (msg *MsgUpdateApprovedCollector) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateApprovedCollector) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateApprovedCollector) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteApprovedCollector{}

func NewMsgDeleteApprovedCollector(
	creator string,
	addr string,
	issuer string,

) *MsgDeleteApprovedCollector {
	return &MsgDeleteApprovedCollector{
		Creator: creator,
		Addr:    addr,
		Issuer:  issuer,
	}
}
func (msg *MsgDeleteApprovedCollector) Route() string {
	return RouterKey
}

func (msg *MsgDeleteApprovedCollector) Type() string {
	return TypeMsgDeleteApprovedCollector
}

func (msg *MsgDeleteApprovedCollector) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteApprovedCollector) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteApprovedCollector) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
