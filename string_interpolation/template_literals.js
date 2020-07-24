/* All about using template literals in ES6 */

// String Interpolation in ES5

let age = 25;
let name = 'Himanshu Chaddha';

// print string as "Hi my name is Himanshu Chaddha. And I am 25 years old."

// let message = "Hi my name is " + name + ". And I am " + age + " years old.";
// message;

// Now using template literals of ES6
let message = `Hi my name is ${name}. And I am ${age} years old.`;
// message;


/* Multi line strings in ES5 */

// let multi = "Hi my name is " + name + ".\n" +
//     "And I am " + age + "\n" +
//     "years old."
// multi;


/* Multi line strings in ES6 */

let multi = `Hi my name is ${name}. And I am ${age} 
years old .`;
multi;

/* Using spaces in between the string using template literals */
let spaces = `Hi my    name is ${name}.
And I am ${age} years
old .`;
spaces;

/* Problem with indentation in a function in strings using template literals */

function print() {
    let temp = `Hello everyone!,
my name is ${name}.
I am ${age} years old.`
    temp;
}

print();
