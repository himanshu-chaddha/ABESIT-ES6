// Given the following ES6 script, what will print to the console?

const person = {
    name: 'bob',
    updateName: function () {
        (() => {
            console.log(this);
            this.name = 'suzy'
        })();
    }
}
person.updateName()
console.log(person.name);
