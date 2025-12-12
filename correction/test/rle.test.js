import { RLE } from './rle.js';
import { describe, it, expect, beforeAll, beforeEach } from 'vitest'

describe('Test RLE', () => {


	it("Test : WWW ", () => {
		//expect(RLE("WWW")).toEqual("3W");
		expect(RLE("BBBWWBWWW")).toEqual("3B2W1B3W");
	})

});
