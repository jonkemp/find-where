const { matcher } = require('@jonkemp/package-utils');

module.exports = (obj, attrs) => obj.find(matcher(attrs));
