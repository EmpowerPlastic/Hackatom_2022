package wasmbinding

import (
	"github.com/CosmWasm/wasmd/x/wasm"
	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
	intertxkeeper "github.com/cosmos/interchain-accounts/x/inter-tx/keeper"
	onestringkeeper "plasticcreditledger/x/onestring/keeper"
)

func RegisterCustomPlugins(intertxKeeper intertxkeeper.Keeper, onestringKeeper onestringkeeper.Keeper) []wasmkeeper.Option {
	messengerDecoratorOpt := wasmkeeper.WithMessageHandlerDecorator(
		CustomMessageDecorator(intertxKeeper, onestringKeeper),
	)

	return []wasm.Option{messengerDecoratorOpt}
}
