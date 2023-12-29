# Introduction

This is a repository containing some of the useful util functions.

## assert

This is a function which accepts _value_ and _...message_ and throws an **error** if _value_ is undefined or returns the _value_.

## groupBy

This function returns an **Object** which contains the classes (defined by passing each element in _classifier_) containing the elements of the array.

> **NOTE:** This has been implemented as **Object.groupBy()** in most browsers but not supported by some runtimes.

## merge

This function merges the _...args_ arrays passed to it based on the value returned by _evaluator()_.

## parent

This function creates a **deep copy** and adds the reference to the parent object in `this` for function to access the object tree.

## range

This function returns an array containing the elements from including _start_ to excluding _end_ where each element is incremented by _steps_ (default = 1) which should not be equal to 0.

This function takes either `(end)(start = 1, steps = 1)` or `(start, end)(steps = 1)` or `(start, end, steps)`.

> **NOTE:** This is a mimic to the Python **range()**, however returns an array instead of an iterator.

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
