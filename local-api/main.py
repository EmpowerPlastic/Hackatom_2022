from flask import Flask, request
from flask_cors import CORS, cross_origin
import subprocess

api = Flask(__name__)
cors = CORS(api, resource={
    r"/*":{
        "origins":"*"
    }
})

importantData = {}

def runTerminal(command):
    process = subprocess.Popen(
        [command], stdout=subprocess.PIPE, shell=True)
    data = process.communicate()[0].decode('utf-8')
    print(data)
    return data

def getAccounts():
    processAccounts = runTerminal("plasticcreditledgerd keys list --keyring-backend test --home data/test-1")
    lines = processAccounts.split("\n")
    addresses = []
    for line in lines:
        if line.startswith("  address:"):
            addresses.append(line[-43:])
    return addresses

# Example output:
# wasm1etxtq3v4chzn7xrah3w6ukkxy7vlc889n5ervgxz425msar6ajzsx48awh
@api.route('/instantiate/', methods=['GET'])
def instContract():
    command = """plasticcreditledgerd tx wasm instantiate 1 \
    '{"operator":"wasm18hl5c9xn5dze2g50uaw0l2mr02ew57zkq4ekwt","collector":"wasm1m9l358xunhhwds0568za49mzhvuxx9uxf9974x","amount":"123000", "asset":"stake"}' \
    --home data/test-1 --no-admin --amount 100000stake --node tcp://0.0.0.0:16657 --label "Money for job" --from val1 --keyring-backend test --chain-id test-1 --gas auto --gas-adjustment 1.3 -b block -y --output json | jq -r '.logs[0].events | .[] | select(.type=="wasm").attributes | .[] | select(.key=="_contract_address").value'"""
    data = runTerminal(command)
    print(data)
    return data

@api.route('/pwd/', methods=['GET'])
def pwd():
    command = """pwd"""
    data = runTerminal(command)
    print(data)
    return data
# wasm1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqr5j2ht

@api.route('/sponsor/<contract>', methods=['GET'])
def sponsorContract(contract):
    command = "plasticcreditledgerd tx wasm execute " + contract + """ '{"support_funding": { "amount":"121000" }}' --amount 121000stake --from rly1 --home data/test-1 --node tcp://0.0.0.0:16657 --keyring-backend test --chain-id test-1 --gas auto --gas-adjustment 1.3 -b block -y"""
    data = runTerminal(command)
    print(data)
    return data

@api.route('/conclude/', methods=['GET'])
def concludeContract():
    command = """"""
    data = runTerminal(command)
    print(data)
    return data

@api.route('/bank/', methods=['GET'])
def runBank():
    result = {}
    addresses = getAccounts()
    print(addresses)
    for idx in range(len(addresses)):
        add = addresses[idx]
        newUser = {}
        command = f"plasticcreditledgerd q bank balances {add} --node tcp://0.0.0.0:16657"
        data = runTerminal(command)
        newUser["address"] = add
        value = data.split("\"")
        newUser["balance"] = value[1]
        result[idx] = newUser
    return result

# Example output:
# [
#   {
#     "addr": "wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc",
#     "name": "icaissuer",
#     "creator": "wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc"
#   },
#   {
#     "addr": "wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w",
#     "name": "empower",
#     "creator": "wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w"
#   }
# ]
@api.route('/pcrd/issuers', methods=['GET'])
def runGetIssuers():
    command = """plasticcreditledgerd q pcrd list-issuer"""
    data = runTerminal(command)
    print(data)
    return data

# Example output:
# [
#   {
#     "addr": "wasm10h9stc5v6ntgeygf5xf945njqq5h32r5mq3f99",
#     "name": "Plastic Free Lagoon",
#     "issuer": "wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w",
#     "creator": "wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w"
#   }
# ]
@api.route('/pcrd/approved', methods=['GET'])
def runGetApproved():
    command = """plasticcreditledgerd q pcrd list-approved-collector --output json | jq '.approvedCollector'"""
    data = runTerminal(command)
    print(data)
    return data

# Not in use yet (or ever?)
@api.route('/pcrd/issue', methods=['GET'])
def issuePlasticCredit():
    command = """plasticcreditledgerd tx pcrd issue-credits wasm10h9stc5v6ntgeygf5xf945njqq5h32r5mq3f99 pet descriptionisnice img 1 2 --from val2 --home data/test-2 --node tcp://0.0.0.0:26657 --keyring-backend test --chain-id test-2 --gas auto --gas-adjustment 1.3 -b block -y"""
    data = runTerminal(command)
    print(data)
    return data

# Example output:
# wasm1xg7sjgm8ht44uz6ycgzaqa4p272hltxxc8smesygql98a64npc6qhh7tr5
@api.route('/ica/1/<addr>', methods=['GET'])
def getIca1(addr):
    command = """plasticcreditledgerd q intertx interchainaccounts connection-0 """ + addr + """ --node tcp://0.0.0.0:16657 --output json | jq -r '.interchain_account_address'"""
    data = runTerminal(command)
    print(data)
    return data

# Example output:
# wasm1xg7sjgm8ht44uz6ycgzaqa4p272hltxxc8smesygql98a64npc6qhh7tr5
@api.route('/ica/2/<addr>', methods=['GET'])
def getIca2(addr):
    command = """plasticcreditledgerd q intertx interchainaccounts connection-0 """ + addr + """ --output json | jq -r '.interchain_account_address'"""
    data = runTerminal(command)
    print(data)
    return data

# Example output:
# [
#   "wasm1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrss5maay"
# ]
@api.route('/contracts', methods=['GET'])
def getContracts():
    command = """plasticcreditledgerd q wasm list-contract-by-code 1 --node tcp://0.0.0.0:16657 --output json | jq '.contracts'"""
    data = runTerminal(command)
    print(data)
    return data

if __name__ == '__main__':
    api.run() 