# Introduction

This is a repository containing some of the useful util functions.

## Install

To use this library in your code,

```bash
npm i qutyl
```

However, you can install the package from any other package-manager (like yarn, bun, etc.) which forks from NPM Registry.

---

## assert

This is a function accepts a predicate function and returns a function accepting _value_ and _...message_ and throws an **error** if predicate is returns true with _value_ or returns the _value_.

#### Usage

```Javascript
const assertFalsey = assert((value) => !!value);

try{
	assertFalsey("", "Error: A falsey value has been passed.")
}catch(error){
	console.log(error.message)
	// Error: A falsey value has been passed.
}

const assertUndefined = assert((value) => value == undefined);

try{
	assertUndefined(undefined, "Error: An undefined value has been passed.")
}catch(error){
	console.log(error.message)
	// Error: An undefined value has been passed.
}

try{
	let value = assertUndefined(10, "Error: Can not perform binary operation on undefined.")
	console.log(value)
	// 10
}catch(error){
	console.log(error.message)
}
```

## groupBy

This function returns an **Object** which contains the classes (defined by passing each element in _classifier_) containing the elements of the array.

> **NOTE:** This has been implemented as **Object.groupBy()** in most browsers but not supported by some runtimes.

#### Usage

```Javascript
const array = [1,2,3,4,5,6,7,8,9,0]

const classifier = (element) => element % 2 ? "odd" : "even";

console.log(groupBy(array, classifier))
// {odd: [1,3,5,7,9], even: [2,4,6,8,0]}
```

## merge

This function merges the _...args_ arrays passed to it based on the value returned by _evaluator()_.

#### Usage

```Javascript
const foo = [2,3,4,7,9]
const bar = [0,1,8]
const blah = [5,6]

const evaluator = (element) => element;

console.log(merge(evaluator, foo, bar, blah))
// [0,1,2,3,4,5,6,7,8,9]
```

## parent

This function creates a **deep copy** and adds the reference to the parent object in `this` for function to access the object tree.

#### Usage

```Javascript

const { addParent } = require("qutyl")

const obj = {
	a: 10,
	foo: {
		bar(){
			console.log(this.parent.a);
		}
	}
}

const newObj = addParent(obj);

console.log(newObj.foo.bar())
// 10
```

## range

This function returns an array containing the elements from including _start_ to excluding _end_ where each element is incremented by _steps_ (default = 1) which should not be equal to 0.

This function takes either `(end)(start = 1, steps = 1)` or `(start, end)(steps = 1)` or `(start, end, steps)`.

> **NOTE:** This is a mimic to the Python **range()**, however returns an array instead of an iterator.

#### Usage

```Javascript
range(10)
// [0,1,2,3,4,5,6,7,8,9]

range(-10)
// []

range(-10, 0)
// [ -10, -9, -8, -7, -6, -5, -4, -3, -2, -1 ]

range(0, -10)
// []

range(0, -10, -1)
// [ 0, -1, -2, -3, -4, -5, -6, -7, -8, -9 ]

range(5, 10)
// [5, 6, 7, 8, 9]

range(5, 20, 4)
// [ 5, 9, 13, 17 ]

range(0, 10, 0)
// []
```

## set

This contains all the relevant `Set` functions.

#### at

This function returns the element from a `Set()` from the position _index_.

#### difference

Accepts either an `Array` or `Set` and returns a `Set` containing all the element that are unique to the _first_ argument. If the either argument is not of type `Array` or `Set`, it will return **undefined**.

#### intersection

Accepts either an `Array` or `Set` and returns a `Set` containing all the element that are common in both arguments. If the either argument is not of type `Array` or `Set`, it will return **undefined**.

#### isDisjointFrom

Accepts either an `Array` or `Set` and returns a `boolean` where if _both_ arguments have no common elements then **true**, else **false**. If the either argument is not of type `Array` or `Set`, it will return **undefined**.

#### isSubsetOf

Accepts either an `Array` or `Set` and returns a `boolean` where if all the elements in _first_ argument are present in the _second_ argument then **true**, else **false**. If the either argument is not of type `Array` or `Set`, it will return **undefined**.

#### isSupersetOf

Accepts either an `Array` or `Set` and returns a `boolean` where if _first_ argument contains all the elements from the _second_ argument, then **true**, else **false**. If the either argument is not of type `Array` or `Set`, it will return **undefined**.

#### symmetricDifference

Accepts either an `Array` or `Set` and returns a `Set` containing all the element that are unique to _both_ arguments and not the common ones. If the either argument is not of type `Array` or `Set`, it will return **undefined**.

#### union

Accepts either an `Array` or `Set` and returns a `Set` containing all the element from _both_ arguments after removing the duplicates. If the either argument is not of type `Array` or `Set`, it will return **undefined**.

## zip

This function zips each element of the passed _...arrays_ and returns the resultant array with size of the smallest array in _arrays_.

## zipAll

This function zips each element of the passed _...arrays_ and returns the resultant array with size of the largest array in _arrays_ and replaces the missing elements for smaller arrays with **undefined**.
