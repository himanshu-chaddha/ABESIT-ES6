/* All about async and await keyword */

const myPromise = new Promise((resolve, reject) => {
    resolve('Himanshu!!');
});

function getName() {
    return Promise.resolve('Himanshu');
}
function getAge() {
    return Promise.resolve(25);
    // return Promise.reject('An error has occured!');
}
async function main() {
    try {
        // const name = await myPromise;
        // let name = await myPromise;
        // name;
        // name = await getName();
        // name;
        // let age = await getAge();
        // age;
        let [name, age] = await Promise.all([getName(), getAge()]);
        name;
        age;
    } catch (err) {
        console.log(err);
    }
}

main();
