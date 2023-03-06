// SPDX-License-Idemtifier: MIT

pragma solidity ^0.8.0;

contract Calculator {
    function add(int256 num1, int256 num2) public pure returns (int256) {
        return num1 + num2;
    }

    function sub(int256 num1, int256 num2) public pure returns (int256) {
        return num1 - num2;
    }

    function mul(int256 num1, int256 num2) public pure returns (int256) {
        return num1 * num2;
    }

    function div(int256 num1, int256 num2) public pure returns (int256) {
        return num1 / num2;
    }
}