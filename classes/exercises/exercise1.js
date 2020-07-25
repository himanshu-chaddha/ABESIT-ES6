/* Implement the functions on the class object */

class Car {
    constructor(speed) {
        // TODO: Implement the constructor
        // - the car should have a "speed" member to keep track of the speed
        // - the car should have a "running" member to check if running is true or false
        // - the car should have a "distance" member to keep track of the distance driven
        this.speed = speed;
        this.running = false;
        this.distance = 0;
    }
    turnOn() {
        // TODO: Implement turnOn to set the "running" member to true
        this.running = true;   
    }
    turnOff() {
        // TODO: Implement turnOn to set the "running" member to false   
        this.running = false;   
    }
    drive(hours) {
        // TODO: Implement this drive method to update "distance" to hours * this.speed
        // ONLY WHEN the car is already running
        this.distance = this.speed * hours;
    }
}


let car = new Car(50);
car;
car.turnOn();
car;
car.turnOff();
car;
car.drive(2);
car;