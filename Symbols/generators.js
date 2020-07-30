/* Declaring Generators and it's properties */

function* myGenerator() {
    const sum = 2 + 3;
    return;
    yield sum;

    // if(sum) return;
    const mul = 2 * 3;
    yield mul;

    const div = 6 / 2;
    yield div;
}

const iter = myGenerator();
iter;
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


/* Passing values to generators */

function* fibonacci() {
    let n1 = 0;
    let n2 = 1;
    while (true) {
        let cur = n1;
        n1 = n2;
        n2 = cur + n1;
        const reset = yield cur;
        if (reset) {
            n1 = 0;
            n2 = 1;
        }
    }
}

let series = fibonacci();
series;
// console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next(true));
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next(true));