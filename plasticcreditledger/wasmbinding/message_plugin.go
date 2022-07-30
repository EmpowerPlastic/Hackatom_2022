package wasmbinding

import (
	"encoding/json"
	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
	wasmvmtypes "github.com/CosmWasm/wasmvm/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	intertxkeeper "github.com/cosmos/interchain-accounts/x/inter-tx/keeper"
	intertxtypes "github.com/cosmos/interchain-accounts/x/inter-tx/types"
	"plasticcreditledger/wasmbinding/bindings"
	onestringkeeper "plasticcreditledger/x/onestring/keeper"
	onestringtypes "plasticcreditledger/x/onestring/types"
)

// CustomMessageDecorator returns decorator for custom CosmWasm bindings messages
func CustomMessageDecorator(intertxKeeper intertxkeeper.Keeper, onestringKeeper onestringkeeper.Keeper) func(wasmkeeper.Messenger) wasmkeeper.Messenger {
	return func(old wasmkeeper.Messenger) wasmkeeper.Messenger {
		return &CustomMessenger{
			wrapped:         old,
			intertxKeeper:   intertxKeeper,
			onestringKeeper: onestringKeeper,
		}
	}
}

type CustomMessenger struct {
	wrapped         wasmkeeper.Messenger
	intertxKeeper   intertxkeeper.Keeper
	onestringKeeper onestringkeeper.Keeper
}

var _ wasmkeeper.Messenger = (*CustomMessenger)(nil)

// DispatchMsg executes on the contractMsg.
func (m *CustomMessenger) DispatchMsg(ctx sdk.Context, contractAddr sdk.AccAddress, contractIBCPortID string, msg wasmvmtypes.CosmosMsg) ([]sdk.Event, [][]byte, error) {
	if msg.Custom != nil {
		// only handle the happy path where this is really creating / minting / swapping ...
		// leave everything else for the wrapped version
		var contractMsg bindings.IntertxMsg
		if err := json.Unmarshal(msg.Custom, &contractMsg); err != nil {
			return nil, nil, sdkerrors.Wrap(err, "intertx msg")
		}
		if contractMsg.RegisterAccount != nil {
			return m.registerAccount(ctx, contractAddr, contractMsg.RegisterAccount)
		}
		if contractMsg.SetTheString != nil {
			return m.setTheString(ctx, contractMsg.SetTheString)
		}
	}
	return m.wrapped.DispatchMsg(ctx, contractAddr, contractIBCPortID, msg)
}

func (m *CustomMessenger) registerAccount(ctx sdk.Context, _ sdk.AccAddress, registerAccountMsg *bindings.RegisterAccount) ([]sdk.Event, [][]byte, error) {
	msgServer := intertxkeeper.NewMsgServerImpl(m.intertxKeeper)
	if _, err := msgServer.RegisterAccount(sdk.WrapSDKContext(ctx), &intertxtypes.MsgRegisterAccount{
		Owner:        registerAccountMsg.Owner,
		ConnectionId: registerAccountMsg.ConnectionId,
	}); err != nil {
		return nil, nil, err
	}

	return nil, nil, nil
}

func (m *CustomMessenger) setTheString(ctx sdk.Context, setTheStringMsg *bindings.SetTheString) ([]sdk.Event, [][]byte, error) {
	m.onestringKeeper.SetThestring(ctx, onestringtypes.Thestring{
		Valueofthestring: setTheStringMsg.TheString,
		Creator:          setTheStringMsg.Creator,
	})

	return nil, nil, nil
}
