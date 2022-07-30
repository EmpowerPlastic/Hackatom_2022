package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"plasticcreditledger/testutil/sample"
)

func TestMsgCreateApprovedCollector_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateApprovedCollector
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateApprovedCollector{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateApprovedCollector{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateApprovedCollector_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateApprovedCollector
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateApprovedCollector{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateApprovedCollector{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteApprovedCollector_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteApprovedCollector
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteApprovedCollector{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteApprovedCollector{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
