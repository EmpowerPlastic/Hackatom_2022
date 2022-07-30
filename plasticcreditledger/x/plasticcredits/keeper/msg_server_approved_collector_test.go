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

func TestApprovedCollectorMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.PlasticcreditsKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateApprovedCollector{Creator: creator,
			Addr:   strconv.Itoa(i),
			Issuer: strconv.Itoa(i),
		}
		_, err := srv.CreateApprovedCollector(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetApprovedCollector(ctx,
			expected.Addr,
			expected.Issuer,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestApprovedCollectorMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateApprovedCollector
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateApprovedCollector{Creator: creator,
				Addr:   strconv.Itoa(0),
				Issuer: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateApprovedCollector{Creator: "B",
				Addr:   strconv.Itoa(0),
				Issuer: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateApprovedCollector{Creator: creator,
				Addr:   strconv.Itoa(100000),
				Issuer: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PlasticcreditsKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateApprovedCollector{Creator: creator,
				Addr:   strconv.Itoa(0),
				Issuer: strconv.Itoa(0),
			}
			_, err := srv.CreateApprovedCollector(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateApprovedCollector(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetApprovedCollector(ctx,
					expected.Addr,
					expected.Issuer,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestApprovedCollectorMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteApprovedCollector
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteApprovedCollector{Creator: creator,
				Addr:   strconv.Itoa(0),
				Issuer: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteApprovedCollector{Creator: "B",
				Addr:   strconv.Itoa(0),
				Issuer: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteApprovedCollector{Creator: creator,
				Addr:   strconv.Itoa(100000),
				Issuer: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PlasticcreditsKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateApprovedCollector(wctx, &types.MsgCreateApprovedCollector{Creator: creator,
				Addr:   strconv.Itoa(0),
				Issuer: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteApprovedCollector(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetApprovedCollector(ctx,
					tc.request.Addr,
					tc.request.Issuer,
				)
				require.False(t, found)
			}
		})
	}
}
