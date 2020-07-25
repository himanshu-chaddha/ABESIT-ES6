/* Implement a static method on the car class getSpecs which takes a car argument and prints out the speed */

class Car {
    constructor(speed, value) {
        this.speed = speed;
        this.value = value;
    }

    static getSpecs(car) {
        // TODO: this should return a string with the value and speed of the car object passed in
        return `Speed: ${car.speed} and Value: ${car.value}`;
    }
}

const car = new Car(100, 1000);
car;

let result = Car.getSpecs(car);
result;