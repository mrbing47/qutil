module.exports = {
	assert: require("./src/assert"),
	compare: require("./src/compare"),
	groupBy: require("./src/groupBy"),
	merge: require("./src/merge"),
	addParent: require("./src/parent"),
	range: require("./src/range"),
	set: require("./src/set"),
	...require("./src/zip"),
};
