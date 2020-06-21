// Given the following ES6 script, what will print to the console?

{
    this.x = 10;
    this.y = 10;
    this.vx = 20;
    this.vy = 20;

    let obj = {
        x: 0,
        y: 0,
        vx: 5,
        vy: 5,
        update: () => {
            this.x += this.vx;
            this.y += this.vy;
        },
        getPosition: function () {
            return [this.x, this.y];
        }
    }
    obj.update();

    console.log(obj.getPosition());
    console.log([this.x, this.y]);
}


