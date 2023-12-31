/**
 * This function creates an array from start to end
 * with each element is incremented based on steps.
 *
 * @param {int} start A starting point of the array.
 * @param {int|undefined} end An ending point of the array.
 * @param {int} steps The steps (> 0) for each element.
 * @returns
 */
function range(start, end, steps = 1) {
	if (end == undefined) {
		end = start;
		start = 0;
	}

	if (steps === 0) return [];

	return Array.from(
		{ length: Math.ceil((end - start) / steps) },
		(_, ix) => ix * steps + start
	);
}

module.exports = range;
