package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"plasticcreditledger/x/onestring/types"
)

func (k msgServer) CreateThestring(goCtx context.Context, msg *types.MsgCreateThestring) (*types.MsgCreateThestringResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetThestring(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var thestring = types.Thestring{
		Creator:          msg.Creator,
		Valueofthestring: msg.Valueofthestring,
	}

	k.SetThestring(
		ctx,
		thestring,
	)
	return &types.MsgCreateThestringResponse{}, nil
}

func (k msgServer) UpdateThestring(goCtx context.Context, msg *types.MsgUpdateThestring) (*types.MsgUpdateThestringResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetThestring(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var thestring = types.Thestring{
		Creator:          msg.Creator,
		Valueofthestring: msg.Valueofthestring,
	}

	k.SetThestring(ctx, thestring)

	return &types.MsgUpdateThestringResponse{}, nil
}

func (k msgServer) DeleteThestring(goCtx context.Context, msg *types.MsgDeleteThestring) (*types.MsgDeleteThestringResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetThestring(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveThestring(ctx)

	return &types.MsgDeleteThestringResponse{}, nil
}
