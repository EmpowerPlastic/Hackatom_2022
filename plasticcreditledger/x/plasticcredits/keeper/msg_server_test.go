package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/x/plasticcredits/keeper"
	"plasticcreditledger/x/plasticcredits/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.PlasticcreditsKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
