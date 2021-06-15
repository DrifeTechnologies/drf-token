var DrifeToken = artifacts.require("./DrifeToken.sol");

module.exports = async function (deployer) {
  await deployer.deploy(DrifeToken);
};
