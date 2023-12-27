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

module.exports = at;
