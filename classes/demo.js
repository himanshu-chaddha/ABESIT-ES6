/* Classes in ES6 */

// object construcotrs in ES5

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// let person = new Person('Ankit', 20);
// person;


// Person.prototype.getName = function(){
//     return this.name;
// }

// const name = person.getName();
// name;

// Classes in ES6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}


// const person = new Person('Rachit',22);
// person;

// const name = person.getName();
// name;

// Inheritance in ES6

class Employee extends Person {
    constructor(name, age, salary, years) {
        super(name, age)
        this.salary = salary;
        this.years = years;
        this.isActive = true;
    }

    getName() {
        return super.getName();
    }

    quit() {
        console.log("I quit my job");
        this.isActive = false;
    }

    changeName(name){
        return this.name;
    }
}

const employee = new Employee('Himanshu', 25, 1000, 2);
employee;

const name = employee.getName();
name;

// employee.quit();
// employee;

employee.changeName('Shivam');
employee;