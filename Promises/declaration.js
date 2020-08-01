/* We gonna learn about Callback hell and resolving that using Promises */

// callback hell

// function getName(cb) {
//     setTimeout(() => {
//         cb('Himanshu');
//     }, 1000);
// }

// function getAge(cb) {
//     setTimeout(() => {
//         cb(25);
//     }, 5000);
// }

// function getHobbies(cb) {
//     setTimeout(() => {
//         cb(['Drawing', 'Running'])
//     }, 2000);
// }

// getName((name) => {
//     console.log(name);
//     getAge((age) => {
//         console.log(age);
//         getHobbies((hobbies) => {
//             console.log(hobbies);
//         });
//     });
// });


// Promises resolved this issue of callback hell

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
            resolve(25);
        }, 5000);
    });
}

function getHobbies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Drawing', 'Running']);
        }, 2000);
    });
}

getName().then((name)=>{
    console.log(name);
});

getAge().then((age)=>{
    console.log(age);
});