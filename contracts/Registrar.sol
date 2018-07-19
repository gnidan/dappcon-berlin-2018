pragma solidity ^0.4.24;
pragma experimental "v0.5.0";

import "./RegistryLib.sol";

contract Registrar {
  using RegistryLib for RegistryLib.Registry;

  // maps hash of name to registry
  mapping (bytes32 => RegistryLib.Registry)
    registries;


  /*
   * Public Methods
   */

  function set(
    string name,
    string key,
    string value
  )
    public
  {
    bytes32 hash = RegistryLib.getHash(name);
    RegistryLib.Registry storage registry =
      registries[hash];
    registry.set(key, value);
  }

  function get(string name, string key)
    public
    view
    returns (
      string value,
      uint256 createdAt,
      uint256 updatedAt
    )
  {
    bytes32 hash = RegistryLib.getHash(name);
    RegistryLib.Registry storage registry =
      registries[hash];
    RegistryLib.Record storage record =
      registry.get(key);

    value = record.value;
    createdAt = record.createdAt;
    updatedAt = record.updatedAt;
  }

  function size(string name)
    public
    view
    returns (uint256 num)
  {
    bytes32 hash = RegistryLib.getHash(name);
    RegistryLib.Registry storage registry =
      registries[hash];

    num = registry.size();
  }

  function list(string name, uint256 i)
    public
    view
    returns (string key)
  {
    bytes32 hash = RegistryLib.getHash(name);
    RegistryLib.Registry storage registry =
      registries[hash];

    RegistryLib.Record[] memory records =
      registry.list();

    key = records[i].key;
  }
}
