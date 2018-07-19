const RegistryLib = artifacts.require("RegistryLib");
const Registrar = artifacts.require("Registrar");

module.exports = function(deployer) {
  deployer.deploy(RegistryLib);
  deployer.link(RegistryLib, Registrar);
  deployer.deploy(Registrar);
};
