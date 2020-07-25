/* Handling raw strings in ES6 */

let str = `Hi I am Himanshu\n , Are you happy \n with this course?`;

function print(strings, ...values){
    console.log(strings.raw[0]);
}

print`Hi I am Himanshu\n , Are you happy \n with this course?`

