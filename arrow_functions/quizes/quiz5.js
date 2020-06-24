function ListPrefixer (list, prefix) {
    this.list = list;
    console.log(this.list);
    this.prefix = prefix;
    console.log(this.prefix);
    
}
ListPrefixer.prototype.transform = function (cb) {
    this.list = this.list.map(cb);
}
ListPrefixer.prototype.applyPrefix = function() {
    this.transform(function (number) {
        return this.prefix + number;
    })
}
ListPrefixer.prototype.applyPrefixArrow = function() {
    this.transform((number) => {
        return this.prefix + number;
    })
}
const request = new ListPrefixer([1, 2, 3], '*');
request.applyPrefix();
console.log(request.list);
request.applyPrefixArrow();
console.log(request.list);