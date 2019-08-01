pragma solidity ^0.5.10;

contract DataTarget {

    event LogCall(address src, uint val, bytes data);

    function () external payable {
        emit LogCall(msg.sender, msg.value, msg.data);
    }
}
