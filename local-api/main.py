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

@api.route('/instantiate/', methods=['GET'])
def instContract():
    command = """plasticcreditledgerd tx wasm instantiate 1 \
    '{"operator":"wasm18hl5c9xn5dze2g50uaw0l2mr02ew57zkq4ekwt","collector":"wasm1m9l358xunhhwds0568za49mzhvuxx9uxf9974x","amount":"123000", "asset":"stake"}' \
    --home data/test-1 --no-admin --amount 100000stake --node tcp://0.0.0.0:16657 --label "Money for job" --from val1 --keyring-backend test --chain-id test-1 --gas auto --gas-adjustment 1.3 -b block -y"""
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

@api.route('/pcrd/issuers', methods=['GET'])
def runGetIssuers():
    command = """plasticcreditledgerd q pcrd list-issuer"""
    data = runTerminal(command)
    print(data)
    return data

@api.route('/pcrd/approved', methods=['GET'])
def runGetApproved():
    command = """plasticcreditledgerd q pcrd list-approved-collector"""
    data = runTerminal(command)
    print(data)
    return data

@api.route('/pcrd/issue', methods=['GET'])
def issuePlasticCredit():
    command = """plasticcreditledgerd tx pcrd issue-credits wasm10h9stc5v6ntgeygf5xf945njqq5h32r5mq3f99 pet descriptionisnice img 1 2 --from val2 --home data/test-2 --node tcp://0.0.0.0:26657 --keyring-backend test --chain-id test-2 --gas auto --gas-adjustment 1.3 -b block -y"""
    data = runTerminal(command)
    print(data)
    return data

@api.route('/ica/1/<addr>', methods=['GET'])
def getIca(addr):
    command = """plasticcreditledgerd q intertx interchainaccounts connection-0 """ + addr + """ --node tcp://0.0.0.0:16657"""
    data = runTerminal(command)
    print(data)
    return data

@api.route('/ica/2/<addr>', methods=['GET'])
def getIca(addr):
    command = """plasticcreditledgerd q intertx interchainaccounts connection-0 """ + addr
    data = runTerminal(command)
    print(data)
    return data

@api.route('/contracts', methods=['GET'])
def getIca():
    command = """plasticcreditledgerd q wasm list-contract-by-code 1 --node tcp://0.0.0.0:16657"""
    data = runTerminal(command)
    print(data)
    return data

if __name__ == '__main__':
    api.run() 