#!/bin/bash
set -e

CONTRACT_DIR=../cosmwasm

cd $CONTRACT_DIR || exit

sudo docker run --rm -v "$(pwd)":/code \
       --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
       --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
       cosmwasm/workspace-optimizer:0.12.6

plasticcreditledgerd tx wasm store artifacts/bindingcontract.wasm \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 --keyring-backend test \
    --from val1 --chain-id test-1 --node tcp://0.0.0.0:16657 \
    --gas auto --gas-adjustment 1.3 -b block -y

sleep 2

plasticcreditledgerd tx wasm instantiate 2 '{}' --node tcp://0.0.0.0:16657 \
    --label whatever --no-admin --from val1 --keyring-backend test \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 \
    --chain-id test-1 -b block -y
sleep 1

plasticcreditledgerd q wasm list-contract-by-code 2 --node tcp://0.0.0.0:16657

CONTRACT_ADDR=$(plasticcreditledgerd q wasm list-contract-by-code 2 --node tcp://0.0.0.0:16657 --output json | jq -r ".contracts"[0])

plasticcreditledgerd tx wasm execute "$CONTRACT_ADDR" \
    '{"register_account": {}}' \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 --keyring-backend test \
    --from val1 --chain-id test-1 --node tcp://0.0.0.0:16657 \
    --gas auto --gas-adjustment 1.3 -b block -y

echo "make start-rly"

echo "plasticcreditledgerd q intertx interchainaccounts connection-0 wasm18hl5c9xn5dze2g50uaw0l2mr02ew57zkq4ekwt --node tcp://0.0.0.0:16657"

echo "plasticcreditledgerd tx bank send wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w \
    wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc 10000stake \
     --from val2 --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-2 \
     --keyring-backend test --gas auto --gas-adjustment 1.3 --chain-id test-2 -y -b block"

echo "plasticcreditledgerd tx intertx submit ./simplemsg.json --connection-id connection-0 \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 \
    --keyring-backend test --from val1 --chain-id test-1 --node tcp://0.0.0.0:16657 \
    --gas auto --gas-adjustment 1.3 -b block -y"

echo "plasticcreditledgerd tx intertx submit ./simple2msg.json --connection-id connection-0 \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 \
    --keyring-backend test --from val1 --chain-id test-1 --node tcp://0.0.0.0:16657 \
    --gas auto --gas-adjustment 1.3 -b block -y"

# plasticcreditledgerd tx wasm execute "$CONTRACT_ADDR" '{"submit_tx": {"msg": "{\"@type\": \"/plasticcreditledger.onestring.MsgCreateThestring\", \"creator\": \"wasm1npgsrrx5zdjdejfv6fq3au4jnxxw95x502lw4m\", \"valueofthestring\": \"zhoppla\"}"}}' $TEST1_TX --from val1 --gas auto --gas-adjustment 1.3 --node tcp://0.0.0.0:16657 --chain-id test-1