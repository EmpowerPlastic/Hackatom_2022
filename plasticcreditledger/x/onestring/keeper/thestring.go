package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"plasticcreditledger/x/onestring/types"
)

// SetThestring set thestring in the store
func (k Keeper) SetThestring(ctx sdk.Context, thestring types.Thestring) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThestringKey))
	b := k.cdc.MustMarshal(&thestring)
	store.Set([]byte{0}, b)
}

// GetThestring returns thestring
func (k Keeper) GetThestring(ctx sdk.Context) (val types.Thestring, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThestringKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveThestring removes thestring from the store
func (k Keeper) RemoveThestring(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThestringKey))
	store.Delete([]byte{0})
}
