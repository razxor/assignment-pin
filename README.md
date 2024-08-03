# Q. What is ES6 and what are the new features introduced in ES6?

ES6 is the 6th edition of the ECMAScript standard and is a significant update to the JavaScript language. It also known as ECMAScript 2015, It introduced several new features and syntax improvements that make writing JavaScript code more efficient and powerful. Here are some of the key features introduced in ES6:

## 1. Let and Const
- `let` and `const` are block-scoped variables i.e: could not use outside the function.
- `let` is similar to `var` but with block scope.
- `const` is for constants and cannot be reassigned after its initial assignment.

```javascript
let x = 10;
const y = 20;

## 2. Arrow Functions
- Shorter syntax for writing functions.
- Do not have their own this context.

```javascript
const add = (a, b) => a + b;


