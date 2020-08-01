/* Declaring Generators and it's properties */

function* myGenerator() {
    const sum = 2 + 3;
    yield sum;
    return;

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

function* fibonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let cur = n1;
    while (true) {
        cur = n1;
        n1 = n2;
        n2 = cur + n1;
        const reset = yield cur;
        //using this value we can do any task based on a condition or anything else
        // if (reset) {
        //     n1 = 0;
        //     n2 = 1;
        // }
        if (reset) {
            return;
        }
    }
}

// let series = fibonacci();
let series = fibonacci(5);
series;
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next(true));
// console.log(series.next());


// we can also have generators as a property of object

const obj = {
    * myGenerator() {
        yield 1;
    }
}

const iter1 = obj.myGenerator();
iter1;

console.log(iter1.next());
console.log(iter1.next());

// calling another function in yield expression
function getName() {
    console.log('Himanshu');
    return 'Himanshu';
}

const obj2 = {
    * myGenerator() {
        yield getName()
    }
}

const iter2 = obj2.myGenerator();
iter2;
console.log(iter2.next());
console.log(iter2.next());

// knowing about yield* in generators
function* func1() {
    yield 20;
    yield 'hello';
}

function* func2() {
    yield* func1();
    yield 100;
}

const iter3 = func2();
iter3;
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
console.log([...iter3]);

// knowing about yield* in iterable objects

function* func3() {
    // yield* [1, 2, 3];
    yield * 'hello'
    yield 100;
}

const iter4 = func3();
iter4;
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());

// Shorthand of next() call on a generator

const result = [...iter4];
result;