#!/bin/bash
set -e

CONTRACT_DIR=../cosmwasm

cd $CONTRACT_DIR || exit

sudo docker run --rm -v "$(pwd)":/code \
       --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
       --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
       cosmwasm/workspace-optimizer:0.12.6

plasticcreditledgerd tx wasm store artifacts/fundcollectors.wasm \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 --keyring-backend test \
    --from val1 --chain-id test-1 --node tcp://0.0.0.0:16657 \
    --gas auto --gas-adjustment 1.3 -b block

sleep 2