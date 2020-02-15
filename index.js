const isMatch = (obj, attrs) => {
	for (const key in attrs) {
		if (attrs[key] !== obj[key] || !(key in obj)) {
			return false;
		}
	}

	return true;
};

const matcher = attrs => obj => isMatch(obj, attrs);

module.exports = (obj, attrs) => obj.find(matcher(attrs));
