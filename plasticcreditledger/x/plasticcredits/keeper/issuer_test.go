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

func createNIssuer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Issuer {
	items := make([]types.Issuer, n)
	for i := range items {
		items[i].Addr = strconv.Itoa(i)

		keeper.SetIssuer(ctx, items[i])
	}
	return items
}

func TestIssuerGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditsKeeper(t)
	items := createNIssuer(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetIssuer(ctx,
			item.Addr,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestIssuerRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditsKeeper(t)
	items := createNIssuer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveIssuer(ctx,
			item.Addr,
		)
		_, found := keeper.GetIssuer(ctx,
			item.Addr,
		)
		require.False(t, found)
	}
}

func TestIssuerGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditsKeeper(t)
	items := createNIssuer(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllIssuer(ctx)),
	)
}
