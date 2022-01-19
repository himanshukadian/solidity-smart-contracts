const Election = artifacts.require("./Election.sol");

let partyNames = ["0x50617274793031", "0x50617274793032"];

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    Election,
    partyNames,
    [accounts[0], accounts[1], accounts[1]]
  );
};