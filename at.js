function at(set, index) {
	if (index >= set.size) throw new Error("Index out of range.");

	const itr = set.values();
	for (let i = 0; i < index; i++) itr.next();

	return itr.next().value;
}

module.exports = at;
