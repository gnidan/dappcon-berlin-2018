pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "../contracts/RegistryLib.sol";

contract TestRegistryLib {
  using RegistryLib for RegistryLib.Registry;

  RegistryLib.Registry registry;

  function testSet() public {
    registry.set("a", "foo");
    Assert.equal(registry.size(), 1, "Registry should have one record");
  }

  function testGet() public {
    registry.set("a", "bar");

    RegistryLib.Record storage record = registry.get("a");
    Assert.equal(record.value, "bar", "Registry should have new value");
  }
}
