package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ApprovedCollectorKeyPrefix is the prefix to retrieve all ApprovedCollector
	ApprovedCollectorKeyPrefix = "ApprovedCollector/value/"
)

// ApprovedCollectorKey returns the store key to retrieve a ApprovedCollector from the index fields
func ApprovedCollectorKey(
	addr string,
	issuer string,
) []byte {
	var key []byte

	addrBytes := []byte(addr)
	key = append(key, addrBytes...)
	key = append(key, []byte("/")...)

	issuerBytes := []byte(issuer)
	key = append(key, issuerBytes...)
	key = append(key, []byte("/")...)

	return key
}
