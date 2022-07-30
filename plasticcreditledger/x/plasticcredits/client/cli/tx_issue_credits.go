package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"plasticcreditledger/x/plasticcredits/types"
)

var _ = strconv.Itoa(0)

func CmdIssueCredits() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issue-credits [collector] [material] [description] [image] [lat] [lng]",
		Short: "Broadcast message issue-credits",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCollector := args[0]
			argMaterial := args[1]
			argDescription := args[2]
			argImage := args[3]
			argLat := args[4]
			argLng := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgIssueCredits(
				clientCtx.GetFromAddress().String(),
				argCollector,
				argMaterial,
				argDescription,
				argImage,
				argLat,
				argLng,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
