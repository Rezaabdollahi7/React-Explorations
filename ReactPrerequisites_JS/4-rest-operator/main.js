/*

In JavaScript, the rest operator is denoted by three dots (...) preceding a parameter in a function definition.
 It is used to represent an indefinite number of arguments as an array. 
 The rest operator can be used in function definitions, destructuring assignments, and even when passing arguments to functions.

 Usage in Function Definition

Let’s look at a few examples:
1. A function with an indefinite number of arguments

function sumAll(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumAll(1, 2));       // Output: 3
console.log(sumAll(1, 2, 3, 4)); // Output: 10


In this example, ...numbers allows the function to accept any number of arguments, which are stored in an array called numbers.
2. Combining rest operator with regular parameters

function logUserInfo(name, age, ...hobbies) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log('Hobbies:', hobbies);
}

logUserInfo('John', 30, 'Reading', 'Gaming', 'Hiking');
// Output:
// Name: John, Age: 30
// Hobbies: ['Reading', 'Gaming', 'Hiking']

Usage in Destructuring
1. Copying part of an array

const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]

2. Copying part of an object

const person = { name: 'John', age: 30, job: 'Developer', country: 'USA' };
const { name, age, ...details } = person;

console.log(name);    // Output: John
console.log(age);     // Output: 30
console.log(details); // Output: { job: 'Developer', country: 'USA' }

Important Points About the Rest Operator:

    The rest operator can only be used at the end of the parameter list.
    In destructuring assignments, only one rest operator may exist.
    The rest operator is commonly used for defining functions with an indefinite number of arguments.
    The rest operator cannot be used to define new variables (except in the context of destructuring assignments).

With the rest operator, working with arguments and data structures in JavaScript becomes much more flexible and powerful.

*/



let sum = (...sumArgs) => {
    console.log(sumArgs);//log all parameters
    return sumArgs.reduce((prev, current) => prev + current)
}

console.log(sum(10,20,20,30));