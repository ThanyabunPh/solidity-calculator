from flask import Flask
from web3 import Web3

from config import config

app = Flask(__name__)
app.config.from_object(config)
try:
    web3 = Web3(Web3.HTTPProvider(app.config['GANACHE_URL']))
    print('connected to ganache' if web3.isConnected() else 'not connected to ganache')
    print(f'connected to {app.config["ABI_ADDRESS"]} contract')

    print('running @ http://localhost:5000')

    # set default account for the easy use of web3.eth.sendTransaction()
    # web3.eth.defaultAccount = web3.eth.accounts[0]

    # create contract instance
    contract = web3.eth.contract(address=app.config['ABI_ADDRESS'], abi=app.config['ABI'])

except Exception as e:
    print(e)


from .router import *