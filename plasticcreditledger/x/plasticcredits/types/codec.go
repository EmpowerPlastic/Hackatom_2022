package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateIssuer{}, "plasticcredits/CreateIssuer", nil)
	cdc.RegisterConcrete(&MsgUpdateIssuer{}, "plasticcredits/UpdateIssuer", nil)
	cdc.RegisterConcrete(&MsgDeleteIssuer{}, "plasticcredits/DeleteIssuer", nil)
	cdc.RegisterConcrete(&MsgCreateApprovedCollector{}, "plasticcredits/CreateApprovedCollector", nil)
	cdc.RegisterConcrete(&MsgUpdateApprovedCollector{}, "plasticcredits/UpdateApprovedCollector", nil)
	cdc.RegisterConcrete(&MsgDeleteApprovedCollector{}, "plasticcredits/DeleteApprovedCollector", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateIssuer{},
		&MsgUpdateIssuer{},
		&MsgDeleteIssuer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateApprovedCollector{},
		&MsgUpdateApprovedCollector{},
		&MsgDeleteApprovedCollector{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
