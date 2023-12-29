function isObject(obj) {
	return (
		typeof obj === "object" && !Array.isArray(obj) && obj !== null
	);
}

function sameValueZero(x, y) {
	return x === y || (Number.isNaN(x) && Number.isNaN(y));
}

function isObjectAndObject(a, b) {
	return isObject(a) && isObject(b);
}

function isArrayAndArray(a, b) {
	return Array.isArray(a) && Array.isArray(b);
}

function isSameType(a, b) {
	return (
		typeof a !== "object" &&
		typeof b !== "object" &&
		typeof a === typeof b
	);
}

function intersection(a, b) {
	b = new Set(b);

	const result = [];
	a.forEach((element) => {
		b.has(element) && result.push(element);
	});

	return result;
}

function compare(obj1, obj2) {
	if (
		!isObjectAndObject(obj1, obj2) &&
		!(isArrayAndArray(obj1, obj2) && obj1.length === obj2.length) &&
		!isSameType(obj1, obj2)
	)
		return false;

	if (isObject(obj1)) {
		if (!isObject(obj2)) return false;

		const obj1Keys = Object.keys(obj1);
		const obj2Keys = Object.keys(obj2);

		if (obj1Keys.length !== obj2Keys.length) return false;

		const abIntersection = intersection(obj2Keys, obj1Keys);

		if (
			abIntersection.length !== obj1Keys.length ||
			abIntersection.length !== obj2Keys.length
		)
			return false;

		return obj1Keys.every((key) => compare(obj1[key], obj2[key]));
	}

	if (Array.isArray(obj1)) {
		if (!Array.isArray(obj2)) return false;

		if (obj1.length !== obj2.length) return false;

		aSorted = obj1.toSorted();
		bSorted = obj2.toSorted();

		return aSorted.every((element, ix) =>
			compare(element, bSorted[ix])
		);
	}

	return sameValueZero(obj1, obj2);
}

module.exports = compare;
