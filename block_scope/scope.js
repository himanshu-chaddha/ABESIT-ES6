/* understanding the scope of variables */

console.log(a);

if (true) {
    var a = 1;
}

/* we are trying to access the variable before it's declaration 
we can use const and let variables after their declaration */

// console.log(x);
/* temporal dead zone */
const x1 = "Himanshu";
console.log(x1);

if (true) {
    const x = 1;
    console.log(x);
}

if (true) {
    let x = 1;
    console.log(x);
}

// console.log(x);

/* another way of understanding block scope , it is not necessary
to have a if, gor, while or else block we can define a block just with
the help of {} without any name too */

{
    let x = 1;
    x;
    {
        let x = 2;
        x;
    }
    x;
}

// not only for let it can also achieved using const keword in block level

{
    const x = 1;
    x;
    {
        const x = 2;
        x;
    }
    x;
}

