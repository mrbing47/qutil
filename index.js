module.exports = {
	assert: require("./src/assert"),
	compare: require("./src/compare"),
	groupBy: require("./src/groupBy"),
	merge: require("./src/merge"),
	addParent: require("./src/addParent"),
	range: require("./src/range"),
	set: require("./src/set"),
	shuffle: require("./src/shuffle"),
	...require("./src/zip"),
};
