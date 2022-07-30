package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/testutil/nullify"
	"plasticcreditledger/x/plasticcredits/keeper"
	"plasticcreditledger/x/plasticcredits/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNApprovedCollector(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ApprovedCollector {
	items := make([]types.ApprovedCollector, n)
	for i := range items {
		items[i].Addr = strconv.Itoa(i)
		items[i].Issuer = strconv.Itoa(i)

		keeper.SetApprovedCollector(ctx, items[i])
	}
	return items
}

func TestApprovedCollectorGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditsKeeper(t)
	items := createNApprovedCollector(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetApprovedCollector(ctx,
			item.Addr,
			item.Issuer,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestApprovedCollectorRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditsKeeper(t)
	items := createNApprovedCollector(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveApprovedCollector(ctx,
			item.Addr,
			item.Issuer,
		)
		_, found := keeper.GetApprovedCollector(ctx,
			item.Addr,
			item.Issuer,
		)
		require.False(t, found)
	}
}

func TestApprovedCollectorGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditsKeeper(t)
	items := createNApprovedCollector(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllApprovedCollector(ctx)),
	)
}
