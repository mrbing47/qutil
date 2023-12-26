function assert(value, ...message) {
	if (value == undefined) throw new Error(message.join(" "));
	return value;
}

module.exports = assert;
