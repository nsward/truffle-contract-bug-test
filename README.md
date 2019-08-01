An illustration of an issue with truffle-contract's `contractInstance.sendTransaction`.

## Issue

The truffle-contract method sendTransaction drops the data parameter, sending a raw transaction with no data.

## Steps to test

- clone this repo
- `npm install`
- `truffle test`

The test sends transactions to the `DataTarget` contract, which just emits an event with the calldata in it's fallback function. When sent using `web3.eth.sendTransaction({ data:TX_DATA })`, the data is included in the transaction, but truffle-contract's `contractInstance.sendTransaction({ data: TX_DATA })` does not include the data.

![test screenshot](../screenshots/res/truffle-test-screenshot.png?raw=true)

## Environment

* Operating System: Arch Linux 5.2.5
* Ethereum client: ganache-cli
* Truffle version (`truffle version`): 5.0.30
* node version (`node --version`): 10.15.3
* npm version (`npm --version`): 6.9.0
