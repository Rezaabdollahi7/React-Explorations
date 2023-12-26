// Variable declaration using var and printing its value
var num1 = 12;
console.log(num1); // Output: 12

// Hoisting in variable declarations with var - the declaration is hoisted
num2 = 10;
console.log(num2); // Output: 10
var num2;

// Variable declaration with var which is defined before assignment - assignment is not hoisted
var num3;
console.log(num3); // Output: undefined
num3 = 40;


// Variables declared with let and const are not hoisted and must be defined before being used
// Uncommenting the following line will throw an error: ReferenceError: can't access 'notHoistedVar' before initialization
// console.log(notHoistedVar);
let notHoistedVar = 55;
console.log(notHoistedVar); // Output: 55

// The same behavior applies to const
// Uncommenting the following line will throw an error: ReferenceError: can't access 'notHoistedConst' before initialization
// console.log(notHoistedConst);
const notHoistedConst = 'constant';
console.log(notHoistedConst); // Output: constant




// Function declarations are hoisted, allowing them to be called before they're defined
sayHi(); // Output: hi
function sayHi() {
    console.log("hi");
}
sayHi(); // Output: hi

// Function expressions are not hoisted, resulting in an error if called before the function expression is assigned
// Uncommenting the following line will throw an error: TypeError: showMessage is not a function
// showMessage();
var showMessage = function () {
    console.log("its show message func");
};
showMessage(); // Output: its show message func

// ! Please note that ‘let’ and ‘const’ declarations in ES6 (ECMAScript 2015) have introduced block-scoping, which changes hoisting behavior compared to ‘var’ by making it more restrictive.
