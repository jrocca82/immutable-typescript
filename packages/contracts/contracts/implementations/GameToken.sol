// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@imtbl/contracts/contracts/token/erc20/ImmutableERC20.sol";

contract GameToken is ImmutableERC20 {
    constructor() ImmutableERC20("CatsAndSoup", "CAS") {}


    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}