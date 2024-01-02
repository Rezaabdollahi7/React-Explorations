// Example 1: Doubling Each Element
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log('Doubled Numbers:', doubledNumbers); // [2, 4, 6, 8, 10]

// Example 2: Squaring Each Element
const squaredNumbers = numbers.map((num) => num ** 2);
console.log('Squared Numbers:', squaredNumbers); // [1, 4, 9, 16, 25]

// Example 3: Converting Strings to Uppercase
const fruits = ['apple', 'banana', 'orange'];
const capitalizedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log('Capitalized Fruits:', capitalizedFruits); // ['APPLE', 'BANANA', 'ORANGE']

// Example 4: Extracting Object Property Values
const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
const userNames = users.map((user) => user.name);
console.log('User Names:', userNames); // ['Alice', 'Bob', 'Charlie']

// Example 5: Adding Index to Elements
const indexedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log('Indexed Fruits:', indexedFruits); // ['1. apple', '2. banana', '3. orange']

// Example 6: Calculating Element Lengths
const words = ['hello', 'world', 'javascript'];
const wordLengths = words.map((word) => word.length);
console.log('Word Lengths:', wordLengths); // [5, 5, 10]

// Example 7: Creating an Array of Objects
const names = ['Alice', 'Bob', 'Charlie'];
const objects = names.map((name) => ({ name }));
// objects: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]


// Example 8: Formatting Numbers as Currency
const prices = [20, 30, 15];
const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log('Formatted Prices:', formattedPrices); // ['$20.00', '$30.00', '$15.00']

// Example 9: Filtering Odd Numbers
const evenNumbers = numbers.map((num) => (num % 2 === 0 ? num : null)).filter(Boolean);
console.log('Even Numbers:', evenNumbers); // [2, 4]

// Example 10: Transforming Boolean Values
const boolArray = [true, false, true];
const stringArray = boolArray.map((bool) => (bool ? 'Yes' : 'No'));
console.log('String Array:', stringArray); // ['Yes', 'No', 'Yes']

// Example 11: Converting Numbers to Strings
const stringNumbers = numbers.map((num) => num.toString());
console.log('String Numbers:', stringNumbers); // ['1', '2', '3', '4', '5']

// Example 12: Converting Strings to Numbers
const numericStrings = ['10', '20', '30'];
const numericValues = numericStrings.map((str) => parseInt(str, 10));
console.log('Numeric Values:', numericValues); // [10, 20, 30]

// Example 13: Adding Prefix to Each Element
const items = ['apple', 'banana', 'orange'];
const itemsWithPrefix = items.map((item) => `Fruit: ${item}`);
console.log('Items with Prefix:', itemsWithPrefix);
// ['Fruit: apple', 'Fruit: banana', 'Fruit: orange']

// Example 14: Extracting Information from Objects
const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
];
const bookTitles = books.map((book) => book.title);
console.log('Book Titles:', bookTitles);
// ['JavaScript: The Good Parts', 'Eloquent JavaScript']

// Example 15: Formatting Dates
const dates = ['2023-01-01', '2023-02-15', '2023-05-10'];
const formattedDates = dates.map((date) => new Date(date).toLocaleDateString('en-US'));
console.log('Formatted Dates:', formattedDates);
// ['1/1/2023', '2/15/2023', '5/10/2023']

// Example 16: Using the 'this' Value
const numbersWithOffset = numbers.map(function (num) {
    return num + this.offset;
}, { offset: 5 });
console.log('Numbers with Offset:', numbersWithOffset);
// [6, 7, 8, 9, 10]

// Example 17: Turning Positive Numbers into Negatives
const positiveNumbers = [1, 2, 3];
const negativeNumbers = positiveNumbers.map((num) => -num);
console.log('Negative Numbers:', negativeNumbers); // [-1, -2, -3]