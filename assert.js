/**
 * This function takes a predicate function which returns a boolean
 * and checks in the returned function if the predicate returns true then
 * throw error or else return the value.
 *
 * @param {function(any):boolean} predicate A predicate to determine if the value is truthy or falsy.
 * @returns {function(any, string[]):any} A function called which to evaluate the value
 * and throw error if predicate returns true.
 */
function assert(predicate) {
	return function (value, ...message) {
		if (predicate(value)) throw new Error(message.join(" "));
		return value;
	};
}

module.exports = assert;
