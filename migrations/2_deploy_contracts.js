var DrifeERCToken = artifacts.require("./DrifeERCToken.sol");
var DrifeBEPToken = artifacts.require("./DrifeBEPToken.sol");

module.exports = async function (deployer) {
  await deployer.deploy(DrifeERCToken);
  await deployer.deploy(DrifeBEPToken);
};
