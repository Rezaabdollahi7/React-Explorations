// Import a specific function from the func.js module by its declared name
import { yourFunction } from './func.js';

// Invoke the imported function from func.js
yourFunction();

// Import the default export from the varExport.js module
// Here, 'myMessage' is a custom name chosen for the imported default
import myMessage from './varExport.js';

// Output the imported message to the console
console.log(myMessage); // Expected Output: Hello from vars.js


// Import all exports from the variablesExport.js module as 'utils'
import * as utils from './variablesExport.js';

// Access exported variables through the 'utils' object
console.log(utils.name, utils.age);


// Import a specific export from the asExample.js module and rename it to 'myCode'
import { uniCode as myCode } from './asExample.js';

// Output the renamed imported value to the console
console.log(myCode);
