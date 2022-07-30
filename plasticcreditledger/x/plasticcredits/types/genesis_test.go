package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"plasticcreditledger/x/plasticcredits/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				PortId: types.PortID,
				IssuerList: []types.Issuer{
					{
						Addr: "0",
					},
					{
						Addr: "1",
					},
				},
				ApprovedCollectorList: []types.ApprovedCollector{
					{
						Addr:   "0",
						Issuer: "0",
					},
					{
						Addr:   "1",
						Issuer: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated issuer",
			genState: &types.GenesisState{
				IssuerList: []types.Issuer{
					{
						Addr: "0",
					},
					{
						Addr: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated approvedCollector",
			genState: &types.GenesisState{
				ApprovedCollectorList: []types.ApprovedCollector{
					{
						Addr:   "0",
						Issuer: "0",
					},
					{
						Addr:   "0",
						Issuer: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
