/**
 *	Iterates over the array to check if each element is Array.
 *
 * @param {*} arrays An array of objects
 * @returns {boolean} true if each element of array is of type array otherwise false.
 */
function isEachArray(arrays) {
	return !arrays.some((e) => !Array.isArray(e));
}

/**
 * This function which merges the arrays passed in args array
 * based on the value returned from evaluator.
 *
 * @param {function} evaluator A function which returns the element for comparison.
 * @param  {...any} args An array of arrays which are to be merged.
 * @returns {any[] | undefined} merged array from arguments or undefined if any item of args is not Array.
 */
function merge(evaluator = (e) => e, ...args) {
	if (!isEachArray(args)) return;

	const pointer = Array(args.length).fill(0);

	const resultLength = args.reduce(
		(acc, curr) => acc + curr.length,
		0
	);

	const merged = [];

	while (merged.length < resultLength) {
		const current = {
			value: Infinity,
			data: undefined,
			pointer: -1,
		};

		for (const [ix, arg] of args.entries()) {
			if (pointer[ix] == arg.length) continue;

			const compareValue = evaluator(arg[pointer[ix]]);
			if (compareValue < current.value)
				[current.value, current.data, current.pointer] = [
					compareValue,
					arg[pointer[ix]],
					ix,
				];
		}

		merged.push(current.data);
		pointer[current.pointer]++;
	}

	return merged;
}

module.exports = merge;
