/* Tagged Template Literals */
let name = 'Himanshu', age = 35;

function tag(strings, ...values) {
    strings;
    values;
    let result = '';
    strings.forEach((str, i) => {
        result += str;
        if (i < values.length) {
            result += `<strong>${values[i]}</strong>`
        }
    });
    return result;
}

// const message = tag`Hi I am ${name}. And ${age} years old.`;
// const second = tag`Are you ${name}?`
// message;
// second;


function error(strings, err) {
    error = `status: ${err.status}, message: ${err.message}`
    return `${strings[0]}{${error}}`
}
const err = { message: 'oh no, an error!', status: 404 }
const message = error`An error has occurred: ${err}`
console.log(message);


let values = [1, 2, 3, 4, 5];

function sumItUp(strings, ...values) {
    // TODO: sum up all interpolated values into a sum variable
    let sum;
    console.log(values[0]);
    sum = values[0].reduce((acc, cur) => { return acc + cur });
    return `the total sum was ${sum}`
}

let res = sumItUp`values ${values}`;
res;