const assert = require('assert');
const findWhere = require('./');

describe('findWhere', () => {
	it('should look through the list and return the first value that matches all of the key-value pairs provided', () => {
		const users = [
			{ 'user': 'barney',  'age': 36, 'active': true },
			{ 'user': 'fred',    'age': 40, 'active': false },
			{ 'user': 'pebbles', 'age': 1,  'active': true }
		];
		const expected = { 'user': 'pebbles', 'age': 1, 'active': true };
		const test = obj => findWhere(users, obj);

		assert.deepEqual(test({ 'age': 1 }), expected);
		assert.notDeepEqual(test({ 'age': 2 }), expected);
		assert.deepEqual(test({ 'user': 'pebbles' }), expected);
		assert.notDeepEqual(test({ 'user': 'barney' }), expected);
		assert.deepEqual(test({ 'age': 1,  'active': true }), expected);
		assert.notDeepEqual(test({ 'age': 1,  'active': false }), expected);
		assert.deepEqual(test({ 'user': 'pebbles', 'age': 1,  'active': true }), expected);
		assert.notDeepEqual(test({ 'user': 'pebbles', 'age': 1,  'active': false }), expected);
		assert.deepEqual(test({ 'active': false }), { 'user': 'fred', 'age': 40, 'active': false });
		assert.notDeepEqual(test({ 'active': true }), { 'user': 'fred', 'age': 40, 'active': false });
	});

	it('should return undefined if no match is found', () => {
		const users = [
			{ 'user': 'barney',  'age': 36, 'active': true },
			{ 'user': 'fred',    'age': 40, 'active': false },
			{ 'user': 'pebbles', 'age': 1,  'active': true }
		];

		assert(typeof findWhere(users, { 'age': 2 }) === 'undefined');
	});
});
