/* Implement the getter and setter for the car class for the values of the car */

class Car {
    constructor(value) {
        this._value = value;
    }

    get value() {
        // TODO: return the value with 2000 added to it due to how awesome your car became after you bought it
        return this._value + 2000;
    }

    set value(value) {
        // TODO: set _value to the value minus 1000 due to sales expenses
        this._value = value - 1000;
    }
}

let car = new Car(100);
car;

console.log(car._value);
console.log(car.value);

car.value = 5000;
car;