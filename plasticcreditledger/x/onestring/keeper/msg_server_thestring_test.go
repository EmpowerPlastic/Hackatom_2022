package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/x/onestring/keeper"
	"plasticcreditledger/x/onestring/types"
)

func TestThestringMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.OnestringKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateThestring{Creator: creator}
	_, err := srv.CreateThestring(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetThestring(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestThestringMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateThestring
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateThestring{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateThestring{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.OnestringKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateThestring{Creator: creator}
			_, err := srv.CreateThestring(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateThestring(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetThestring(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestThestringMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteThestring
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteThestring{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteThestring{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.OnestringKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateThestring(wctx, &types.MsgCreateThestring{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteThestring(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetThestring(ctx)
				require.False(t, found)
			}
		})
	}
}
