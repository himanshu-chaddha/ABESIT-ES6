/* You must remember how we write a function or callback function in JS.
*/

const arr = [1, 2, 3, 4];

// here we are twicing each value of an array and returning back as an array
//-------------------------- STATEMENT BODIES START -------------------------
let byTwo = arr.map(function (num) {
    return num * 2;
})
arr;
byTwo;

/* using arrow function for the first time */

byTwo = arr.map((num) => {
    return num * 2;
});

byTwo;


/* if your function is having a single argument, then use arrow function like this */

byTwo = arr.map(num => {
    return num * 2;
});

byTwo;

/* But for multiple arguments you must have to pass them in parenthesis */

byTwo = arr.map((num, index) => {
    return num * 2;
});

byTwo;

//-------------------------- STATEMENT BODIES END -------------------------

/* We can also have expression bodies in arrow functions. */
//-------------------------- EXPRESSION BODIES START -----------------------

byTwo = arr.map(num => num * 2);
byTwo;

// what  if you wanna return an object here, then we have to use grouping operation i.e ()

byTwo = arr.map(num => ({ number: num * 2 }));
byTwo;

// arrow function without arguments

byTwo = arr.map(() => 2);
byTwo;

//-------------------------- EXPRESSION BODIES END -------------------------



// this keyword demo

let person = {
    firstName: 'testName',
    lastName: 'Sirname',
    getFullName: function (city, years) {
        return this.firstName + " " + this.lastName + " lives in " + city + ' and is ' + years +' years old';
    }
}

console.log(person.getFullName('ghaziabad', 25));

let himanshu = {
    firstName: 'Himanshu',
    lastName: 'Chaddha'
}

console.log(person.getFullName.call(himanshu,'delhi', 30));
