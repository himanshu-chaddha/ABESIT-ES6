/* Creating our own Iterable Object */

const codes = {
    [Symbol.iterator]() {
        let cur = 1;
        return{
            next(){
                return  {
                    value: Math.random(),
                    done: cur++ > 2 
                }
            }
        }
    }
}

const iter = codes[Symbol.iterator]();
iter;
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// for(code of codes){
//     console.log(code);
// }