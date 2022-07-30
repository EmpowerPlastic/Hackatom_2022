#!/bin/bash

plasticcreditledgerd tx pcrd create-issuer wasm10h9stc5v6ntgeygf5xf945njqq5h32r5mq3f99 empower \
    --from demowallet2 --home data/test-2 --keyring-backend test --chain-id test-2 -b block

plasticcreditledgerd tx pcrd create-approved-collector wasm1m3sungykykrxx9cv387659whdgfn9wuzd8fz325p45yumaxw638q5x2yam \
    wasm10h9stc5v6ntgeygf5xf945njqq5h32r5mq3f99 "Plastic Free Lagoon" \
    --from demowallet2 --home data/test-2 --keyring-backend test --chain-id test-2 -b block