/* Here, we gonna learn about Synchronous and Asynchronous programming */
// function func2(){
//     setTimeout(()=>{
//         console.log("starting function 2");
//         //logic
//     },3000);
// }

// function func1(){
//     console.log('Starting function 1');
//     func2();
//     //logic
//     console.log('function 1 has ended');
// }
// func1();

// resolving asynchrounous code using generators

// function getName() {
//     setTimeout(() => {
//         console.log('Himanshu');
//         return 'Himanshu'
//     }, 2000);
// }

// function getAge() {
//     setTimeout(() => {
//         console.log(25);
//         return 25;
//     }, 5000);
// }

// let name = getName();
// let age = getAge();
// name;
// age;

/* Getting values using callbacks */
// function getName(cb) {
//     setTimeout(() => {
//         cb('Himanshu');
//     }, 2000);
//         // cb('Himanshu');

// }

// function getAge(cb) {
//     setTimeout(() => {
//         cb(25);
//     }, 3000);
//         // cb(25);
// }

// let _name = null;
// let _age = null;

// getName((name)=>{
//     _name = name;
// });

// getAge((age)=>{
//     _age = age;
// });

// _name;
// _age;

// now actually using generator for asynchronous programming

// creating self executing generator
let myName = null;
let myAge = null;
function getName() {
    setTimeout(() => {
        let val = iter.next('Himanshu');
        val;
    }, 1000);
}

function getAge() {
    setTimeout(() => {
        iter.next(25);
    }, 0);
}

function setName(name){
    name;
}

let iter = (function* () {
    const name = yield getName();
    console.log(name);
    yield setName(name);
    const age = yield getAge();
    console.log(age);
})();

iter;
iter.next();