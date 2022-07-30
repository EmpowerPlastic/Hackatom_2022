package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"plasticcreditledger/x/plasticcredits/types"
)

func (k msgServer) TransferCredit(goCtx context.Context, msg *types.MsgTransferCredit) (*types.MsgTransferCreditResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgTransferCreditResponse{}, nil
}
