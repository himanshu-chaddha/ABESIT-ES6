/*Implement a generator function called randomHexGenerator which
returns a random value from a passed in array of hex
values every time it is called.*/

// first approach -> sending Hexa codes array as an argument
// to the generator function

// function* randomHexGenerator(arr) {
//     let hexArray = arr, randomIndex;
//     console.log(hexArray);
//     while (true) {
//         randomIndex = Math.floor(Math.random() * hexArray.length);
//         randomIndex;
//         const ret = yield hexArray[randomIndex];
//         if(ret){
//             return;
//         }
//     }
// }

// const iter = randomHexGenerator(['fff', '1a4', 'abe', '004']);
// iter;
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next(true));

// approach 2 -> will be passing the hex code array in each
// call of next() of the Iterartor object of Generator 

function* randomHexGenerator(arr) {
    let hexArray = arr, randomIndex;
    while (true) {
        hexArray;
        randomIndex = Math.floor(Math.random() * hexArray.length);
        randomIndex;
        hexArray = yield hexArray[randomIndex];
    }
}

const iter = randomHexGenerator(['fff', '1a4', 'abe', '004', '555','009']);
iter;
console.log(iter.next());
console.log(iter.next(['999','111', '222']));