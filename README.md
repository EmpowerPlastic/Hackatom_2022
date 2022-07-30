# Hackatom_2022

Our initial idea was to create work with eco credits on regen network using interchain accounts so that you could
create a presale funding mechanism for other chains over IBC and ICA.

We quickly realized that Regen was a bit too far behind on the IBC version and after a quick attempt to upgrade it we decided to create our own chain for this purpose.

To make the challenge a bit more interesting, we decided to use the DAO_UP contract as the basis, meaning we would do Interchain Accounts over CosmWasm.

<!-- TODO: ADD PICTURE OF FLOW HERE -->

# Chain 1
Controller chain (Smart contract chain)
- chain-id: test-1
- home: data/test-1
- rpc: 0.0.0.0:16657
- Accounts:
  - Operator wasm18hl5c9xn5dze2g50uaw0l2mr02ew57zkq4ekwt (val1)
  - Collector wasm1m9l358xunhhwds0568za49mzhvuxx9uxf9974x (demowallet1)
  - Funder/Sponsor wasm1mjk79fjjgpplak5wq838w0yd982gzkyff27t5s (rly1)

# Chain 2
Host chain (Plastic credit chain)
- chain-id: test-2
- home: data/test-2
- rpc: 0.0.0.0:26657
- Accounts:
  - Credit Issuer/Operator wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w (val2)
  - Collector wasm10h9stc5v6ntgeygf5xf945njqq5h32r5mq3f99 (demowallet2)
