/**
 * This function groups the elements of an array based on the classifier function
 * and returns the object.
 *
 * @param {any[]} array An array of elements
 * @param {function} classifier A function which determines the group of each element inside array.
 * @returns {object} An object containing the group keys and their value as an array an containing
 * all the elements which falls under that particular group.
 */
function groupBy(array, classifier) {
	if (!Array.isArray(array))
		throw new Error(
			"Invalid argument, array must be of type Array."
		);

	if (typeof classifier !== "function")
		throw new Error(
			"Invalid argument, classifier must be of type Function."
		);

	const result = {};
	for (let ele of array) {
		const key = classifier(ele);
		if (!Object.hasOwn(result, key)) result[key] = [];
		result[key].push(ele);
	}
	return result;
}

module.exports = groupBy;
