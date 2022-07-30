package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:                PortID,
		IssuerList:            []Issuer{},
		ApprovedCollectorList: []ApprovedCollector{},
		CreditList:            []Credit{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated index in issuer
	issuerIndexMap := make(map[string]struct{})

	for _, elem := range gs.IssuerList {
		index := string(IssuerKey(elem.Addr))
		if _, ok := issuerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for issuer")
		}
		issuerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in approvedCollector
	approvedCollectorIndexMap := make(map[string]struct{})

	for _, elem := range gs.ApprovedCollectorList {
		index := string(ApprovedCollectorKey(elem.Addr, elem.Issuer))
		if _, ok := approvedCollectorIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for approvedCollector")
		}
		approvedCollectorIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in credit
	creditIndexMap := make(map[string]struct{})

	for _, elem := range gs.CreditList {
		index := string(CreditKey(elem.Index))
		if _, ok := creditIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for credit")
		}
		creditIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
