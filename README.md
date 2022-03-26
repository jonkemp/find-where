# find-where ![Build Status](https://github.com/jonkemp/find-where/actions/workflows/main.yml/badge.svg?branch=master)

> Iterates over a collection of values and returns the first value that matches all of the key-value pairs provided.

If no match is found, or if the collection is empty, `undefined` will be returned. 

Inspired by `_.findWhere`. 😄


## Install

Install with [npm](https://npmjs.org/package/find-where)

```
$ npm install find-where
```

Or [unpkg](https://unpkg.com/find-where/)

```
<script src="https://unpkg.com/find-where@1.0.6/umd/index.js" />
```

Check out the unit tests on [CodePen](https://codepen.io/jonkemp/full/rNVeVKE).

## Usage

```js
const findWhere = require('find-where');

const users = [
	{ 'user': 'barney',  'age': 36, 'active': true },
	{ 'user': 'fred',    'age': 40, 'active': false },
	{ 'user': 'pebbles', 'age': 1,  'active': true }
];

findWhere(users, { 'age': 1 });
//=> { 'user': 'pebbles', 'age': 1, 'active': true }

findWhere(users, { 'user': 'barney' });
//=> { 'user': 'barney', 'age': 36, 'active': true }

findWhere(users, { 'age': 36, 'active': true });
//=> { 'user': 'barney', 'age': 36, 'active': true }
```

---
| **Like us a lot?** Help others know why you like us! **Review this package on [pkgreview.dev](https://pkgreview.dev/npm/find-where)** | ➡   | [![Review us on pkgreview.dev](https://i.ibb.co/McjVMfb/pkgreview-dev.jpg)](https://pkgreview.dev/npm/find-where) |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------- |

## API

### findWhere(collection, properties)

#### collection

Type: `array`  
Default: `none`

The array to iterate over.

#### properties

Type: `object`  
Default: `none`

The key-value pairs to match.

## License

MIT
