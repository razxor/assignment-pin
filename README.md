# Q. What is ES6 and what are the new features introduced in ES6?

ES6 is the 6th edition of the ECMAScript standard and is a significant update to the JavaScript language. It also known as ECMAScript 2015, It introduced several new features and syntax improvements that make writing JavaScript code more efficient and powerful. Here are some of the key features introduced in ES6:

## 1. Let and Const
- `let` and `const` are block-scoped variables i.e: could not use outside the function.
- `let` is similar to `var` but with block scope.
- `const` is for constants and cannot be reassigned after its initial assignment.

```javascript
let x = 10;
const y = 20;
```
## 2. Arrow Functions
- Shorter syntax for writing functions.
- Do not have their own this context.

```javascript
const add = (a, b) => a + b;

```
## 3. Template Literals
- Enhanced string literals with embedded expressions.
- Multi-line strings and string interpolation.

```javascript
let name = 'John';
let message = `Hello, ${name}!`;
```
## 4. Destructuring Assignment
- Allows unpacking values from arrays or properties from objects into distinct variables.

```javascript
let [a, b] = [1, 2];
let {name, age} = {name: 'John', age: 30};
```

## 5. Rest and Spread Operators
- Rest operator (...) collects multiple elements into an array.
- Spread operator (...) expands an array into individual elements.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

```

## 6. Classes
- Syntactical sugar over JavaScript's prototype-based inheritance.
- Easier and more intuitive class definitions.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Hello, ${this.name}!`;
  }
}
```

## 7. Modules
- Import and export functionalities to modularize code.
```javascript
// In file person.js
export class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Hello, ${this.name}!`;
  }
}

// In another file
import { Person } from './person';
```

## 8. Enhanced Object Literals
- Shorthand for defining properties and methods.
```javascript
let name = 'John';
let person = {
  name,
  greet() {
    return `Hello, ${this.name}!`;
  }
};
```

## 9. Map and Set
- New collections for storing unique values and key-value pairs.
```javascript
let set = new Set([1, 2, 3]);
let map = new Map([['name', 'John'], ['age', 30]]);
```


