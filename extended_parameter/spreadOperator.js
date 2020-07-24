/* Spread Operator in ES6 */

/* function to print all values of paramters
 before ES6 spread operator */

// function print(...args){
//     args;
//     // we have to show all these arguments in a line using <br> tag
//     // eg. <br>Hello all , I am new to Javascript</br>
//     let result = ["<br>"].concat(args).concat(["</br>"]);
//     result = result.join(" ");
//     console.log(result);
// }

// print("Hello", "all", ",", "I", "am", "new", "to", "Javascript.")

/* function to print all values of paramters using ES6 spread operator */
function print(...args) {
    // we have to show all these arguments in a line using <br> tag
    // eg. <br>Hello all , I am new to Javascript</br>
    let result = ['<br>', ...args, '</br>'];
    result;
    result = result.join(" ");
    console.log(result);
}

// print("Hello", "all", ",", "I", "am", "new", "to", "Javascript.");

// Printing each character of a string

function printEachChar(str) {
    let characterObj = {...str};
    let characterArr = [...str];
    characterArr;
    characterObj;
}

printEachChar('hello')

// pushing items to array;

let arr = [];
arr.push(1,2,3);
arr;

arr2 = [4, 5, 6];
arr.push(...arr2);
arr;

// copying array using spread operator

// let arr3 = arr;
// let arr3 = arr.slice();
let arr3 = [...arr];
arr3;

arr3.push("hello");
arr3;
arr;

// finding maximum number out of an array of numbers

let nums = [1, 2, 30, -1, 0, 101];

// let max = Math.max(1,2,3,50);
let max = Math.max(...nums);
max;