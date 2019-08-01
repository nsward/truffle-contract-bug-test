module.exports = {
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.10",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       }
      }
    }
  }
}
