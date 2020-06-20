/* creating a function that accepts a single argument as an array of numbers
    and with return the maximum value out of it */

const numbers = [1, 5, 9, 3];

function getMax(arr) {
    let max = -Infinity;
    arr.forEach(function (number) {
        max = Math.max(max, number);
    });
    return max;
}

// calling the getMax() by passing the numbers array
const max = getMax(numbers);

// printing out the max value
console.log(max);
