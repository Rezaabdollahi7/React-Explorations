// Define an array with diverse values
let user = ["ali", 21, "tehran", true];

// Accessing array elements directly
let userName = user[0];
let userAge = user[1];
let userCity = user[2];
// This direct approach is suitable for small arrays.
console.log(userName, userAge, userCity); // Output: ali 21 tehran

// Using ES6 destructuring to extract values
let [name, age, city] = user;
console.log(name, age, city); // Output: ali 21 tehran

// Using rest operator to gather remaining elements
let [name1, age1, city1, ...otherItems] = user;
console.log(name1, age1, city1, otherItems); // Output: ali 21 tehran [true]

// Skipping a specific element during destructuring
let [name2, age2, , isMale] = user;
console.log(name2, age2, isMale); // Output: ali 21 true

// Default values when destructuring
let [a, b] = [10, 20, 30];
console.log(a, b); // Output: 10 20

let [c, d] = [10];
console.log(c, d); // Output: 10 undefined

let [e, f = 12] = [10];
console.log(e, f); // Output: 10 12

// When only one value is provided, the second variable takes the default value
let [g = 14, h = 12] = [10];
console.log(g, h); // Output: 10 12

// Both variables take the default values as no values are provided
let [i = 14, j = 12] = [];
console.log(i, j); // Output: 14 12

// Function that generates and returns two random numbers
const makeNumber = () => {
    const randomNumber1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const randomNumber2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    return [randomNumber1, randomNumber2];
}

// Using destructuring with the function's returned values
let [k, l] = makeNumber();
console.log(k, l); // Output: Two random numbers


// Assume we have a function that fetches book data
const  getBookData = () => {
    // Simulates an API call that returns an array with book data
    return [
        'Learn JavaScript',         // Title
        'Jane Doe',                 // Author
        25.99,                      // Price
        ['Programming', 'Tech']     // Tags
    ];
}

// Use array destructuring to extract information
const [title, author, price, [primaryTag, secondaryTag]] = getBookData();

console.log(title);       // Output: Learn JavaScript
console.log(author);      // Output: Jane Doe
console.log(price);       // Output: 25.99
console.log(primaryTag);  // Output: Programming
console.log(secondaryTag); // Output: Tech

// Example array of products where each product is an array with [name, count, category]
const products = [
    ["Coffee Maker", 100, "Kitchen Appliance"],
    ["Smart TV", 30, "Electronics"],
    ["Mountain Bike", 50, "Sporting Goods"],
    ["Book: JavaScript Essentials", 150, "Books"]
];

// Iterate over the products array and use destructuring for each product's details.
for (const [name, count, category] of products) {
    console.log(`Product: ${name}, Count: ${count}, Category: ${category}`);
}

// The output will be:
// Product: Coffee Maker, Count: 100, Category: Kitchen Appliance
// Product: Smart TV, Count: 30, Category: Electronics
// Product: Mountain Bike, Count: 50, Category: Sporting Goods
// Product: Book: JavaScript Essentials, Count: 150, Category: Books
