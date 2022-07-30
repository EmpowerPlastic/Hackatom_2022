package plasticcredits

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"plasticcreditledger/testutil/sample"
	plasticcreditssimulation "plasticcreditledger/x/plasticcredits/simulation"
	"plasticcreditledger/x/plasticcredits/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = plasticcreditssimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateIssuer = "op_weight_msg_issuer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateIssuer int = 100

	opWeightMsgUpdateIssuer = "op_weight_msg_issuer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateIssuer int = 100

	opWeightMsgDeleteIssuer = "op_weight_msg_issuer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteIssuer int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	plasticcreditsGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		IssuerList: []types.Issuer{
			{
				Creator: sample.AccAddress(),
				Addr:    "0",
			},
			{
				Creator: sample.AccAddress(),
				Addr:    "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&plasticcreditsGenesis)
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

	var weightMsgCreateIssuer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateIssuer, &weightMsgCreateIssuer, nil,
		func(_ *rand.Rand) {
			weightMsgCreateIssuer = defaultWeightMsgCreateIssuer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateIssuer,
		plasticcreditssimulation.SimulateMsgCreateIssuer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateIssuer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateIssuer, &weightMsgUpdateIssuer, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateIssuer = defaultWeightMsgUpdateIssuer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateIssuer,
		plasticcreditssimulation.SimulateMsgUpdateIssuer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteIssuer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteIssuer, &weightMsgDeleteIssuer, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteIssuer = defaultWeightMsgDeleteIssuer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteIssuer,
		plasticcreditssimulation.SimulateMsgDeleteIssuer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
