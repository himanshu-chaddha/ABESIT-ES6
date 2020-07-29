/* Global Symbols Declaration */

let symA = Symbol.for('name');
symA;

let symB = Symbol.for('name');
let symC = Symbol.for('name');
symB;
symC;
console.log(symA === symB);
console.log(symA === symC);
console.log(symB === symC);
console.log(symA === symB === symC);

// using splits in String and Symbol
const msg = 'himanshu and aman and abhishek and ankit and rachit and satyam';
let msgSplit = msg.split('and', 2);
msgSplit;
console.log(msgSplit.length);