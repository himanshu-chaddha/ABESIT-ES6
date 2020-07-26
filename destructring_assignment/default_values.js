/* Default values in array matching and object matching */

const arr = [1];
arr;

let [amount, b = 10] = arr;
amount;
b;

const obj = {
    isOn: true,
    amt: 1
};

let { isOn, amt = 1000 } = obj;

isOn;
amt;