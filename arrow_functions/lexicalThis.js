/* Arrow functions were created to simplify function scope and make using the ‘this’ 
keyword much more straightforward */

// try this code

let obj = {
    value: 0,
    increment: function () {
        setTimeout(function () {
            this.value++;
            console.log(this.value);
        }, 1000);
    }
}
obj.increment();

/* it is printing NaN cuz 'this' has moved out of the scope
and get it binds to the window/global object for this situation
this could be a possible solution */

obj = {
    value: 0,
    increment: function () {
        let that = this;
        setTimeout(function () {
            that.value++;
            console.log(that.value);
        }, 1000);
    }

}
obj.increment();

/* By ES6 we have a better option i.e arrow function which will pass the 
reference of owner function to the functions inside methods of objects too */

obj = {
    value: 0,
    increment: function () {
        setTimeout(() => {
            this.value++;
            console.log(this.value);
        }, 1000);
    }
}
obj.increment();
