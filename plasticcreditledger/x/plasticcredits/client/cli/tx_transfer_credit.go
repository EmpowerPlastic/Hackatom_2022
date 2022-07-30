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

func CmdTransferCredit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer-credit [index] [new-owner]",
		Short: "Broadcast message transfer-credit",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIndex := args[0]
			argNewOwner := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgTransferCredit(
				clientCtx.GetFromAddress().String(),
				argIndex,
				argNewOwner,
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
