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
 * This function returns a recursive deep copy of the object values and
 * not for the non-object values (like arrays).
 *
 * @param {object} obj The object for deep copy
 * @returns {object} The deep copy for the object passed in argument.
 */
function deepCopy(obj) {
	const copy = {};
	for (let key in obj)
		if (isObject(obj[key])) {
			copy[key] = deepCopy(obj[key]);
		}

	return { ...obj, ...copy };
}

/**
 * This function binds the parent to the object in
 * parent key, resulting a cyclic reference.
 *
 * @param {object} obj The current object
 * @param {object} parent The reference of the parent object
 */

function bindParent(obj, parent) {
	for (let key in obj)
		if (isObject(obj[key])) bindParent(obj[key], obj);

	obj.parent = parent;
}

/**
 * This function controls the flow of adding parent to the object
 * and it's children.
 *
 * @param {object} obj The object in which parent is to be added.
 * @returns {object} The deep copy of the original object with parent reference.
 */
function addParent(obj) {
	if (!isObject(obj))
		throw new Error(
			`Invalid parameter type, only allowed Object, received ${typeof obj}`
		);

	const clone = deepCopy(obj);
	return bindParent(clone) ?? clone;
}

module.exports = addParent;
