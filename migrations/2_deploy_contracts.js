const MyLunch = artifacts.require("MyLunch");

module.exports = (deployer) => {
  deployer.deploy(MyLunch, ["noodle", "rice", "somtum"]);
};
