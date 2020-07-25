/* Method properties in ES6 */


// ES5 methods
let obj = {
    age: 24,
    incAge: function () {
        this.age++;
    }
}
obj;
obj.incAge();
obj;

// ES6 methods
let obj1 = {
    age: 24,
    incAge() {
        this.age++;
    }
}
obj1;
obj1.incAge();
obj1;

const piece = {
    x: 0,
    y: 0,
    move (x, y) {
    this.x = x;
    this.y = y;
    }
}
piece.move(10, 10);
console.log(piece);