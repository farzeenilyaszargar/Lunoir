import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(new URL("../lib/cart.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { normalizeCart, readCart, addItem, setQuantity, cartTotal } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const catalog = [{ id: 1, sizes: ["S", "M"], price: 799 }, { id: 2, sizes: ["L"], price: 899 }];

test("legacy carts merge duplicate variants and ignore saved prices", () => {
  const lines = normalizeCart([{ id: 1, size: "M", price: 1 }, { id: 1, size: "M" }, { id: 1, size: "S" }], catalog);
  assert.deepEqual(lines, [{ id: 1, size: "M", quantity: 2 }, { id: 1, size: "S", quantity: 1 }]);
  assert.equal(cartTotal(lines, catalog), 2397);
});

test("corrupted storage and wrong top-level types recover to an empty cart", () => {
  for (const raw of [null, "{", "null", "{}", '"cart"', "42"]) assert.deepEqual(readCart(raw, catalog), []);
});

test("stale IDs, unavailable sizes and invalid quantities are discarded", () => {
  const lines = normalizeCart([null, {}, { id: 90, size: "S" }, { id: 1, size: "XXL" }, { id: 1, size: "S", quantity: -1 }, { id: 1, size: "S", quantity: 0 }, { id: 1, size: "S", quantity: 1.5 }, { id: 1, size: "S", quantity: "2" }, { id: 2, size: "L", quantity: 3 }], catalog);
  assert.deepEqual(lines, [{ id: 2, size: "L", quantity: 3 }]);
});

test("adding shares quantities only within the same product and size", () => {
  const original = [{ id: 1, size: "M", quantity: 1 }];
  const duplicate = addItem(original, 1, "M");
  const otherSize = addItem(duplicate, 1, "S");
  assert.equal(original[0].quantity, 1);
  assert.deepEqual(otherSize, [{ id: 1, size: "M", quantity: 2 }, { id: 1, size: "S", quantity: 1 }]);
  assert.equal(cartTotal(otherSize, catalog), 2397);
});

test("quantities remain bounded even when legacy rows are merged", () => {
  const lines = normalizeCart([{ id: 1, size: "S", quantity: 90 }, { id: 1, size: "S", quantity: 90 }], catalog);
  assert.equal(lines[0].quantity, 99);
  assert.equal(addItem(lines, 1, "S")[0].quantity, 99);
  for (const quantity of [0, -1, 100, NaN, Infinity, 1.5]) assert.deepEqual(setQuantity(lines, 1, "S", quantity), lines);
  assert.equal(setQuantity(lines, 1, "S", 3)[0].quantity, 3);
});

test("cart totals respect multiple products, quantities, and removals", () => {
  const lines = [{ id: 1, size: "M", quantity: 2 }, { id: 2, size: "L", quantity: 3 }];
  assert.equal(cartTotal(lines, catalog), 4295);
  assert.equal(cartTotal(lines.filter((line) => line.id !== 1), catalog), 2697);
  assert.equal(cartTotal([], catalog), 0);
});
