/* Adding computed properties in ES6 and ES5 too*/

// adding dynamic keys in ES5
let key = 'lastName';
let obj = {
    firstName: 'Abhishek'
};
obj[key] = 'Gupta';
obj;


// adding dynamic keys in ES6
const keyValue = "chaddha"
let obj2 = {
    age: 25,
    [key+ "123"]: keyValue
};

obj2;

// adding keys using function expression in object
function getKey(){
    return 'address';
}

let obj3 = {
    street:'abc',
    [getKey()] : 'value'
}

obj3;