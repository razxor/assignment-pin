# Q1. What is ES6 and what are the new features introduced in ES6?

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

# Q2. What is Event Bubble and Event Delegation in JS?
Event bubbling is a mechanism in the DOM (Document Object Model) where an event starts from the target element and then bubbles up to its parent elements.

For example, if you click a button inside a div, the click event will first be handled by the button and then bubble up to the div, then to its parent, and so on, until it reaches the document root.

## Event Bubbling Example
```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling</title>
</head>
<body>
  <div id="parent">
    <button id="child">Click me</button>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', function() {
      console.log('Parent clicked');
    });

    document.getElementById('child').addEventListener('click', function() {
      console.log('Child clicked');
    });
  </script>
</body>
</html>
```
Child clicked
Parent clicked

When you click the button, the output will be:


## Event delegation
A technique that uses event bubbling to handle events at a higher level in the DOM, allowing a single event handler to manage events for multiple child elements efficiently.

This is particularly useful when dealing with a large number of elements or dynamically added elements.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Delegation</title>
</head>
<body>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    document.getElementById('list').addEventListener('click', function(event) {
      if (event.target && event.target.nodeName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
      }
    });
  </script>
</body>
</html>

```

In this example, clicking on any list item will trigger the single event listener attached to the ul element. The event.target property is used to determine the actual element that was clicked.

List item clicked: Item 1
List item clicked: Item 2
List item clicked: Item 3


# Q3. What is the difference between localstorage , session storage and cookies.

## LocalStorage
- Scope: Data stored in LocalStorage is scoped to the entire domain, meaning it is accessible from any page of the domain.
- Lifetime: Data persists until explicitly deleted by the user or through JavaScript. It is not cleared when the browser or tab is closed.
- Capacity: Typically around 5-10MB, depending on the browser.
- Data Accessibility: Accessible via JavaScript. Not sent with HTTP requests.
Use Case: Suitable for storing data that needs to persist across sessions, such as user preferences, themes, or other state information.

```javascript
// Set item
localStorage.setItem('key', 'value');

// Get item
let value = localStorage.getItem('key');

// Remove item
localStorage.removeItem('key');

// Clear all items
localStorage.clear();

```

## SessionStorage
Scope: Data is scoped to the current browser tab or window. It is not accessible from other tabs or windows.
Lifetime: Data is only available for the duration of the page session. It is cleared when the tab or window is closed.
Capacity: Typically around 5-10MB, depending on the browser.
Data Accessibility: Accessible via JavaScript. Not sent with HTTP requests.
Use Case: Suitable for storing temporary data that should only be available during the current session, such as form data, temporary states, etc.

```javascript
// Set item
sessionStorage.setItem('key', 'value');

// Get item
let value = sessionStorage.getItem('key');

// Remove item
sessionStorage.removeItem('key');

// Clear all items
sessionStorage.clear();

```

## Cookies
Scope: Data is scoped to the entire domain and its subdomains. Specific paths can also be specified.
Lifetime: Can be set to expire at a specific date or to expire when the session ends (when the browser is closed).
Capacity: Limited to about 4KB per cookie.
Data Accessibility: Accessible via JavaScript and automatically sent with every HTTP request to the server (unless the HttpOnly flag is set).
Use Case: Suitable for storing small pieces of data that need to be sent to the server with every request, such as session identifiers, authentication tokens, user preferences that need to be read by the server, etc.

```javascript
// Set cookie
document.cookie = "key=value; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

// Get cookie
function getCookie(name) {
  let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

// Delete cookie
document.cookie = "key=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

```

# Q4. In CSS what is the difference between display inline , display inline block and display block?

## Display: Inline
- Layout Behavior: Elements with display: inline do not start on a new line. They only take up as much width as necessary and allow other elements to sit next to them horizontally.
- Box Model: Only the width and height of inline elements are ignored. You cannot set their width or height explicitly. Padding, margin, and border are respected but only horizontally, meaning they do not affect the height of the element.
- Common Uses: Suitable for elements that are part of a text flow, such as <span>, <a>, and <strong>.

```css
.inline-element {
  display: inline;
}

```

## Display: Block
- Layout Behavior: Elements with display: block start on a new line and take up the full width available, stretching to the left and right as far as they can. They push other elements down.
- Box Model: The width, height, padding, margin, and border of block elements can all be set and will affect the layout.

- Common Uses: Suitable for structural elements like <div>, <p>, <h1>, <section>, and <article>.

```css
.block-element {
  display: blcok;
}
```

## Display: Inline-Block
- Layout Behavior: Elements with display: inline-block do not start on a new line and sit next to other inline or inline-block elements. However, they behave like block elements in that they respect the width and height properties.
- Box Model: Width, height, padding, margin, and border are all respected. Inline-block elements can have their width and height explicitly set.
- Common Uses: Useful for creating layouts where you want elements to sit side by side but still have control over their width and height, such as in a navigation bar, inline form controls, or custom button styles.

```css
.inline-block-element {
  display: inline-block;
}
```

# Q5. What are new features in CSS3?
## 1. Selectors
 - Attribute Selectors: 
 ```css
 a[href^="https"] { /* Selects links that start with https */
  color: green;
}
 ```
 - Pseudo-Classes and Pseudo-Elements: 
 ```css
 a:hover { /* Applies styles when the mouse hovers over a link */
  color: blue;
}

p::first-line { /* Styles the first line of a paragraph */
  font-weight: bold;
}
 ```

## 2. Flexible Box Layout (Flexbox)
- Flexbox: Provides a more efficient way to lay out, align, and distribute space among items in a container.
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 3. Grid Layout
- CSS Grid: Enables complex grid-based layouts.
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```
## 4. Media Queries
- Responsive Design: Adjusts styles based on the device's characteristics.
```css
@media (max-width: 600px) {
  .responsive {
    font-size: 12px;
  }
}
```

