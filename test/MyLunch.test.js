const { expectRevert } = require("@openzeppelin/test-helpers");
const MyLunch = artifacts.require("MyLunch");

contract("MyLunch", (account) => {
  it("my lunch count should be 3", async () => {
    const myLunchInstance = await MyLunch.deployed();
    const foodCount = await myLunchInstance.getFoodCount.call();
    assert.equal(3, foodCount, "foodCount count should be 3");
  });

  it("the first index should be noodle", async () => {
    const myLunchInstance = await MyLunch.deployed();
    const foodName = await myLunchInstance.foodList.call(0);
    assert.equal("noodle", foodName, "candidate count should be noodle");
  });

  it("vote for rice then rice count should be 1", async () => {
    const myLunchInstance = await MyLunch.deployed();
    await myLunchInstance.voteFoodByName("rice");
    const riceVoteCount = await myLunchInstance.getVotedFoodByName("rice");
    assert.equal(1, riceVoteCount, "wrong count for rice");
  });

  it("add new food 'MaMa'", async () => {
    const myLunchInstance = await MyLunch.deployed();
    await myLunchInstance.addFood("MaMa");
    const foodCount = await myLunchInstance.getFoodCount.call();
    const foodName = await myLunchInstance.foodList.call(foodCount - 1);
    assert.equal(
      "MaMa",
      foodName,
      "the last index of food list should be MaMa"
    );
  });

  it("add food but food was added", async () => {
    const myLunchInstance = await MyLunch.deployed();
    await expectRevert(myLunchInstance.addFood("rice"), "food was added");
  });
});
