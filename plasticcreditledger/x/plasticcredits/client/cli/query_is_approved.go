package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"plasticcreditledger/x/plasticcredits/types"
)

var _ = strconv.Itoa(0)

func CmdIsApproved() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "is-approved [addr]",
		Short: "Query is-approved",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqAddr := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryIsApprovedRequest{

				Addr: reqAddr,
			}

			res, err := queryClient.IsApproved(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
