pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract MyLunch {
    string[] public foodNameList;
    mapping(string => uint256) foodCount;

    constructor(string[] memory initialFoodNameList) public {
        foodNameList = initialFoodNameList;
    }

    function getFoodNameListCount() public view returns (uint256) {
        return foodNameList.length;
    }

    function getVoteFoodCount(string memory foodName)
        public
        view
        returns (uint256)
    {
        return foodCount[foodName];
    }

    function voteFoodByName(string memory foodName) public {
        foodCount[foodName] = foodCount[foodName] + 1;
    }
}
