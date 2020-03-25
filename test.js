const assert = require('assert');
const findWhere = require('./');
const isUndefined = obj => obj === void 0;

describe('findWhere', () => {
	const list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}, {a: 2, b: 4}];

	it('should look through the list and return the first value that matches all of the key-value pairs provided', () => {
		let result = findWhere(list, {a: 1});

		assert.deepEqual(result, {a: 1, b: 2});
		result = findWhere(list, {b: 4});
		assert.deepEqual(result, {a: 1, b: 4});
	});

	it('undefined when not found', () => {
		const result = findWhere(list, {c: 1});

		assert.ok(isUndefined(result));
	});

	it('undefined when searching empty list', () => {
		const result = findWhere([], {c: 1});

		assert.ok(isUndefined(result));
	});

	it('uses class instance properties', () => {
		function TestClass() {
			this.y = 5;
			this.x = 'foo';
		}
		const expect = {c: 1, x: 'foo', y: 5};

		assert.deepEqual(findWhere([{y: 5, b: 6}, expect], new TestClass()), expect);
	});
});
