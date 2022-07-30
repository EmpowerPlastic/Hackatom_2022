from email.utils import getaddresses
import subprocess
import json

# Get user's balance and returns an int (in udenom)
def run_api(command):
    process = subprocess.Popen(
        [command], stdout=subprocess.PIPE, shell=True)
    data = process.communicate()[0].decode('utf-8')
    output = json.dumps(data, indent=4, sort_keys=True)
    print(output)
    return data

# run_api("plasticcreditledgerd keys list --output json")


def getAccounts():
    process = subprocess.Popen(
        ["plasticcreditledgerd keys list"], stdout=subprocess.PIPE, shell=True)
    data = process.communicate()[0].decode('utf-8')
    lines = data.split("\n")
    addresses = []
    for line in lines:
        if line.startswith("  address:"):
            addresses.append(line[-43:])

    return(addresses)

print(getAccounts())