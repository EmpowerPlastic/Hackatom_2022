package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"plasticcreditledger/x/plasticcredits/types"
)

func (k msgServer) CreateIssuer(goCtx context.Context, msg *types.MsgCreateIssuer) (*types.MsgCreateIssuerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetIssuer(
		ctx,
		msg.Addr,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var issuer = types.Issuer{
		Creator: msg.Creator,
		Addr:    msg.Addr,
		Name:    msg.Name,
	}

	k.SetIssuer(
		ctx,
		issuer,
	)
	return &types.MsgCreateIssuerResponse{}, nil
}

func (k msgServer) UpdateIssuer(goCtx context.Context, msg *types.MsgUpdateIssuer) (*types.MsgUpdateIssuerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetIssuer(
		ctx,
		msg.Addr,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var issuer = types.Issuer{
		Creator: msg.Creator,
		Addr:    msg.Addr,
		Name:    msg.Name,
	}

	k.SetIssuer(ctx, issuer)

	return &types.MsgUpdateIssuerResponse{}, nil
}

func (k msgServer) DeleteIssuer(goCtx context.Context, msg *types.MsgDeleteIssuer) (*types.MsgDeleteIssuerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetIssuer(
		ctx,
		msg.Addr,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveIssuer(
		ctx,
		msg.Addr,
	)

	return &types.MsgDeleteIssuerResponse{}, nil
}
