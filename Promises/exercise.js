/*Implement a function which returns a promise which
 resolve when the parameter passed in it is true and rejects
 when the parameter passed in it is false.
 */

function getIdentityPromise(shouldResolve) {
    // TODO: Implement me to return a resolved project when shouldResolve is true,
    // and return a rejected promise when shouldResolve is false
    return new Promise((resolve, reject) => {
        if (shouldResolve)
            resolve('Success!');
        else
            reject('An error has occured!')
    });
}

// Sending true to resolve the promise
getIdentityPromise(true).then(res => {
    console.log(res);
}, err => {
    console.log(err);
});

// Sending false to resolve the promise
getIdentityPromise(false).then(res => {
    console.log(res);
}, err => {
    console.log(err);
});