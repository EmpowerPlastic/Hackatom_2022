package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"plasticcreditledger/x/plasticcredits/types"
)

func (k msgServer) CreateApprovedCollector(goCtx context.Context, msg *types.MsgCreateApprovedCollector) (*types.MsgCreateApprovedCollectorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetApprovedCollector(
		ctx,
		msg.Addr,
		msg.Issuer,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var approvedCollector = types.ApprovedCollector{
		Creator: msg.Creator,
		Name:    msg.Name,
		Addr:    msg.Addr,
		Issuer:  msg.Issuer,
	}

	k.SetApprovedCollector(
		ctx,
		approvedCollector,
	)
	return &types.MsgCreateApprovedCollectorResponse{}, nil
}

func (k msgServer) UpdateApprovedCollector(goCtx context.Context, msg *types.MsgUpdateApprovedCollector) (*types.MsgUpdateApprovedCollectorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetApprovedCollector(
		ctx,
		msg.Addr,
		msg.Issuer,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var approvedCollector = types.ApprovedCollector{
		Creator: msg.Creator,
		Addr:    msg.Addr,
		Name:    msg.Name,
		Issuer:  msg.Issuer,
	}

	k.SetApprovedCollector(ctx, approvedCollector)

	return &types.MsgUpdateApprovedCollectorResponse{}, nil
}

func (k msgServer) DeleteApprovedCollector(goCtx context.Context, msg *types.MsgDeleteApprovedCollector) (*types.MsgDeleteApprovedCollectorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetApprovedCollector(
		ctx,
		msg.Addr,
		msg.Issuer,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveApprovedCollector(
		ctx,
		msg.Addr,
		msg.Issuer,
	)

	return &types.MsgDeleteApprovedCollectorResponse{}, nil
}
