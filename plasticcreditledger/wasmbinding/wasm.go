package wasmbinding

import (
	"github.com/CosmWasm/wasmd/x/wasm"
	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
	intertxkeeper "github.com/cosmos/interchain-accounts/x/inter-tx/keeper"
	"plasticcreditledger/app/params"
	onestringkeeper "plasticcreditledger/x/onestring/keeper"
)

func RegisterCustomPlugins(encodingConfig params.EncodingConfig, intertxKeeper intertxkeeper.Keeper, onestringKeeper onestringkeeper.Keeper) []wasmkeeper.Option {
	messengerDecoratorOpt := wasmkeeper.WithMessageHandlerDecorator(
		CustomMessageDecorator(encodingConfig, intertxKeeper, onestringKeeper),
	)

	return []wasm.Option{messengerDecoratorOpt}
}
