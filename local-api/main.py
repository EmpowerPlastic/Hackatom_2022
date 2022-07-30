from flask import Flask, request
from flask_cors import CORS, cross_origin
import subprocess

api = Flask(__name__)
cors = CORS(api, resource={
    r"/*":{
        "origins":"*"
    }
})

restart = "cd; rm -rf .plasticcreditledger/; cd hackaton/Hackatom_2022/plasticcreditledger/; ignite chain serve" 
store = "plasticcreditledgerd tx wasm store fundcollectors-aarch64.wasm --from alice --chain-id plasticcreditledger --gas auto --gas-adjustment 1.3"

importantData = {}

def runTerminal(command):
    process = subprocess.Popen(
        [command], stdout=subprocess.PIPE, shell=True)
    data = process.communicate()[0].decode('utf-8')
    print(data)
    return data

def getAccounts():
    processAccounts = runTerminal("plasticcreditledgerd keys list")
    lines = processAccounts.split("\n")
    addresses = []
    for line in lines:
        if line.startswith("  address:"):
            addresses.append(line[-43:])
    return addresses

@api.route('/store/', methods=['GET'])
def storeContract():
    command = "cd; cd hackaton/Hackatom_2022/fundcollectors/artifacts; plasticcreditledgerd tx wasm store fundcollectors-aarch64.wasm --from alice --chain-id plasticcreditledger --gas auto --gas-adjustment 1.3 -b block -y"
    data = runTerminal(command)
    return data

@api.route('/instantiate/', methods=['GET'])
def instContract():
    command = """plasticcreditledgerd tx wasm instantiate 2 \
    '{"operator":"wasm13lgh56mvp5te4dkyl6v5fzpyzkvnj6yzzhsmhc","collector":"wasm1q7skgzref9tgxtjn73nfqd67frxhea4mnetjms","amount":123000, "asset":"stake"}' \
    --no-admin --amount 100000stake  --label "Money for job" --from wasm13lgh56mvp5te4dkyl6v5fzpyzkvnj6yzzhsmhc --chain-id plasticcreditledger --gas auto --gas-adjustment 1.3 -b block -y"""
    data = runTerminal(command)
    print(data)
    return data

# wasm1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqr5j2ht

@api.route('/sponsor/', methods=['GET'])
def sponsorContract():
    command = """plasticcreditledgerd tx wasm execute wasm1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqr5j2ht  \
    '{"amount":121000, "asset":"stake"}' --amount 121000stake --from wasm13lgh56mvp5te4dkyl6v5fzpyzkvnj6yzzhsmhc --chain-id plasticcreditledger --gas-prices 10000stake --gas auto --gas-adjustment 1.3 -b block -y"""
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
        command = f"plasticcreditledgerd q bank balances {add}"
        data = runTerminal(command)
        newUser["address"] = add
        value = data.split("\"")
        newUser["balance"] = value[1]
        result[idx] = newUser
    return result

if __name__ == '__main__':
    api.run() 