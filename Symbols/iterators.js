/* Iterators in ES6 */
const message = "Hello";
message;

let iter = message[Symbol.iterator]();
iter;

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// how next() is working ?
// let cur = iter.next();
// cur;
// while(!cur.done){
//     console.log(cur.value);
//     cur = iter.next();
// }

// we have a for of loop for iterable objects
for(char of message){
    console.log(char);
}

