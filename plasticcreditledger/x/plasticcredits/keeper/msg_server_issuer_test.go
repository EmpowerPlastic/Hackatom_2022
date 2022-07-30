package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/x/plasticcredits/keeper"
	"plasticcreditledger/x/plasticcredits/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestIssuerMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.PlasticcreditsKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateIssuer{Creator: creator,
			Addr: strconv.Itoa(i),
		}
		_, err := srv.CreateIssuer(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetIssuer(ctx,
			expected.Addr,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestIssuerMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateIssuer
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateIssuer{Creator: creator,
				Addr: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateIssuer{Creator: "B",
				Addr: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateIssuer{Creator: creator,
				Addr: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PlasticcreditsKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateIssuer{Creator: creator,
				Addr: strconv.Itoa(0),
			}
			_, err := srv.CreateIssuer(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateIssuer(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetIssuer(ctx,
					expected.Addr,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestIssuerMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteIssuer
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteIssuer{Creator: creator,
				Addr: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteIssuer{Creator: "B",
				Addr: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteIssuer{Creator: creator,
				Addr: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PlasticcreditsKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateIssuer(wctx, &types.MsgCreateIssuer{Creator: creator,
				Addr: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteIssuer(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetIssuer(ctx,
					tc.request.Addr,
				)
				require.False(t, found)
			}
		})
	}
}
