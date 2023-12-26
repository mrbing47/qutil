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
