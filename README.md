# Introduction

This is a repository containing some of the useful util functions.

## assert

This is a function which accepts _value_ and _...message_ and throws an **error** if _value_ is undefined or returns the _value_.

## at

This function returns the element from a **Set()** from the position _index_.

## groupBy

This function returns an **Object** which contains the classes (defined by passing each element in _classifier_) containing the elements of the array.

> NOTE: This has been implemented as **Object.groupBy()** in most browsers but not supported by some runtimes.

## merge

This function merges the _...args_ arrays passed to it based on the value returned by _evaluator()_.

## parent

This function creates a **deep copy** and adds the reference to the parent object in `this` for function to access the object tree.

## range

This function returns an array containing the elements from including _start_ to excluding _end_ where each element is incremented by _steps_ (default = 1) which should not be equal to 0.

This function takes either (_end_)(_start_ = 1, _step_ = 1) or (_start_, _end_)(_step_ = 1) or (_start_,_end_,_steps_).

> NOTE: This is a mimic to the Python **range()**, however returns an array instead of an iterator.

## zip

This function zips each element of the passed _...arrays_ and returns the resultant array with size of the smallest array in _arrays_.

## zipAll

This function zips each element of the passed _...arrays_ and returns the resultant array with size of the largest array in _arrays_ and replaces the missing elements for smaller arrays with **undefined**.
