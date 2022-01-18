const MultiSigWallet = artifacts.require("./3_multisig_wallet/MultiSigWallet.sol");

module.exports = function(deployer) {
  deployer.deploy(MultiSigWallet);
};