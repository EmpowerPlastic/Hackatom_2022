package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"plasticcreditledger/x/plasticcredits/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group plasticcredits queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListIssuer())
	cmd.AddCommand(CmdShowIssuer())
	cmd.AddCommand(CmdListApprovedCollector())
	cmd.AddCommand(CmdShowApprovedCollector())
	cmd.AddCommand(CmdListCredit())
	cmd.AddCommand(CmdShowCredit())
	cmd.AddCommand(CmdIsApproved())

	// this line is used by starport scaffolding # 1

	return cmd
}
