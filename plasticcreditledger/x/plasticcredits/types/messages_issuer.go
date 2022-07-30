package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateIssuer = "create_issuer"
	TypeMsgUpdateIssuer = "update_issuer"
	TypeMsgDeleteIssuer = "delete_issuer"
)

var _ sdk.Msg = &MsgCreateIssuer{}

func NewMsgCreateIssuer(
	creator string,
	addr string,
	name string,

) *MsgCreateIssuer {
	return &MsgCreateIssuer{
		Creator: creator,
		Addr:    addr,
		Name:    name,
	}
}

func (msg *MsgCreateIssuer) Route() string {
	return RouterKey
}

func (msg *MsgCreateIssuer) Type() string {
	return TypeMsgCreateIssuer
}

func (msg *MsgCreateIssuer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateIssuer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateIssuer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateIssuer{}

func NewMsgUpdateIssuer(
	creator string,
	addr string,
	name string,

) *MsgUpdateIssuer {
	return &MsgUpdateIssuer{
		Creator: creator,
		Addr:    addr,
		Name:    name,
	}
}

func (msg *MsgUpdateIssuer) Route() string {
	return RouterKey
}

func (msg *MsgUpdateIssuer) Type() string {
	return TypeMsgUpdateIssuer
}

func (msg *MsgUpdateIssuer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateIssuer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateIssuer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteIssuer{}

func NewMsgDeleteIssuer(
	creator string,
	addr string,

) *MsgDeleteIssuer {
	return &MsgDeleteIssuer{
		Creator: creator,
		Addr:    addr,
	}
}
func (msg *MsgDeleteIssuer) Route() string {
	return RouterKey
}

func (msg *MsgDeleteIssuer) Type() string {
	return TypeMsgDeleteIssuer
}

func (msg *MsgDeleteIssuer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteIssuer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteIssuer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
