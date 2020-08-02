/* All about Promise Chaining implementation */
let myName = undefined;
let myAge = undefined;

function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Himanshu');
        }, 1000);
    });
}

function getAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(25);
            reject('An Error has occurred!');
        }, 300);
    });
}

// getName().then((name) => {
//     console.log(name);
//     // return 'Success!';
//     return 2 + 3;
// }).then((val) => {
//     console.log(val);
// });

// getName()
//     .then((name) => {
//         // console.log(name);
//         myName = name;
//         myName;
//         // return getAge();
//     })
//     .then(getAge)
//     .then((age) => {
//         myName;
//         // console.log(age);
//         myAge = age;
//         myAge;
//     });

// Promise.all() and Promise.race() in Promises
// Promise.all([getAge(),getName()]).then(([age, name])=>{
//     console.log(name);
//     console.log(age);
// });

// Promise.race([getName(), getAge()]).then((value)=>{
//     console.log(value);
// });

/* .catch() in Promises */

// catch on Promise.all() method
// Promise.all([getAge(), getName()]).then(([age, name]) => {
//     console.log(name);
//     console.log(age);
// }).catch((error) => {
//     console.log(error);
// });

//catch on a single Promise
getAge().then((age) => {
    console.log(age);
}).catch(err => {
    console.log(err);
    return 'hello';
}).then((val)=>{
    console.log(val);
});

// handling rejected cases using then() only

// getAge().then(res => {
//     console.log(res);
// }, rej => {
//     console.log(rej);
// });