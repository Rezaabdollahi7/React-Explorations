// Define an arrow function named showText that logs a string to the console.
let showText = () => {
    console.log("hi i am showText function");
}
showText() // Output: "hi i am showText function"

// Define an arrow function 'sum' with default parameters that adds two numbers.
let sum = (n1 = 0, n2 = 0) => {
    return n1 + n2;
}
console.log(sum(3, 5)); // Output: 8

// Define an arrow function 'sum2' in a concise form that adds two numbers.
// When only one expression is present, {} and the 'return' keyword can be omitted.
let sum2 = (n1, n2) => n1 + n2;
console.log(sum2(3, 5)); // Output: 8

// Define an arrow function 'double' that takes one argument and returns its double.
// When only one parameter is present, parentheses around the parameter can be omitted.
let double = n => n * 2;
console.log(double(3)); // Output: 6

// Define an arrow function 'makeUser' that returns an object with id and name properties.
// Parentheses around the object literal are necessary to distinguish it from a block.
let makeUser = (id, Name) => ({ id: id, Name: Name });
console.log(makeUser(24, "Reza")); // Output: { id: 24, Name: "Reza" }

// Use an arrow function as a callback in the forEach array method.
// Logs each element of the users array to the console.
let users = [
    { id: 1, Name: "reza", age: 22 },
    { id: 2, Name: "yegi", age: 30 },
    { id: 3, Name: "mehdi", age: 45 },
];

// Provide a more readable and structured format for each user when logging.
users.forEach((user) => {
    console.log(user);
});
// Output for each user:
// { id: 1, Name: "reza", age: 22 }
// { id: 2, Name: "yegi", age: 30 }
// { id: 3, Name: "mehdi", age: 45 }

// Simplified single-line arrow function in forEach for logging each user.
users.forEach(user => console.log(user));
// Outputs are the same as the previous forEach example.

// Use arrow function with array's find method to search for a specific user by Name.
let searchPerson = users.find(user => user.Name.toLowerCase() === "reza");
console.log(searchPerson); // Output: { id: 1, Name: "reza", age: 22 }

// Note: Arrow functions are not suitable in all scenarios. For instance:
// 1. They do not have their own 'this' context, instead they inherit 'this' from the parent scope.
// 2. They are not suitable as methods in object literals if you expect to access the object itself through 'this'.
// 3. They cannot be used as constructors and will throw an error when used with 'new'.
// 4. They do not have access to the 'arguments' object, which is an array-like object in regular functions.
// Arrow functions cannot be bound to an object as a constructor like functions using the 'function' keyword.
// If you try something like 'let instance = new arrowFunction()', it will throw an error.

// Arrow functions cannot be used as generator functions and cannot use 'yield' within its body.

// In summary, arrow functions offer a shorter syntax and lexical scoping - which makes it easier to write and maintain code in functional programming patterns. However, one must be aware of the differences and limitations compared to regular functions to avoid pitfalls.

