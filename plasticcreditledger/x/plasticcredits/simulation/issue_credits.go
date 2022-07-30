package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"plasticcreditledger/x/plasticcredits/keeper"
	"plasticcreditledger/x/plasticcredits/types"
)

func SimulateMsgIssueCredits(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgIssueCredits{
			Issuer: simAccount.Address.String(),
		}

		// TODO: Handling the IssueCredits simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "IssueCredits simulation not implemented"), nil, nil
	}
}
