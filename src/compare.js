const { symmetricDifference } = require("./set");

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
 * This function performs a deep **SameValueZero** check on all the values of an object and
 * array or on a simple primitive variable. For object type, it checks for keys and values, for arrays,
 * it first sorts the values and then compares the values, for other, **SameValueZero** is used.
 *
 * @param {*} obj1 A variable of type any.
 * @param {*} obj2 A variable of type any.
 * @returns {boolean} If both arguments are deeply equal or not.
 */

function compare(obj1, obj2, checks) {
	if (!isSameType(obj1, obj2)) return false;
	if (checks === 1) return true;

	if (isObject(obj1)) {
		const [obj1Keys, obj2Keys] = [
			Object.keys(obj1),
			Object.keys(obj2),
		];

		if (obj1Keys.length !== obj2Keys.length) return false;
		if (checks === 2) return true;

		if (symmetricDifference(obj2Keys, obj1Keys).size !== 0)
			return false;

		return obj1Keys.every((key) => compare(obj1[key], obj2[key]));
	}

	if (Array.isArray(obj1)) {
		if (obj1.length !== obj2.length) return false;
		if (checks === 2) return true;

		if (checks !== 3) {
			obj1 = obj1.toSorted();
			obj2 = obj2.toSorted();
		}

		return aSorted.every((element, ix) =>
			compare(element, bSorted[ix])
		);
	}

	if (typeof obj1 === "string") {
		if (obj1.length !== obj2.length) return false;
		if (checks === 2) return true;
	}

	return sameValueZero(obj1, obj2);
}

compare.TYPE = 1;
compare.LENGTH = 2;
compare.SKIP = Object.create(null);
compare.SKIP.SORT = 3;

module.exports = compare;
