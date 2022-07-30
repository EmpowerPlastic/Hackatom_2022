package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"plasticcreditledger/x/plasticcredits/types"
)

// SetApprovedCollector set a specific approvedCollector in the store from its index
func (k Keeper) SetApprovedCollector(ctx sdk.Context, approvedCollector types.ApprovedCollector) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovedCollectorKeyPrefix))
	b := k.cdc.MustMarshal(&approvedCollector)
	store.Set(types.ApprovedCollectorKey(
		approvedCollector.Addr,
		approvedCollector.Issuer,
	), b)
}

// GetApprovedCollector returns a approvedCollector from its index
func (k Keeper) GetApprovedCollector(
	ctx sdk.Context,
	addr string,
	issuer string,

) (val types.ApprovedCollector, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovedCollectorKeyPrefix))

	b := store.Get(types.ApprovedCollectorKey(
		addr,
		issuer,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveApprovedCollector removes a approvedCollector from the store
func (k Keeper) RemoveApprovedCollector(
	ctx sdk.Context,
	addr string,
	issuer string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovedCollectorKeyPrefix))
	store.Delete(types.ApprovedCollectorKey(
		addr,
		issuer,
	))
}

// GetAllApprovedCollector returns all approvedCollector
func (k Keeper) GetAllApprovedCollector(ctx sdk.Context) (list []types.ApprovedCollector) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovedCollectorKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ApprovedCollector
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
