/* Template literal examples */

let items = ['Milk', 'Bread', 'Eggs', 'Juice', 'Fruits'];
items;

let marks = [9, 8, 9, 6, 0, 10];
let hobbies = ['Painting', 'Singing', 'Dancing', 'Gyming'];
// If I wanna print a message like 'I have purchased ...' followed by all items in the array 

// let message = "I have purchased " + items.join(", ") + '.';
// message;

// now doing the same thing in ES6
let message = `I have purchased ${items.join(", ")}.`;
message;

let values = hobbies.map(temp => `${temp}!`);
values;
// let hobbiesStr = `I love ${values.join(", ")}`;
let hobbiesStr = `I love ${hobbies.map(hob => `${hob}!`).join(", ")}`;
hobbiesStr;
