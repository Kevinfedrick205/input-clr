# User Input Validation Module
### This module is designed to check user input against required input and return a JSON object indicating whether all required data is present or not.

# Installation
To use this module in your project, you can install it via npm:
```
npm install user-input-validation
```
# Usage

```js
const emptyInputs = require('input-clr');

const data = {
  // User input data
};

const requiredData = [
  // Array of required input fields
];

const result = emptyInputs(data, requiredData);
console.log(result);

```

## Function: emptyInputs(data, requiredData)
## Description
This function checks whether all required input fields are present in the user input data.

## Parameters
### data: An object representing user input data.
### requiredData: An array containing the names of the required input fields.
Return Value
A JSON object with the following structure:

### message: A message indicating the result of the validation process.
### status: The status of the validation process ("success" or "error").
### data: An array containing the names of any missing required input fields. If all required input fields are present, this will be null.

```js
const emptyInputs = require('input-clr');

const data = {
  username: 'john_doe',
  email: 'john@example.com'
};

const requiredData = ['username', 'email', 'password'];

const result = emptyInputs(data, requiredData);
console.log(result);

```
### This will output:

```js
{
  "message": "you need to add the following required data",
  "status": "error",
  "data": ["password"]
}
```
# License
This project is licensed under the MIT License - see the LICENSE.md file for details.
