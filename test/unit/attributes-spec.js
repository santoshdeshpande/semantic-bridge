import {getBooleanValue} from 'src/common/attributes';

describe("getBooleanValue", () => {
	it("return true on true", () => {
		let value = true;
		let result = getBooleanValue(value);
		expect(result).toBe(true);
	});

	it("return true on 'true'", () => {
		let value = 'true';
		let result = getBooleanValue(value);
		expect(result).toBe(true);
	});
	it("return false on false", () => {
		let value = false;
		let result = getBooleanValue(value);
		expect(result).toBe(false);
	});

	it("return false on 'false'", () => {
		let value = 'false';
		let result = getBooleanValue(value);
		expect(result).toBe(false);
	});

	it("returns false on non truthy value", () => {
		let value = 'test123';
		let result = getBooleanValue(value);
		expect(result).toBe(false);

	});
});