package wasmbinding

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/std"
	"github.com/stretchr/testify/require"
	"plasticcreditledger/app/params"
	codectypes "plasticcreditledger/x/onestring/types"
	"testing"
)

func TestParseStringToAny(t *testing.T) {
	msgStr := `{
		"@type": "/plasticcreditledger.onestring.MsgCreateThestring",
			"creator": "wasm1npgsrrx5zdjdejfv6fq3au4jnxxw95x502lw4m",
			"valueofthestring": "hoppla"
	}`

	encodingConfig := params.MakeEncodingConfig()
	std.RegisterLegacyAminoCodec(encodingConfig.Amino)
	std.RegisterInterfaces(encodingConfig.InterfaceRegistry)
	codectypes.RegisterCodec(encodingConfig.Amino)
	codectypes.RegisterInterfaces(encodingConfig.InterfaceRegistry)

	m := &CustomMessenger{
		encodingConfig: encodingConfig,
	}

	msg, err := m.ParseStringToAny(msgStr)
	fmt.Println(msg)
	require.NoError(t, err)
	require.NotEmpty(t, msg)
}
