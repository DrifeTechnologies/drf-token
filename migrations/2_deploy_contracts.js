var DrifeERCToken = artifacts.require("./DrifeERCToken.sol");

module.exports = async function (deployer) {
  await deployer.deploy(DrifeERCToken);
};
