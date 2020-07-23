/* All about Object Constructors in JS */

// Defining normal JS objects 

// let person = {
//     firstName: null,
//     lastName: null,
//     email: null,
//     mobile:null,
//     password:null
// }

// person.firstName = 'Himanshu';
// person.lastName = 'Chaddha';
// person.email = 'test@gmail.com';
// person.password = 'abc@123';
// console.log(person);

// person.firstName = 'Abhishek';
// person.lastName = 'Sharma';
// person.email = 'test1@gmail.com';
// person.password = 'xyz@123';
// console.log(person);

/* Normal Objects fails when we need multiple
    instances of the same objects in real world */


/* Now talking about Object constructors */

function Person(firstName, lastName, mobile){
    this.firstName= firstName;
    this.lastName= lastName;
    this.mobile = mobile;
}

let himanshu = new Person('himanshu', 'chaddha', '9999999999');
console.log(himanshu);

let ankit = new Person('Ankit', 'Chaudhary', '101010101010');
console.log(ankit);

himanshu.mobile = '0000000000';
console.log(himanshu);
console.log(ankit);

let x = '5';
console.log(typeof x);

x = Number(x);
console.log(typeof x);