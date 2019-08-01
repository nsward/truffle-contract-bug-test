const { expectEvent } = require("openzeppelin-test-helpers");

const DataTarget = artifacts.require("DataTarget");

contract("DataTarget", function([src]) {

  const TX_DATA = '0xffff';
  const LOG_CALL_EVENT = "LogCall";

  beforeEach("deploy contracts", async () => {
    this.target = await DataTarget.new();
  });

  describe("when using web3.eth.sendTransaction", () => {
    it("should include to, from, and data parameters", async () => {
      const { logs } = await web3.eth.sendTransaction({
        to: this.target.address,
        from: src,
        data: TX_DATA
      });

      expectEvent.inLogs(DataTarget.decodeLogs(logs), LOG_CALL_EVENT, {data:TX_DATA});
    });
  });

  describe("when using instance.sendTransaction", () => {
    it("should include to, from, and data parameters", async () => {
      // send with web3.eth.sendTransaction for event comparison
      await web3.eth.sendTransaction({to: this.target.address, from: src, data: TX_DATA});

      // send with truffle-contract method
      const { logs } = await this.target.sendTransaction({
        from: src,
        data: TX_DATA
      });

      // The event should include the data parameter
      expectEvent.inLogs(logs, LOG_CALL_EVENT, {data:TX_DATA});
    });
  });
});
