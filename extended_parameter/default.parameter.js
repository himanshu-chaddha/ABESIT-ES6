/* Let's see ow a function will be if you have to manage default parameter before ES6 */

// function buy(item, amount){
//     item; 
//     amount;
//     // and some logic goes here
// }

// buy("eggs", 1);

// if you won't pass any argument in function call then you have to maintain like this

// function buy(item, amount){
//     item; 
//     amount;
//     if(item === undefined){
//         item = "milk";
//     }

//     if(amount === undefined){
//         amount = 1;
//     }
//     item;
//     amount;
//     // and some logic goes here
// }

// buy();


/* ES6 deault parameters */

// function buy(item = "default", qty = 0, amount = 0) {
//     item;
//     console.log(item);
//     qty;
//     amount;

//     // db -> store totalPrice = qty * amount;
//     //logic
// }

// possible values that could be passed in function call

// buy("eggs", 2, 10);
// buy("eggs",2);
// buy("eggs");
// buy();

/* Now having objects as default parameters */

function buy(item = { product: 'default' }, qty = 0, amount = 0) {
    item;
    qty;
    amount;
}

buy('milk');