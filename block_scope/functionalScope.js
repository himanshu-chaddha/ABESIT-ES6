/* now talking about functional scoping, we are using function expressions
to define the functions here */

// 'use strict';

{
    const fn = function () { console.log("Hello!"); }
    fn();
    {
        const fn = function () { console.log("bye!"); }
        fn();
    }
    fn();
}

// now using return statement inside functions instead of just a console.log()

{
    const fn = function () { return 1; }
    console.log(fn());
    {
        const fn = function () { return 2; }
        console.log(fn());

    }
    console.log(fn());
}

/* now using function declarations to define functions instead of functions expressions
it will allow to duplicate the functions inside a block and just over
*/

{
    console.log(fn());
    function fn() { return 1; }
    function fn() { return 3; }
    console.log(fn());
    {
        console.log(fn());
        function fn() { return 2; }
        console.log(fn());
    }
    console.log(fn());
}


/* now if we wanna stop this duplication we have to use
 'use strict' statement above all the declarations it works similarly
 as let and const */

{
    console.log(fn());
    function fn() { return 1; }
    console.log(fn());
    function fn() { return 3; }
    {
        console.log(fn());
        function fn() { return 2; }
        console.log(fn());
    }
    console.log(fn());
}