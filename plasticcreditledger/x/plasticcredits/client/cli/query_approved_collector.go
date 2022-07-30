package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"plasticcreditledger/x/plasticcredits/types"
)

func CmdListApprovedCollector() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-approved-collector",
		Short: "list all approved-collector",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllApprovedCollectorRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ApprovedCollectorAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowApprovedCollector() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-approved-collector [addr] [issuer]",
		Short: "shows a approved-collector",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argAddr := args[0]
			argIssuer := args[1]

			params := &types.QueryGetApprovedCollectorRequest{
				Addr:   argAddr,
				Issuer: argIssuer,
			}

			res, err := queryClient.ApprovedCollector(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
