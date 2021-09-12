const MyLunch = artifacts.require("MyLunch");

contract("MyLunch", (account) => {
  it("my lunch count should be 3", async () => {
    const myLunchInstance = await MyLunch.deployed();
    const candidateCount = await myLunchInstance.getFoodNameListCount.call();
    assert.equal(3, candidateCount, "candidate count should be 3");
  });

  it("the first index should be noodle", async () => {
    const myLunchInstance = await MyLunch.deployed();
    const foodName = await myLunchInstance.foodNameList.call(0);
    assert.equal("noodle", foodName, "candidate count should be noodle");
  });

  it("vote for rice then rice vote count should be 1", async () => {
    const myLunchInstance = await MyLunch.deployed();
    await myLunchInstance.voteFoodByName("rice");
    const riceVoteCount = await myLunchInstance.getVoteFoodCount("rice");
    assert.equal(1, riceVoteCount, "wrong count for rice");
  });
});
