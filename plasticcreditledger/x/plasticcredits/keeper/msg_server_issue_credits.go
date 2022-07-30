package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"plasticcreditledger/x/plasticcredits/types"
)

func (k msgServer) IssueCredits(goCtx context.Context, msg *types.MsgIssueCredits) (*types.MsgIssueCreditsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgIssueCreditsResponse{}, nil
}
