/* most essential keyword provided by ES6 to JS i.e const
 declaring a variable using const */

const name = "Himanshu";

// printing that variable
name;

/* we can't change const variable having primitive datatypes as values
changing name with throw an error, check the error by uncommenting the line below */

// name = "Harsh";

/* Initializing is must while declaring the const variables
    if we don't do that it again throws an error, check the error by uncommenting the line below */

// const age;

/* Declaring arrays and JS objects as empty using const
    it will allow them to do so, because adding or removing
    from these will not change the reference of the objects */

const arr = [];
arr[0] = 1;

// printing arr
arr;

const obj = {};
obj.name = "Himanshu";

//printing obj
obj;

