# To run the example:

1. `make install`
2. `make init`
3. `make deploy-binding` (A couple of manual prompts here still)
4. `make start-rly`

After a little while (relaying some messages I guess), run:
``` 
$ plasticcreditledgerd q intertx interchainaccounts connection-0 wasm18hl5c9xn5dze2g50uaw0l2mr02ew57zkq4ekwt --node tcp://0.0.0.0:16657
```

It should output:
```
interchain_account_address: wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc
```

If you want to you can give the new ICA some moneys:
``` 
plasticcreditledgerd tx bank send wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w \
    wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc 10000stake \
     --from val2 --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-2 \
     --keyring-backend test --gas auto --gas-adjustment 1.3 --chain-id test-2
```

Now, the part that does not work:
```
plasticcreditledgerd tx intertx submit ./simplemsg.json --connection-id connection-0 \
    --home /home/gg/code/Hackatom_2022/plasticcreditledger/data/test-1 \
    --keyring-backend test --from val1 --chain-id test-1 --node tcp://0.0.0.0:16657 \
    --gas auto --gas-adjustment 1.3 -b block
```