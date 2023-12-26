/**
 * This function zips all the arrays passed to it together
 * with the length of the final array being *size*.
 *
 * @param {int} size The size of the final zipped array.
 * @param {Array[]} arrays Arrays to be zipped.
 * @returns Zipped array of length size.
 */
function logic(size, arrays) {
	const result = Array(size);

	for (let i = 0; i < size; i++)
		result[i] = arrays.map((e) =>
			i < e.length ? e[i] : undefined
		);

	return result;
}

/**
 *	Iterates over the array to check if each element is Array or String.
 *
 * @param {*} arrays An array of objects
 * @returns {boolean} true if each element of array is iterable otherwise false.
 */
function isEachIterable(arrays) {
	return !arrays.some((e) => !isIterable(e));
}

/**
 * Checks whether the passed item is
 * array/string or not.
 *
 * @param {*} item An item of type any.
 * @returns {boolean} true if array/string otherwise false
 */

function isIterable(item) {
	return typeof item === "string" || Array.isArray(item);
}

/**
 * This function takes the array and returns the zipped array with length
 * of the smallest passed arrays.
 *
 * @param  {Array[]} arrays An array of arrays
 * @returns	arrays zipped with indexed
 */
function zip(...arrays) {
	if (!isEachIterable(arrays)) return;

	const minIndex = Math.min(...arrays.map((e) => e.length));
	return logic(minIndex, arrays);
}

/**
 * This function takes the array and returns the zipped array with length
 * of the largest passed arrays and fills the empty elements of smaller arrays
 * with undefined.
 *
 * @param  {Array[]} arrays An array of arrays
 * @returns	arrays zipped with indexed
 */
function zipAll(...arrays) {
	if (!isEachIterable(arrays)) return;

	const maxIndex = Math.max(...arrays.map((e) => e.length));
	return logic(maxIndex, arrays);
}

module.exports = { zip, zipAll };
