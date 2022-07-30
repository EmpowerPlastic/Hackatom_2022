#!/bin/bash

plasticcreditledgerd tx pcrd create-issuer wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w empower \
    --from val2 --home data/test-2 --keyring-backend test --chain-id test-2 -b block

plasticcreditledgerd tx pcrd create-approved-collector wasm10h9stc5v6ntgeygf5xf945njqq5h32r5mq3f99 \
    "Plastic Free Lagoon" wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w \
    --from val2 --home data/test-2 --keyring-backend test --chain-id test-2 -b block