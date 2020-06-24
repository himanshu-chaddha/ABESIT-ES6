// Given the following ES6 script, what will print to the console?

const person = {
    age: 10,
    setAge: function (newAge) {
        this.age = newAge;
    },
    refreshAge: function (userId) {
        // let that = this;
        fetchAgeFromDb(function (newAge) {
            // console.log(that)
            this.setAge(newAge);
        })
    }
}

function fetchAgeFromDb(cb) { cb(20); }
person.refreshAge();
console.log(person.age);
