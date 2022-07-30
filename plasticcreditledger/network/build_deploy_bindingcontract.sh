#!/bin/bash
set -e

CONTRACT_DIR=../cosmwasm

cd $CONTRACT_DIR || exit

sudo docker run --rm -v "$(pwd)":/code \
       --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
       --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
       cosmwasm/workspace-optimizer:0.12.6

plasticcreditledgerd tx wasm store artifacts/bindingcontract.wasm \
    --home ../plasticcreditledger/data/test-1 --keyring-backend test \
    --from val1 --chain-id test-1 --node tcp://0.0.0.0:16657 \
    --gas auto --gas-adjustment 1.3

sleep 2

plasticcreditledgerd tx wasm instantiate 1 '{}' --node tcp://0.0.0.0:16657 \
    --label whatever --no-admin --from val1 --keyring-backend test \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 \
    --chain-id test-1
sleep 1

plasticcreditledgerd q wasm list-contract-by-code 1 --node tcp://0.0.0.0:16657