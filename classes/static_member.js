//class definition
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     static setName(person, name) {
//         person.name = name;
//     }
// }

// class expressions
let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static setName(person, name) {
        person.name = name;
    }
}

// const keys = Object.keys({a: 1, b: 2});
// keys;

const person = new Person('Aman', 20);
person;

// person.name = 'Abhishek';
// person;

Person.setName(person, 'Ankit');
person;