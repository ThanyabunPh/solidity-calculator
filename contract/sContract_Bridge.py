from app import web3
from app import contract


class contractMethod:
    def __init__(self):
        self.contract = contract

    def add(self, a, b):
        return self.contract.functions.add(a, b).call()

    def sub(self, a, b):
        return self.contract.functions.sub(a, b).call()

    def mul(self, a, b):
        return self.contract.functions.mul(a, b).call()

    def div(self, a, b):
        return self.contract.functions.div(a, b).call()
