package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"plasticcreditledger/x/plasticcredits/types"
)

func CmdCreateApprovedCollector() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-approved-collector [addr] [name] [issuer]",
		Short: "Create a new approved-collector",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAddr := args[0]
			indexName := args[1]
			indexIssuer := args[2]

			// Get value arguments

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateApprovedCollector(
				clientCtx.GetFromAddress().String(),
				indexAddr,
				indexName,
				indexIssuer,
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

func CmdUpdateApprovedCollector() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-approved-collector [addr] [issuer]",
		Short: "Update a approved-collector",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAddr := args[0]
			indexIssuer := args[1]

			// Get value arguments

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateApprovedCollector(
				clientCtx.GetFromAddress().String(),
				indexAddr,
				indexIssuer,
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

func CmdDeleteApprovedCollector() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-approved-collector [addr] [issuer]",
		Short: "Delete a approved-collector",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexAddr := args[0]
			indexIssuer := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteApprovedCollector(
				clientCtx.GetFromAddress().String(),
				indexAddr,
				indexIssuer,
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
