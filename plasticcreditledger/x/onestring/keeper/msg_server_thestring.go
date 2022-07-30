package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"plasticcreditledger/x/onestring/types"
)

func (k msgServer) CreateThestring(goCtx context.Context, msg *types.MsgCreateThestring) (*types.MsgCreateThestringResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

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

	var thestring = types.Thestring{
		Creator:          msg.Creator,
		Valueofthestring: msg.Valueofthestring,
	}

	k.SetThestring(ctx, thestring)

	return &types.MsgUpdateThestringResponse{}, nil
}

func (k msgServer) DeleteThestring(goCtx context.Context, _ *types.MsgDeleteThestring) (*types.MsgDeleteThestringResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.RemoveThestring(ctx)

	return &types.MsgDeleteThestringResponse{}, nil
}
