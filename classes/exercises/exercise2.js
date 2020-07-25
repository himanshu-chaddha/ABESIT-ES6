/* Implement the Porche911 class which extends the car class */
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    toString() {
        return `this car is slow; it only moves at ${this.speed} MPH`;
    }
}
class Porche911 extends Car {
    constructor() {
        // TODO: Call the super constructor to pass a FAST speed of 100
        super(100);
    }
    toString() {
        // TODO: overwrite the existing toString method to have it return
        // 'this car is FAST'
        return `This car is FAST`
    }
}

let porche911 = new Porche911();
porche911;
const result = porche911.toString();
result;