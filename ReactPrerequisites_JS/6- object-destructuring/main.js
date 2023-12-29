let user = {
    name: "reza",
    age: 21,
    family: "abidol"
}
console.log(user.name, user.age, user.family);

let { name, age, family } = user
console.log(name, age, family);

let { name: myName, age: myAge } = user
console.log(myName, myAge);

const profile = {
    username: 'jane_doe'
};

// Destructuring with a default value
const { username, role = 'user' } = profile;
console.log(username); // 'jane_doe'
console.log(role);     // 'user' (default value used)


const userDetails = {
    userID: '1A2B3C',
    userFullName: 'Alice Johnson'
};

// Destructuring with renaming variables
const { userID: id, userFullName: fullName } = userDetails;
console.log(id);       // '1A2B3C'
console.log(fullName); // 'Alice Johnson'


const order = {
    id: '123',
    createdAt: '2021-01-01',
    shipping: {
        street: '123 Main St',
        city: 'Anytown',
        zipCode: '12345'
    }
};

// Nested object destructuring
const {
    shipping: {
        street,
        city,
        zipCode
    }
} = order;

console.log(street);  // '123 Main St'
console.log(city);    // 'Anytown'
console.log(zipCode); // '12345'


function displayUser({ name, age, occupation = 'unemployed' }) {
    console.log(`${name} is ${age} years old and is an ${occupation}.`);
}

const user2 = {
    name: 'David Smith',
    age: 44,
};

displayUser(user2); // 'David Smith is 44 years old and is an unemployed.'


const users = [
    { name: 'Emma', age: 24 },
    { name: 'Jack', age: 30 }
];

// Extracting the first user's details and the rest of the users as another array
const [{ name: firstUserName, age: firstUserAge }, ...otherUsers] = users;

console.log(firstUserName); // 'Emma'
console.log(firstUserAge);  // 24
console.log(otherUsers);    // [ { name: 'Jack', age: 30 } ]


const company = {
    companyName: 'Tech Solutions',
    address: {
        Street: 'Tech Avenue',
        number: '42',
        floor: {
            level: 2,
            unit: '2A',
        },
    },
    employees: [
        { name: 'Brian', position: 'CTO' },
        { name: 'Rachel', position: 'Lead Developer' }
    ]
};

// Complex nested destructuring
const {
    companyName,
    address: {
        Street,
        number,
        floor: { level, unit }
    },
    employees: [{ name: firstEmployeeName }, { name: secondEmployeeName }]
} = company;

console.log(companyName);         // 'Tech Solutions'
console.log(street);              // 'Tech Avenue'
console.log(level);               // 2
console.log(firstEmployeeName);   // 'Brian'
console.log(secondEmployeeName);  // 'Rachel'


const gadget = {
    gadgetID: 'G123',
    name: 'Smartphone',
    manufacturer: 'GadgetCorp',
    price: 599,
    features: ['Touchscreen', 'GPS', 'Bluetooth']
};

// Using the rest syntax to gather the rest of the properties
const { gadgetID, ...otherDetails } = gadget;

console.log(gadgetID);       // 'G123'
console.log(otherDetails);   // { name: 'Smartphone', manufacturer: 'GadgetCorp', price: 599, features: [...] }
