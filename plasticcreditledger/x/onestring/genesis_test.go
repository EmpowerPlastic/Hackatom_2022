package onestring_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/testutil/nullify"
	"plasticcreditledger/x/onestring"
	"plasticcreditledger/x/onestring/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		Thestring: &types.Thestring{
			Valueofthestring: "48",
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.OnestringKeeper(t)
	onestring.InitGenesis(ctx, *k, genesisState)
	got := onestring.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.Thestring, got.Thestring)
	// this line is used by starport scaffolding # genesis/test/assert
}
