import { expect, test } from "vitest";
import { crescent, sum, factorial, RLE } from "./index.js";
import { Inventory, Item } from "./item.js";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// Exercice 1
test("crescent function sorts array in ascending order", () => {
    expect(crescent()).toEqual([4, 9, 12, 34]);
})

// Exercice 2
test("throw on not a number", () => {
    expect(() => factorial("a")).toThrow();
})

test("throw on a negative", () => {
    expect(() => factorial(-2)).toThrow();
})

test("factorial return 1", () => {
    expect(factorial(1)).toBe(1)
})

test("factorial return correct", () => {
    expect(factorial(5)).toBe(120)
})

// Exercice 3
test("rle is valid", () => {
    expect(RLE("aaaa")).toBe("4a")
})

test("rle is valid 2", () => {
    expect(RLE("eezzz")).toBe("2e3z")
})

// Exercice 4
test("add item", () => {
    const inventory = new Inventory();
    const item= new Item(4, "Banana");
    inventory.addItem(item);
    expect(inventory.slots[0]).toEqual(item)
})

test("get item", () => {
    const inventory = new Inventory();
    const item= new Item(4, "Banana");
    inventory.addItem(item);
    expect(inventory.getItem(0)).toEqual(item)
})

test("remove item by name error", () => {
    const inventory = new Inventory();
    const item= new Item(4, "Banana");
    inventory.addItem(item);
    inventory.removeItemByName("Banana", 2);
    expect(inventory.slots[0]).toBeNull()
})

test("remove item by id error", () => {
    const inventory = new Inventory();
    expect(() => inventory.removeItemById(47)).toThrow()
})