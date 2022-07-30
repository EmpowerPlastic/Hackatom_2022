package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "plasticcreditledger/testutil/keeper"
	"plasticcreditledger/testutil/nullify"
	"plasticcreditledger/x/onestring/types"
)

func TestThestringQuery(t *testing.T) {
	keeper, ctx := keepertest.OnestringKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestThestring(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetThestringRequest
		response *types.QueryGetThestringResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetThestringRequest{},
			response: &types.QueryGetThestringResponse{Thestring: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Thestring(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
