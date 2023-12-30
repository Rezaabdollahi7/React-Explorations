/*

In JavaScript, the differences between `export` and `export default` pertain to the way modules or components are exported and imported:

### `export`:

- ** Named Export **: With`export`, you can export multiple variables or functions from a module.
- ** Named Import **: When importing, you must use the exact names that were exported in the module.
- Allows you to be very explicit about what you are importing.

### `export default`:

- ** Default Export **: You can only have one default export per module.
- When importing, you can assign any name to the imported value.
- Typically used to export a single function or component in a file.
- Does not require the use of `{}` during import.

### Example:

** Named Export **:

file1.js
export const number = 42;
export function printNumber() {
  console.log(number);
}


file2.js
import { number, printNumber } from './file1.js';

console.log(number); // 42
printNumber(); // 42


** Default Export **:

file1.js
const number = 42;
export default number;
    
file2.js
import anyNameYouWant from './file1.js';

console.log(anyNameYouWant); // 42

Note that you cannot have a named export and a default export for the same value from a file.
However, if you want to use both exporting methods in one module, you need to write them separately.
*/