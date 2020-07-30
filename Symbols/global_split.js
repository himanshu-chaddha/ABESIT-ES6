/* Global Symbols Declaration */

let symA = Symbol.for('name');
symA;

let symB = Symbol.for('name');
let symC = Symbol.for('name');
symB;
symC;
console.log(symA === symB);
console.log(symA === symC);
console.log(symB === symC);
console.log(symA === symB === symC);

// using splits in String and Symbol
const msg = 'himanshu and aman and abhishek and ankit and rachit and satyam';
let msgSplit = msg.split('and');
msgSplit;
console.log(msgSplit.length);

// Now lokking into Symbol.split property
const testObj = {
    myMethod(temp){
        temp;
    }
}

testObj.myMethod('Himanshu');

const customSplitter = {
    [Symbol.split](string){
        return string.split(' ').map(value=>{
            return value.toUpperCase();
            // return value.toLowerCase();
            // return value +'!'
        });
    }
};

let myStr = "My name is Himanshu!";

// let myStrSplits = myStr.split(customSplitter);

// myStrSplits;

// let splits = myStr.split(customSplitter);
let splits = myStr.split(' ');
splits;
splits = splits.map(val=>{
    return val.toUpperCase()
});
splits;

// indexOf in Javascript or ES6 too

myStr;
let result = myStr.indexOf('n');
result;

// subString method of strings

myStr;
let subStr = myStr.substring(3,7);
subStr;


// adding empty string to a existing string;
subStr;
console.log(subStr.length);

let newStr = subStr + '';
newStr;
console.log(newStr.length);

const obj = {
    [Symbol('what is up')]() {
        console.log('yo');
    }
 }
 console.log(obj);