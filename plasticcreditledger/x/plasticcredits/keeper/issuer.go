package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"plasticcreditledger/x/plasticcredits/types"
)

// SetIssuer set a specific issuer in the store from its index
func (k Keeper) SetIssuer(ctx sdk.Context, issuer types.Issuer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IssuerKeyPrefix))
	b := k.cdc.MustMarshal(&issuer)
	store.Set(types.IssuerKey(
		issuer.Addr,
	), b)
}

// GetIssuer returns a issuer from its index
func (k Keeper) GetIssuer(
	ctx sdk.Context,
	addr string,

) (val types.Issuer, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IssuerKeyPrefix))

	b := store.Get(types.IssuerKey(
		addr,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveIssuer removes a issuer from the store
func (k Keeper) RemoveIssuer(
	ctx sdk.Context,
	addr string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IssuerKeyPrefix))
	store.Delete(types.IssuerKey(
		addr,
	))
}

// GetAllIssuer returns all issuer
func (k Keeper) GetAllIssuer(ctx sdk.Context) (list []types.Issuer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IssuerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Issuer
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
