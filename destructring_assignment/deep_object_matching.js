/* Object matching in nested objects */

function getConfig() {
    return {
        isOn: true,
        amount: 120,
        servers: {
            a: true,
            b: false
        }
    }
}

// let {
//     isOn, amount
// } = getConfig();


// let {
//     isOn: myIsOnBoolean,
//     amount: myAmount,
//     servers
// } = getConfig();
let {
    isOn: myIsOnBoolean,
    amount: myAmount,
    // servers: myServer
    servers = {
        b: serverB
    }
} = getConfig();

myIsOnBoolean;
myAmount;
// myServer;
// console.log(myServer.b);
console.log(servers.b);