/**
 * This function validates if a and b are of type Array or Set,
 * if true, return a and b as Set else return undefined.
 *
 * @param {any} a An instance of Array or Set.
 * @param {any} b An instance of Array or Set.
 * @returns {Array|undefined} Undefined if either a or b is not of type Array or Set,
 * else an Array containg a and b of type Set.
 */

function validateSetArgs(a, b) {
	if (Array.isArray(a)) a = new Set(a);
	if (Array.isArray(b)) b = new Set(b);

	if (!(a instanceof Set && b instanceof Set)) return undefined;

	return [a, b];
}

/**
 * This function returns an element of Set at the passed index.
 *
 * @param {Set} set An instance of Set
 * @param {int} index A positive (0, size - 1) or negative (-size, -1) integer representing index.
 * @returns {any} Element of the passed Set.
 */
function at(set, index) {
	if (index >= set.size) return;

	if (index < 0) {
		if (Math.abs(index) > set.size) return;
		index = set.size + index;
	}

	const itr = set.values();
	for (let i = 0; i < index; i++) itr.next();

	return itr.next().value;
}

/**
 * This function returns a `Set` containing
 * all the element that are unique to the first argument.
 *
 * @param {Array|Set} a An instance of Array or Set.
 * @param {Array|Set} b An instance of Array or Set.
 * @returns {Set|undefined} containg unique elements from a.
 */

function difference(a, b) {
	const argCheck = validateSetArgs(a, b);

	if (argCheck === undefined) return;
	else [a, b] = argCheck;

	const result = new Set();

	a.forEach((element) => {
		b.has(element) || result.add(element);
	});

	return result;
}

/**
 * This function returns a `Set` containing
 * all the element that are common in both arguments
 *
 * @param {Array|Set} a An instance of Array or Set.
 * @param {Array|Set} b An instance of Array or Set.
 * @returns {Set|undefined} containg common elements.
 */

function intersection(a, b) {
	const argCheck = validateSetArgs(a, b);

	if (argCheck === undefined) return;
	else [a, b] = argCheck;

	const result = new Set();
	a.forEach((element) => {
		b.has(element) && result.add(element);
	});

	return result;
}

/**
 * This function returns a boolean where
 * if both arguments have no common elements then true, else false
 *
 * @param {Array|Set} a An instance of Array or Set.
 * @param {Array|Set} b An instance of Array or Set.
 * @returns {boolean|undefined}
 */

function isDisjointFrom(a, b) {
	const argCheck = validateSetArgs(a, b);

	if (argCheck === undefined) return;
	else [a, b] = argCheck;

	return intersection(a, b).size === 0;
}

/**
 * This function returns a boolean where
 * if all the elements in first argument are present in the
 * second argument then true, else false.
 *
 * @param {Array|Set} a An instance of Array or Set.
 * @param {Array|Set} b An instance of Array or Set.
 * @returns {boolean|undefined}
 */

function isSubsetOf(a, b) {
	return isSupersetOf(b, a);
}

/**
 * This function returns a boolean where
 * if first argument contains all the elements from the
 * second argument, then true, else false.
 *
 *
 * @param {Array|Set} a An instance of Array or Set.
 * @param {Array|Set} b An instance of Array or Set.
 * @returns {boolean|undefined}
 */

function isSupersetOf(a, b) {
	const argCheck = validateSetArgs(a, b);

	if (argCheck === undefined) return;
	else [a, b] = argCheck;

	return intersection(a, b).size === b.size;
}

/**
 * This function returns a Set containing all the element
 * that are unique to both arguments and not the common ones
 *
 * @param {Array|Set} a An instance of Array or Set.
 * @param {Array|Set} b An instance of Array or Set.
 * @returns {boolean|undefined}
 */

function symmetricDifference(a, b) {
	return union(difference(a, b), difference(b, a));
}

/**
 * This function returns a Set containing all the
 * element from both arguments after removing the duplicates
 *
 * @param {Array|Set} a An instance of Array or Set.
 * @param {Array|Set} b An instance of Array or Set.
 * @returns {boolean|undefined}
 */

function union(a, b) {
	const argCheck = validateSetArgs(a, b);

	if (argCheck === undefined) return;
	else [a, b] = argCheck;

	return new Set([...a, ...b]);
}

module.exports = {
	intersection,
	difference,
	union,
	at,
	symmetricDifference,
	isDisjointFrom,
	isSupersetOf,
	isSubsetOf,
};
