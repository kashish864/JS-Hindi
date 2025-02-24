//Now the loops which we will study are array specific loops. Arrays and objects are very powerful and 
//popular in javascript.

// ["", "", ""]
// [{}, {}, {}] //This is very common scenario that in an array you will find many objects and in every 
//iteration you have to take out the value. So, first you have to write loop and then, go inside the object
//from dot or square notation take out the value..

//Syntax of forof loop..
//for (const element of object) {} //Object is used in very broader term here on which object you want to 
//use loop. Don't compare this object as javascript object because here the meaning of object is different.

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);   
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);    
// }

// Maps - These are like arrays but we have to do some iterations here.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India") //This can't come in console because in maps there are only unique values.
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = { // There are different ways to iterate objects. Here myObject is not iterable.
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }