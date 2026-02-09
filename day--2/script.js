//1.Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(4));
//2. Write a function that converts hours into seconds.
function howManySeconds(hours) {
  return hours * 3600;
}
// 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function numberPlusOne(num) {
  return num + 1;
}
console.log(numberPlusOne(0));
console.log(numberPlusOne(9));
//4.There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
  return x % y;
}
console.log(remainder(2, 5));