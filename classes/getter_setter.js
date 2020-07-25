// getter methods of class in ES6

let Person = class {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        // console.log('we are here!')
        return this._name + '!';
    }

    set age(age) {
        if (typeof age === 'number' && age > 18)
            this._age = age;
        else{
            return 'Invalid input'
        }
    }
}

const person = new Person('Himanshu', 20);
person;
// const namePrivate = person._name;
// namePrivate;
const namePublic = person.name;
namePublic;

person.age = 50;
person;