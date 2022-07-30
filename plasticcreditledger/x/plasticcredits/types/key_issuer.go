package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// IssuerKeyPrefix is the prefix to retrieve all Issuer
	IssuerKeyPrefix = "Issuer/value/"
)

// IssuerKey returns the store key to retrieve a Issuer from the index fields
func IssuerKey(
	addr string,
) []byte {
	var key []byte

	addrBytes := []byte(addr)
	key = append(key, addrBytes...)
	key = append(key, []byte("/")...)

	return key
}
