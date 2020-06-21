// Given the following ES6 script, what will print to the console?

function ListPrefixer(list, prefix) {
    this.list = list;
    // console.log("ListPrefixer -> this.list", this.list)
    this.prefix = prefix;
    // console.log("ListPrefixer -> this.prefix", this.prefix)
}

ListPrefixer.prototype.transform = function (cb) {
    this.list = this.list.map(cb);
    // console.log("this.list", this.list)
}
ListPrefixer.prototype.applyPrefix = function () {
    this.transform(function (number) {
        // console.log("number", number)
        return this.prefix + number;
    })
}
ListPrefixer.prototype.applyPrefixArrow = function () {
    this.transform((number) => {
        // console.log("number", number)
        return this.prefix + number;
    })
}

const request = new ListPrefixer([1, 2, 3], '*');
request.applyPrefix();
request;
console.log(request.list);

// request.applyPrefixArrow();
// console.log(request.list);



function abc() {
    this.a = [1, 2, 3]
    this.b = '*';

    this.transform = function(cb){
        console.log(this.a);
        this.a = this.a.map(cb);
    }

    this.applyPrefix = function () {
        this.transform(function(number) {
            console.log(number);
            console.log(this.b);
            return this.b + number;
        });
    }
}

let x = new abc();
x.applyPrefix();
console.log(x.a);