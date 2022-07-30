package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"plasticcreditledger/testutil/sample"
)

func TestMsgTransferCredit_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgTransferCredit
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgTransferCredit{
				Owner: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgTransferCredit{
				Owner: sample.AccAddress(),
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
