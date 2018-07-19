const Registrar = artifacts.require("Registrar");

contract("Registrar", (accounts) => {
  let registrar;

  before("gets deployed instance", async () => {
    registrar = await Registrar.deployed();
  });

  it("sets and retrieves correctly", async () => {
    let registry = "set-test";

    const key = "current-location";
    const whereAmI = "DappCon Berlin 2018";

    await registrar.set(registry, key, whereAmI);

    let record = await registrar.get(registry, key);

    assert.equal(record.value, whereAmI);
    assert.equal(record.createdAt, record.updatedAt);
  });

  it("fails to get a non-existent key", async () => {
    let registry = "get-test";

    try {
      let record = await registrar.get(registry, "fake-key");
      assert.ok(false, "Non-existent key should throw error");
    } catch (e) {
      // expected error
    }
  });

  it.skip("lists registry keys", async () => {
    let registry = "list-test";

    await registrar.set(registry, "current-location", "dappcon");
    await registrar.set(registry, "current-location", "still-dappcon");
    await registrar.set(registry, "is-berlin-cool", "jawohl!");

    let num = await registrar.size(registry);
    let keys = [];
    for (var i = 0; i < num; i++) {
      keys.push(await registrar.list(registry, i));
    }

    assert.deepEqual(keys, ["current-location", "is-berlin-cool"]);
  });
});
