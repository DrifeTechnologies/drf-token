var DRFToken = artifacts.require("./DRF.sol");

module.exports = async function (deployer) {
  await deployer.deploy(DRFToken);
};
