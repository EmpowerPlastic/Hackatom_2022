package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"plasticcreditledger/x/plasticcredits/types"
)

func (k Keeper) ApprovedCollectorAll(c context.Context, req *types.QueryAllApprovedCollectorRequest) (*types.QueryAllApprovedCollectorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var approvedCollectors []types.ApprovedCollector
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	approvedCollectorStore := prefix.NewStore(store, types.KeyPrefix(types.ApprovedCollectorKeyPrefix))

	pageRes, err := query.Paginate(approvedCollectorStore, req.Pagination, func(key []byte, value []byte) error {
		var approvedCollector types.ApprovedCollector
		if err := k.cdc.Unmarshal(value, &approvedCollector); err != nil {
			return err
		}

		approvedCollectors = append(approvedCollectors, approvedCollector)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllApprovedCollectorResponse{ApprovedCollector: approvedCollectors, Pagination: pageRes}, nil
}

func (k Keeper) ApprovedCollector(c context.Context, req *types.QueryGetApprovedCollectorRequest) (*types.QueryGetApprovedCollectorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetApprovedCollector(
		ctx,
		req.Addr,
		req.Issuer,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetApprovedCollectorResponse{ApprovedCollector: val}, nil
}
