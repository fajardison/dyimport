# Dynamic Import Library
## _dyimport_
[![Package-Version](https://img.shields.io/badge/Version-V1.0.1-blue)](https://www.npmjs.com/package/dyimport?activeTab=versions)
[![License](https://img.shields.io/badge/License-MIT-green)](https://github.com/fajardison/dyimport?tab=MIT-1-ov-file)
[![ESMJS](https://img.shields.io/badge/javascript-ESM-orange)](https://nodejs.org/api/esm.html)

`dyimport` is a library to dynamically import modules from a specific root directory with additional features such as caching and hashing to improve efficiency. This library is designed to make it easier to manage modules in large projects with complex folder structures.

## Main feature
- Dynamic Import: Imports modules based on filename at runtime.

- Caching: Saves module import results to avoid unnecessary repeated imports and speed up module access.

- Hashing: Using hashing to generate unique tokens that help in the caching process.

- Security: Secure module import results using hashing and authtoken.

- Error Handling: Error handling that provides error information during testing.

- File Search: Searches files in directories and subdirectories recursively.

- Global Folders: Can define multiple global folders at once in package.json using a root variable with array data type.

## Installation
You can install `dyimport` via npm with the following command:

```sh
npm install dyimport
```

# Use
Here's an example of how to use `dyimport` in your application:

## Package.json configuration
To define a `global root` directory and allow `dyimport` to search for specific files in subfolders, you need to add the following configuration in your package.json:

```json
{
  "name": "module-name",
  "version" : "x.x.x",
  "main": "index.js",
  "type": "module",
  "root": [
    "main",
    "path/to/your/modules"
  ]
}
```
## Importing Modules

```js
import load from 'dyimport';

// Import the module dynamically and search for 'module.js' in the root directory specified in package.json.
const modules = await load('module.js'); // importing multiple modules in one class.
const { module1, module2 } await load(module.mjs) // import multiple modules by function.
```

## Using Imported Modules
After importing a module, you can use functions or objects exported from that module:
```js
import load from 'dyimport';

async function runTest() {
  try {
    // Importing file 'path/to/you/modules/testFile.js'
    const { test1, test2 } = await load('module/testFile.js');
    
    // Using imported modules
    console.log(test1()); // Output: this is a test using dyimport.
    console.log(test2()); // Output: test successful.
  } catch (error) {
    console.error('Error:', error);
  }
}

runTest();
```

You can also do it like this:
```js
import load from 'dyimport';
// Importing file 'path/to/you/modules/testFile.js'
const { test1, test2 } = await load('module/testFile.js');

async function runTest() {
  try {
    // Using imported modules
    console.log(test1()); // Output: this is a test using dyimport.
    console.log(test2()); // Output: test successful.
  } catch (error) {
    console.error('Error:', error);
  }
}

runTest();
```
## Licence
This project is licensed under the MIT license. See [LICENSE](https://github.com/fajardison/dyimport?tab=MIT-1-ov-file) for more information.

## Contact
For questions or further information, you can contact us at [Github](https://github.com/fajardison/dyimport).
