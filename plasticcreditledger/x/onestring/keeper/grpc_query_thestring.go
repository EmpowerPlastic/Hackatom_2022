package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"plasticcreditledger/x/onestring/types"
)

func (k Keeper) Thestring(c context.Context, req *types.QueryGetThestringRequest) (*types.QueryGetThestringResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetThestring(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetThestringResponse{Thestring: val}, nil
}
