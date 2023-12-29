let [num1, num2] = [10, 20]

if (num1 + num2 === 12) {
    console.log(`${num1} + ${num2} is 12`);
} else {
    console.log(`${num1} + ${num2} isnt 12`);
}

// ternary condition 

(num1 + num2 === 30) ? console.log(`${num1} + ${num2} is 30`) : console.log(`${num1} + ${num2} isnt 30`);


// Basic Ternary Operator
const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes

// Nested Ternary Operator
const score = 85;
const grade = score >= 90 ? 'A' :
    score >= 80 ? 'B' :
        score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
console.log(grade); // Output: B



// Ternary Operator with Functions
const loggedIn = true;

function logIn() { console.log("Logging in..."); }
function logOut() { console.log("Logging out..."); }

loggedIn ? logIn() : logOut();


// Ternary Operator for Conditional Rendering (Common in JSX or Vue templates)
const isMember = true;
const welcomeMessage = isMember
    ? <div>Welcome back, member!</div>
    : <div>Welcome guest, please sign up.</div>;


// Ternary Operator as Parameters in Function Calls
function getPrice(includeTax) {
    const price = 100;
    const tax = 20;

    return includeTax ? price + tax : price;
}

const finalPrice = getPrice(true);
console.log(finalPrice); // Output: 120


// Ternary Operator for Dynamic Class Assignment
const buttonEnabled = false;
const buttonClass = buttonEnabled
    ? 'button button-active'
    : 'button button-disabled';

console.log(buttonClass); // Output: button button-disabled


// Multiple Ternary Operators for Multiple Conditions
const userRole = 'admin';

const accessLevel = userRole === 'admin' ? 'full' :
    userRole === 'editor' ? 'partial' :
        userRole === 'viewer' ? 'view only' : 'no access';

console.log(accessLevel); // Output: full


// Ternary Operator in Template Literals
const online = true;
const username = 'Alice';

const userStatus = `User ${username} is currently ${online ? 'online' : 'offline'}.`;
console.log(userStatus); // Output: User Alice is currently online.


// Ternary Operator in Array Methods (e.g., Array.prototype.map)
const points = [100, 50, 200, 30];

const messages = points.map(point =>
    point >= 100 ? `You scored ${point} points, great job!` : `Earned ${point} points, keep trying.`
);

console.log(messages);
/* Output:
[
  "You scored 100 points, great job!",
  "Earned 50 points, keep trying.",
  "You scored 200 points, great job!",
  "Earned 30 points, keep trying."
]
*/

