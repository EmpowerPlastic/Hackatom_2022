package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/x/plasticcredits/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.PlasticcreditsKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
