// splice() => splice() => Removes or adds elements in an array at a specified index.

// indexOf() => indexOf() => Returns the first index at which a value appears in the array.

// lastIndexOf() => lastIndexOf() => Returns the last index at which a value appears in the array.

// push() => push() => Adds one or more elements to the end of an array.

// pop() => pop() => Removes the last element from the array and returns that element.

// shift() => shift() => Removes the first element from the array and returns that element.

// unshift() => unshift() => Adds one or more elements to the beginning of the array.

// slice() => slice() => Returns a shallow copy of a portion of the array into a new array.

// filter() => filter() => Creates a new array with all elements that pass the test implemented by the provided function.

// map() => map() => Creates a new array with the results of calling a provided function on every element in the array.

// reduce() => reduce() => Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

//1.  Create and return an array that contains 'apple' and 'banana'

// const fruits = ["apple", "banana"];
// return fruits;

// 2.Remove 'lemur' from the front of the 'animals' array and return 'animals'.
// const animals = ["lemur", "crocodile", "cat"];
// animals.splice(0, 1);
// return animals;
// 3.Remove all items after index '2' from 'countries' using 'Array.splice()', then return 'countries'
// const countries = [
//   "Maldives",
//   "New Zealand",
//   "Austria",
//   "Palau",
//   "Netherlands",
//   "Sweden",
// ];
// countries.splice(2, 6);

// return countries;

//4.Rescue 'gerbil' and 'bunny' from 'animals' using Array.splice(), then return 'animals'
// const animals = ["eagle", "dingo", "bunny", "gerbil", "panther", "lion"];
// animals.splice(2, 2);

// return animals;

// 5.Return the index of the last 'lynx' instance in the 'animals' array using 'Array.lastIndexOf()'

// const animals = ["lynx", "rabbit", "lynx", "wombat"];
// let ans = animals.lastIndexOf("lynx");
//
