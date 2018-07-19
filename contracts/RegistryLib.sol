pragma solidity ^0.4.24;
pragma experimental "v0.5.0";

library RegistryLib {

  /*
   * Data Structures
   */

  struct Registry {
    // key hash to record
    mapping (bytes32 => Record) records;

    // to allow enumeration
    bytes32[] hashes;
  }

  struct Record {
    bool exists;
    string key;
    string value;
    uint createdAt;  // block no.
    uint updatedAt;  // block no.
  }


  /*
   * Events
   */

  event Set(string key, string value);


  /*
   * Registry Methods
   */

  function set(
    Registry storage self,
    string key,
    string value
  )
    internal
  {
    bytes32 hash = getHash(key);
    Record storage record = self.records[hash];

    if (!record.exists) {
      // new record
      record.createdAt = block.number;
    }

    record.exists = true;
    record.key = key;
    record.value = value;
    record.updatedAt = block.number;
    self.hashes.push(hash);

    emit Set(key, value);
  }

  function get(
    Registry storage self,
    string key
  )
    internal
    view
    returns (Record storage record)
  {
    record = self.records[getHash(key)];
    require(
      record.exists,
      "registry:key-not-found"
    );
  }

  function size(Registry storage self)
    internal
    view
    returns (uint256 length)
  {
    length = self.hashes.length;
  }

  function list(Registry storage self)
    internal
    view
    returns (Record[] memory records)
  {
    uint256 i;
    uint num = size(self);

    records = new Record[](num);
    for (i = 0; i < num; i++) {
      bytes32 hash = self.hashes[i];
      records[i] = self.records[hash];
    }
  }

  /*
   * Private Methods
   */
  function getHash(string key)
    internal
    pure
    returns (bytes32 hash)
  {
    hash = keccak256(abi.encodePacked(key));
  }
}
