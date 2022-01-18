const RouteManager = artifacts.require("./2_router_manager/RouteManager.sol");

module.exports = function(deployer) {
  deployer.deploy(RouteManager);
};