package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/x/onestring/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.OnestringKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
