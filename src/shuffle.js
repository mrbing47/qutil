/**
 * 	This function shuffles the elements of the passed array
 * 	and returns a new array containing the shuffled elements.
 *
 * @param {Array} array An array which will be shuffled.
 * @returns {Array} A new array with shuffled elements.
 */
function shuffle(array) {
	if (!Array.isArray(array)) return undefined;

	const result = [...array];
	let idx = result.length;

	while (idx > 0) {
		const randomIdx = Math.floor(Math.random() * idx--);
		[result[idx], result[randomIdx]] = [
			result[randomIdx],
			result[idx],
		];
	}

	return result;
}

module.exports = shuffle;
