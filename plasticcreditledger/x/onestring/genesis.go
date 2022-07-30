package onestring

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"plasticcreditledger/x/onestring/keeper"
	"plasticcreditledger/x/onestring/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.Thestring != nil {
		k.SetThestring(ctx, *genState.Thestring)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all thestring
	thestring, found := k.GetThestring(ctx)
	if found {
		genesis.Thestring = &thestring
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
