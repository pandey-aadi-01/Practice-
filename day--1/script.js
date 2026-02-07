// 1.Create a function that takes two numbers as arguments and returns their sum.

function addition1(a, b) {
  return a + b;
}

console.log(addition1(3, 5));
//2. Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
  return 2 * (length + width);
}
console.log(findPerimeter(5, 3));

// 3. Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue([4, 2, 3]));

// 4.Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do

function squared(b) {
  return b * b;
}
console.log(squared(5));

// 5.Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
  return minutes * 60;
}

console.log(convert(5));

// 6.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
  return num + 1;
}
console.log(addition(2));
console.log(addition(9));

// 7.Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
  return (n - 2) * 180;
}
console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(5));
// 8.Create a function that takes two numbers as arguments and returns their sum.
function addition(a, b) {
  return a + b;
}
console.log(addition(3, 5));

// 9.Buggy Code (Part 1)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// 1.
function cubes(a) {
  return a * a * a;
}
console.log(cubes(3));
// 2.
function cubes(a) {
  return a ** 3;
}
console.log(cubes(3));

// 3.
function cubes(a) {
  return Math.pow(a, 3);
}
console.log(cubes(3));

//
