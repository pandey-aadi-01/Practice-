// your code goes here
// var createCounter = function(n) {

//     return function() {
//         return n++;
//     };
// };
// const counter = createCounter(10);
// // console.log(counter)

// var createCounter = function(n) {
//     return function() {
//         return n++;
//     };
// };

// const counter = createCounter(10);

// counter(); // 10
// counter(); // 11
// counter(); // 12
// var createCounter = function(n) {
//     return function() {
//         return n++;
//     };
// };

// const counter = createCounter(10);

// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12
// let val = 4;
// let value =4;
// var expect = function(val) {
//     return function afterretun (value){
//         if(val ===value ){
//             return true;
//         }
//         else{
//             return "Not Equal"
//         }

//     }

// };
// console.log(expect(val)(value))

// var expect = function(val) {
//     return {
//       const toBe: function(value) {
//             if (val === value) {
//                 return true;
//             } else {
//                 throw new Error("Not Equal");
//             }
//         },
//     const notToBe: function(value) {
//             if (val !== value) {
//                 return true;
//             } else {
//                 throw new Error("Equal");
//             }
//         }
//     };
// };
// console.log(expect(val)(value))


// const check = expect (3);

//  console.log(check(7));
//   console.log(check(7));

//   var expect = function(val) {
//     return function afterretun (value){
//         if(val ===value ){
//             return true;
//         }
//         else{
//             return "Not Equal"
//         }

//     }

// };
//  //console.log(afterretun); // This line caused the error

// const check = expect(5);
// console.log(check(5));
// console.log(check(6



// let numberCheck = new Promise(function(resolve, reject) {
//     let num = 10;

//     if (num < 5) {
//         resolve("Number is greater than 5 ;
//     }
//     else{
//         reject("Number is NOT greater than 5 ")
//     }
//     resolve();
//     reject();
// },2000);

// numberCheck
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error) {
//         console.log(error);
//     });


// let numberCheck = new Promise(function(resolve, reject) {
//     let num = 10;

//     if (num < 5) {
//         resolve("Number is greater than 5 );
//     } else {
//         reject("Number is NOT greater than 5 ;
//     }
// });

// numberCheck
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });



// let numberCheck = new Promise(function(resolve, reject) {
//     let num = 10;

//     if (num > 5) {
//         resolve("Number is greater than 5 );
//     } else {
//         reject("Number is NOT greater than 5 );
//     }
// });

// numberCheck
//     .then(
//         (result) => {
//             console.log(result);
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error);
//         }
//     );

//  Q1
// Create a Promise that:
// If age >= 18 → resolve("You can vote")
// Else → reject("You cannot vote")
// Then print the result using .then() and .catch().

// const Ageforvoit = new Promise(function(reslove,reject){
//     let age =0;
//     if(age >= 18){
//         resolve("You can vote")
//     }
//     else{
//         reject("You cannot vote")
//     }
//     resolve();
//     reject();
// });

// Ageforvoit
//           .then(result=>console.log(result))
//            .catch(result=>console.log(result))

// const age = new Promise((success, error)=>{
//     let age = 21;
//     if(age <= 18){
//         success ("You can vote");
//     }
//     else{
//         error("You cannot vote");
//     }
// })

// age
//    .then(resolve=>console.log(resolve))
//   .catch(reject=>console.log(reject));


// Q2
// Create a Promise that:
// After 3 seconds
// Resolve with message: "Data Loaded Successfully"
// (Hint: use setTimeout)

// const Data =new Promise( (resolve, reject)=>{
//     setTimeout((data)=>{
//         resolve("Data Loaded Successfully");
//     },3000);
// });

// Data
// .then(result => console.log(result))
// .catch(error => console.log(error));

// Q3
// Create a Promise that:
// Check if number is even
// If even → resolve("Even number")
// If odd → reject("Odd number")

// const OddEven =new Promise((resolve , reject)=>{
//     let num=31;
//     if(num % 2 == 0) {
//         resolve("Even number")
//     }
//     else{
//         reject("Odd number")
//     }
// })

// OddEven
// .then(result => console.log(result))
// .catch(error => console.log(error))

const ODDEVEN =new Promise((res , rej)=>{
    let num =7;
     num % 2 === 0
      ? res ("Even")
      : rej ("Odd");
});

ODDEVEN
        .then(result => console.log(result))
        .catch(error => console.log(error));


