/**
 * This function checks whether the argument is of type Object or not.
 *
 * @param {*} obj
 * @returns {boolean} true if the argument is object else false.
 */
function isObject(obj) {
	return (
		typeof obj === "object" && !Array.isArray(obj) && obj !== null
	);
}

/**
 * This function performs SameValueZero comparision according to the ECMAScript specifications,
 * ie, same as triple equal(===) but NaN == NaN.
 *
 * @param {*} x A left hand value for comparision
 * @param {*} y A right hand value for comparision
 * @returns {boolean} true if x and y are equal according to SameValueZero comparision else false
 */
function sameValueZero(x, y) {
	return x === y || (Number.isNaN(x) && Number.isNaN(y));
}

/**
 * This function checks whether both arguments are of type Object or not.
 *
 * @param {*} a An argument of type any.
 * @param {*} b An argument of type any.
 * @returns {boolean} true if both arguments are of type Object else false.
 */
function isObjectAndObject(a, b) {
	return isObject(a) && isObject(b);
}

/**
 * This function checks whether both arguments are of type Array or not.
 *
 * @param {*} a An argument of type any.
 * @param {*} b An argument of type any.
 * @returns {boolean} true if both arguments are of type Array else false.
 */
function isArrayAndArray(a, b) {
	return Array.isArray(a) && Array.isArray(b);
}

/**
 * This function checks whether both arguments based on their types.
 * if Type(x) != Type(y), return false
 * if Type(x) == "object"
 * 		Type(x) == "Array" && Type(y) == "Array"
 * 	or 	Type(x) == "Object" && Type(y) == "Object"
 *
 * else return true.
 *
 * @param {*} a An argument of type any.
 * @param {*} b An argument of type any.
 * @returns {boolean} true if both arguments of same type.
 */
function isSameType(a, b) {
	if (typeof a !== typeof b) return false;
	if (typeof a === "object")
		return isObjectAndObject(a, b) || isArrayAndArray(a, b);

	return true;
}

/**
 * This function returns an array containing all the element that are common in both arguments.
 *
 * @param {*} a An Array or Set.
 * @param {*} b An Array or Set.
 * @returns {Array} An array containing all the common elements.
 */
function intersection(a, b) {
	b = new Set(b);

	const result = [];
	a.forEach((element) => {
		b.has(element) && result.push(element);
	});

	return result;
}

/**
 * This function performs a deep SameValueZero check on all the values of an object and array
 * or on a simple primitive variable. If the any value or key for an object or any element of an array
 * is contained in the other, the function will return false.
 *
 * @param {*} obj1 A variable of type any.
 * @param {*} obj2 A variable of type any.
 * @returns {boolean} If both arguments are deeply equal or not.
 */

function compare(obj1, obj2) {
	if (!isSameType(obj1, obj2)) return false;

	if (isObject(obj1)) {
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
