/* The destructuring assignment syntax is a JavaScript expression that
    makes it possible to unpack values from arrays, or properties from objects,
    into distinct variables */

// Array matching in ES5
let person = ['Himanshu', 'Chaddha', 25];
// let firstName = person[0];
// let lastName = person[1];
// let age = person[2];

// firstName;
// lastName;
// age;

// Array matching in ES6

// let [firstName, lastName, age] = person;
// firstName;
// lastName;
// age;

// haing selected values of an array
let [firstName, , age] = person;
firstName;
age;

// value swapping using array matching
let nums = [1, 2, 3, 4];
let [a, b, c, d] = nums;
a;
b;
c;
d;

// c = a;
// d = b;

[c,d] = [a,b];
a;
b;
c;
d;

// a function returning array of values

function getConfig(){
    return [
        true,
        100,
        2,
        3,
        4,
        5
    ]
}

// const [isOn, amount] = getConfig();
// isOn;
// amount;

let [isOn, amount, ...temp] = getConfig();
isOn;
amount;
temp;

// a function accepting an array of values to set config

function setConfig([_isOn, _amount]){
    isOn = _isOn;
    amount = _amount;
}

const config = [false, 1000];
setConfig(config);

isOn;
amount;

