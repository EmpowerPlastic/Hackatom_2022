package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/testutil/nullify"
	"plasticcreditledger/x/onestring/keeper"
	"plasticcreditledger/x/onestring/types"
)

func createTestThestring(keeper *keeper.Keeper, ctx sdk.Context) types.Thestring {
	item := types.Thestring{}
	keeper.SetThestring(ctx, item)
	return item
}

func TestThestringGet(t *testing.T) {
	keeper, ctx := keepertest.OnestringKeeper(t)
	item := createTestThestring(keeper, ctx)
	rst, found := keeper.GetThestring(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestThestringRemove(t *testing.T) {
	keeper, ctx := keepertest.OnestringKeeper(t)
	createTestThestring(keeper, ctx)
	keeper.RemoveThestring(ctx)
	_, found := keeper.GetThestring(ctx)
	require.False(t, found)
}
