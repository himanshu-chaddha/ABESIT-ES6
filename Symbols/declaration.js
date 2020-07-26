/* Symbol creation and implementation */

let a = 5;
let b = 5;
console.log(a === b);

// Declaring Symbols
const symbolA = Symbol();
symbolA;

const symbolB = Symbol();
symbolB;

console.log(symbolB === symbolA);

const nameA = Symbol('name');
const nameB = Symbol('name');
console.log(nameA === nameB);

const age = Symbol('age');
nameA;
age;

const num = 1;
console.log(typeof num);

const num2 = Number(11);
num2;
console.log(typeof num2);


const sym1 = Symbol();

console.log(typeof sym1);

const arr = [];
console.log(typeof arr);

/* using symbols in objects */

let name1 = Symbol('name');
let age1 = Symbol('age');
const person = {};
person[name1] = 'Himanshu';
person[age1] = 25;
person['num'] = 1000;
person['address'] = "Ghaziabad"

person;

// we can only access the symbol properties using bracket notation
console.log(person[name1]);
console.log(person.num);

let testArr = [1,2,3]
// for in loop ignores symbol properties
for(temp in person){
    console.log(`key -> ${temp},person-> ${person[temp]}`);
}

for(val in testArr){
    console.log(val, testArr[val]);
}

// method to check properties of an object
console.log(Object.keys(person));

console.log(Object.getOwnPropertyNames(person));

// method to get symbols of an object

console.log(Object.getOwnPropertySymbols(person));

let nameSymbol = Object.getOwnPropertySymbols(person)[0];

console.log(nameSymbol === name1);
person;

person[nameSymbol] = 'Abhishek';
person;
