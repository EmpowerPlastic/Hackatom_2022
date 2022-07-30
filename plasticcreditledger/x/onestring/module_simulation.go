package onestring

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"plasticcreditledger/testutil/sample"
	onestringsimulation "plasticcreditledger/x/onestring/simulation"
	"plasticcreditledger/x/onestring/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = onestringsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateThestring = "op_weight_msg_thestring"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateThestring int = 100

	opWeightMsgUpdateThestring = "op_weight_msg_thestring"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateThestring int = 100

	opWeightMsgDeleteThestring = "op_weight_msg_thestring"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteThestring int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	onestringGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&onestringGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateThestring int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateThestring, &weightMsgCreateThestring, nil,
		func(_ *rand.Rand) {
			weightMsgCreateThestring = defaultWeightMsgCreateThestring
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateThestring,
		onestringsimulation.SimulateMsgCreateThestring(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateThestring int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateThestring, &weightMsgUpdateThestring, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateThestring = defaultWeightMsgUpdateThestring
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateThestring,
		onestringsimulation.SimulateMsgUpdateThestring(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteThestring int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteThestring, &weightMsgDeleteThestring, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteThestring = defaultWeightMsgDeleteThestring
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteThestring,
		onestringsimulation.SimulateMsgDeleteThestring(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
