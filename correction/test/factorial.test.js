import { factorial } from './factorial.js';
import { describe, it, expect, beforeAll, beforeEach } from 'vitest'

describe('Test factorial', () => {
	it("factorial simple", () => {
		expect(factorial(1)).toBe(1);
		expect(factorial(0)).toBe(1);
		expect(factorial(5)).toBe(120);
	})

	it("factorial negative", () => {
		expect(() => { factorial(-1)}).toThrow();
		expect(() => { factorial(-1)}).toThrow(RangeError);
	})

	it("factorial non int", () => {
		expect(() => { factorial("1.5")}).toThrow();
		expect(() => { factorial("1.5")}).toThrow(TypeError);
		expect(() => { factorial(-1.5)}).toThrow(TypeError);
	})

});
