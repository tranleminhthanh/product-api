const test = require("node:test");
const assert = require("node:assert/strict");

test("Kiem tra API lay san pham", async () => {
  const res = await fetch("http://localhost:3000/api/products");
  assert.equal(res.status, 200);
});
