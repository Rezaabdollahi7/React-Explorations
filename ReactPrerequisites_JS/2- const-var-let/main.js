
// var example
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2 because var is function-scoped
}
varTest();

// let example
function letTest() {
    let y = 1;
    if (true) {
        let y = 2;  // different variable
        console.log(y);  // 2
    }
    console.log(y);  // 1 because let is block-scoped
}
letTest();

// const example
function constTest() {
    const z = 1;
    if (true) {
        const z = 2;  // different variable
        console.log(z);  // 2
    }
    console.log(z);  // 1 because const is block-scoped
    // z = 3; // Error: Assignment to constant variable.
}
constTest();


// var redeclaration and reassignment
var a = 1;
console.log(a); // Output: 1
a = 2; // reassignment is allowed with var
console.log(a); // Output: 2
var a = 3; // redeclaration is allowed with var
console.log(a); // Output: 3

// let reassignment
let b = 1;
console.log(b); // Output: 1
b = 2; // reassignment is allowed with let
console.log(b); // Output: 2
// let b = 3; // SyntaxError: Identifier 'b' has already been declared, redeclaration is not allowed

// const reassignment
const c = 1;
console.log(c); // Output: 1
// c = 2; // TypeError: Assignment to constant variable, reassignment is not allowed
// const c = 3; // SyntaxError: Identifier 'c' has already been declared, redeclaration is not allowed

// However, objects and arrays defined with const can have their content modified
const obj = { value: 1 };
console.log(obj.value); // Output: 1
obj.value = 2; // Modification of object property is allowed
console.log(obj.value); // Output: 2

const arr = [1];
console.log(arr[0]); // Output: 1
arr.push(2); // Modification of array elements is allowed
console.log(arr); // Output: [1, 2]
// arr = [3, 4]; // TypeError: Assignment to constant variable, even though it's an object, reassignment of the variable itself is not allowed.
