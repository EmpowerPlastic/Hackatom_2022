#!/bin/bash

# Load shell variables
. ./network/hermes/variables.sh

### Sleep is needed otherwise the relayer crashes when trying to init
sleep 1s
### Restore Keys
#$HERMES_BINARY --config ./network/hermes/config.toml keys restore test-1 -m "alley afraid soup fall idea toss can goose become valve initial strong forward bright dish figure check leopard decide warfare hub unusual join cart"
$HERMES_BINARY --config ./network/hermes/config.toml keys add --key-name test-1 --chain test-1 --mnemonic-file ./network/hermes/key1.txt
sleep 5s

#$HERMES_BINARY --config ./network/hermes/config.toml keys restore test-2 -m "record gift you once hip style during joke field prize dust unique length more pencil transfer quit train device arrive energy sort steak upset"
$HERMES_BINARY --config ./network/hermes/config.toml keys add --key-name test-2 --chain test-2 --mnemonic-file ./network/hermes/key2.txt
sleep 5s
