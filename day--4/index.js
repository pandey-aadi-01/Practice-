// function greet(name) {
//   console.log(name, "Hello");
// }

// greet("AAdi");
// greet("sam");
// greet("raj");

function greet(name, callback) {
  callback();
  console.log(name);
}

function sayHello() {
  process.stdout.write("Hello ");
}

function sayBye() {
  process.stdout.write("Bye ");
}

function sayHowdy() {
  process.stdout.write("Howdy ");
}

const user = "Ram";

greet(user, () => {
  sayHello();
});

greet(user, () => {
  sayBye();
});

greet(user, () => {
  sayHowdy();
});
