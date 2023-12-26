function isObject(obj) {
	return (
		typeof obj === "object" && !Array.isArray(obj) && obj !== null
	);
}

function deepCopy(obj) {
	const copy = {};
	for (let key in obj)
		if (isObject(obj[key])) {
			copy[key] = deepCopy(obj[key]);
		}

	return { ...obj, ...copy };
}

function bindParent(obj, parent) {
	for (let key in obj)
		if (isObject(obj[key])) bindParent(obj[key], obj);

	obj.parent = parent;
}

function addParent(obj) {
	if (!isObject(obj))
		throw new Error(
			`Invalid parameter type, only allowed Object, received ${typeof obj}`
		);
	const clone = deepCopy(obj);
	return bindParent(clone) ?? clone;
}

module.exports = addParent;
