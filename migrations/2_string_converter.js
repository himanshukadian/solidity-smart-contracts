const StringConverter = artifacts.require("./1_string_converter/StringConverter.sol");

module.exports = function(deployer) {
  deployer.deploy(StringConverter);
};