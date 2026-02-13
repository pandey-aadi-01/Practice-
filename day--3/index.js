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

//Array.reduce() with Math.max(acc, curr) compares each value and returns the largest number in the array.

// Operation	         Initial Value
// Sum	                     0
// Multiply                	1
// Array	                  []
// Object	                  {}
// Math.max(acc, curr)  -Infinity
//
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
// Return the sum of the values in the 'numbers' array using 'Array.reduce()'
// const numbers = [34, 12, 47, 112];
// const total = numbers.reduce((sum , numbers) => sum+numbers,0);
// return total;


// const numbers = [34, 12, 47, 112];
// const total = numbers.reduce((sum, num) => sum + num, 0);
// return total;

// const sum= [34, 12, 47, 112];
// const total =sum.reduce((acc,sum) =>{
//   return acc+sum;
// },0);
// console.log(total);


// const add =[4,5,6,2,43,54,6];
// const total=add.reduce((acc, add)=>{
//   return acc+add;
// },0);
// console.log(total);

// 1.Return the product of all numbers;
// const numbers = [2, 3, 4];
// const total=numbers.reduce((acc,numbers)=>{
//   return acc*numbers;
// },1)
// const total1=numbers.reduce((acc1,numbers)=>{
//   return acc1+numbers;
// },0);
// const total2=numbers.reduce((acc2,numbers)=>{
//   return acc2-numbers;
// },0);
//  console.log(total);
//  console.log(total1);
// console.log(total2);

//2. Find the maximum number
// [a, b, c].reduce((max, curr) => Math.max(max, curr), -Infinity)

// const numbers = [5, 10, 2, 8];
//   const max = numbers.reduce((max, numbers)=>{
//       return Math.max(max ,numbers);
//   },-1);
//   console.log(max);


// const numbers = [5, 10, 2, 8];
// const maxofAllNumbers = numbers.reduce((max ,numbers) => {
//     return Math.max(max,numbers);//Array.reduce() with Math.max(acc, curr) compares each value and returns the largest number in the array.
// },-1);

// console.log(maxofAllNumbers)

// const findmax = [5, 10, 2, 8];
// const maxofAllNumbers = findmax.reduce((max, numbers) => {
//   return Math.max(max, numbers);
// }, -1);
// console.log(maxofAllNumbers);


//3. Find the minimum number

// [a, b, c].reduce((min, curr) => Math.min(min, curr))

// const number = [3,1,9,44,66,41,63,98];
// const minofNumbers = number.reduce((min , number) => {
//     return Math.min(min , number);
// })
//  console.log(minofNumbers);

// 4.Count total characters in array of words
// const words = ["hello", "world", "javascript"];
// const totalCharacters = words.reduce((total, word) => total + word.length, 0);
// console.log(totalCharacters);

// const words = ["hi", "hello", "bye"];
//  const char = words.reduce ((count , words) => {
//     return count+words.length;
//  },0)

//  console.log(char)

5Count how many even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenCount = numbers.reduce((count, number) => {
  if (number % 2 === 0) {
    return count + 1;
  }
  return count;
}, 0);
console.log(evenCount);
// const numbers = [1, 2, 3, 4, 6, 7];

// const Evennum = numbers.reduce((Even, number) => {
//     if (number % 2 === 0) {
//         Even.push(number);  //if number is devide here [push in this[]]
//     }
//     return Even;
// }, []);

// console.log(Evennum);

// console.log(Evennum);
// const numbers = [1, 2, 3, 4, 6, 7];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);