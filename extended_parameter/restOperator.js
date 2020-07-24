/* JS Rest Parameter in ES6 */


// before ES6 we have to call [].prototype.slice.call(arguments) to get the args array 
// function print() {
//     arr = Array.prototype.slice.call(arguments);
//     arr;
// }

// print('Himanshu', 123, true, {}, null, undefined, 'ankit', 'abhishek', 'rachit');

// array slicing

// let arr1 = [1, 2, 3, 4, 5];
// arr1;
// let arr2 = arr1.slice(1,4);
// arr2;
// arr1;

/* rest parameter */

// rest parameters with no predefined parameters

// function print(...args){
//     args;
// }

// print('Himanshu', 'E1','9999999999', 'abc@gmail.com' );


// rest parameter with some known values
function print(name, id, ...args){
    name;
    id;
    args;
}

print('Himanshu', 'E1','9999999999', 'abc@gmail.com' );

