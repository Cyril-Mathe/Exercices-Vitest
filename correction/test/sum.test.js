import { sum, isPrime } from './sum.js';
import { describe, it, expect, beforeAll, beforeEach } from 'vitest'

beforeAll(()=>{
	console.log("before all");
})

beforeEach(()=>{
	console.log("before ");
})
describe('Test sum', () => {
	it("sum with int", () => {
		let a = 5;
		let b = 10;

		expect(sum(a,b)).toBe(15);
	})

	it("exception", () => {
		expect(() => {sum(-1,1)}).toThrow();
	})
});

describe("Test isPrime", () =>{
	it("is prime 7", () => {
		expect(isPrime(7)).toBeTruthy()
	})

	it("is prime negative", () => {
		expect(isPrime(-5)).toBeFalsy();
	})

	it("is prime 1", () => {
		expect(isPrime(1)).toBeFalsy();
	})

	it("is prime 2", () => {
		expect(isPrime(2)).toBeTruthy();
	})

	it("is not prime", () => {
		expect(isPrime(14)).toBeFalsy();
	})
})

