/* Object Matching in ES6 works similarly as array matching */

// USing first in ES5
function getConfig() {
    return {
        isOn: true,
        amount: 120
    }
}

// let config = getConfig();
// config;
// let isOn = config.isOn;
// isOn;
// let amount = config.amount;
// amount;

// using this in ES6
let { isOn, amount } = getConfig();
isOn;
amount;


// setting any object using object matching in ES5;

let config = {};
config;

// function setConfig(isOn, amount){
//     config.isOn = isOn;
//     config.amount = amount;
// }

// setConfig(isOn, amount);
// config;

// same thing in ES6
function setConfig({ isOn, amount }) {
    config = { isOn, amount };
}

setConfig({ isOn, amount });
config;