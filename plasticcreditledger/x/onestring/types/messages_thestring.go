package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateThestring = "create_thestring"
	TypeMsgUpdateThestring = "update_thestring"
	TypeMsgDeleteThestring = "delete_thestring"
)

var _ sdk.Msg = &MsgCreateThestring{}

func NewMsgCreateThestring(creator string, valueofthestring string) *MsgCreateThestring {
	return &MsgCreateThestring{
		Creator:          creator,
		Valueofthestring: valueofthestring,
	}
}

func (msg *MsgCreateThestring) Route() string {
	return RouterKey
}

func (msg *MsgCreateThestring) Type() string {
	return TypeMsgCreateThestring
}

func (msg *MsgCreateThestring) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateThestring) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateThestring) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateThestring{}

func NewMsgUpdateThestring(creator string, valueofthestring string) *MsgUpdateThestring {
	return &MsgUpdateThestring{
		Creator:          creator,
		Valueofthestring: valueofthestring,
	}
}

func (msg *MsgUpdateThestring) Route() string {
	return RouterKey
}

func (msg *MsgUpdateThestring) Type() string {
	return TypeMsgUpdateThestring
}

func (msg *MsgUpdateThestring) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateThestring) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateThestring) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteThestring{}

func NewMsgDeleteThestring(creator string) *MsgDeleteThestring {
	return &MsgDeleteThestring{
		Creator: creator,
	}
}
func (msg *MsgDeleteThestring) Route() string {
	return RouterKey
}

func (msg *MsgDeleteThestring) Type() string {
	return TypeMsgDeleteThestring
}

func (msg *MsgDeleteThestring) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteThestring) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteThestring) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
