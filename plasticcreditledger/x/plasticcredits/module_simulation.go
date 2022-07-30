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

	opWeightMsgCreateApprovedCollector = "op_weight_msg_approved_collector"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateApprovedCollector int = 100

	opWeightMsgUpdateApprovedCollector = "op_weight_msg_approved_collector"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateApprovedCollector int = 100

	opWeightMsgDeleteApprovedCollector = "op_weight_msg_approved_collector"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteApprovedCollector int = 100

	opWeightMsgIssueCredits = "op_weight_msg_issue_credits"
	// TODO: Determine the simulation weight value
	defaultWeightMsgIssueCredits int = 100

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
		ApprovedCollectorList: []types.ApprovedCollector{
			{
				Creator: sample.AccAddress(),
				Addr:    "0",
				Issuer:  "0",
			},
			{
				Creator: sample.AccAddress(),
				Addr:    "1",
				Issuer:  "1",
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

	var weightMsgCreateApprovedCollector int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateApprovedCollector, &weightMsgCreateApprovedCollector, nil,
		func(_ *rand.Rand) {
			weightMsgCreateApprovedCollector = defaultWeightMsgCreateApprovedCollector
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateApprovedCollector,
		plasticcreditssimulation.SimulateMsgCreateApprovedCollector(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateApprovedCollector int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateApprovedCollector, &weightMsgUpdateApprovedCollector, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateApprovedCollector = defaultWeightMsgUpdateApprovedCollector
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateApprovedCollector,
		plasticcreditssimulation.SimulateMsgUpdateApprovedCollector(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteApprovedCollector int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteApprovedCollector, &weightMsgDeleteApprovedCollector, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteApprovedCollector = defaultWeightMsgDeleteApprovedCollector
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteApprovedCollector,
		plasticcreditssimulation.SimulateMsgDeleteApprovedCollector(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgIssueCredits int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgIssueCredits, &weightMsgIssueCredits, nil,
		func(_ *rand.Rand) {
			weightMsgIssueCredits = defaultWeightMsgIssueCredits
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgIssueCredits,
		plasticcreditssimulation.SimulateMsgIssueCredits(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
