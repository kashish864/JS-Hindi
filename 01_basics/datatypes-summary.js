// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol - symbol is used to
// make a value unique specially when you do frontend development of advance java
// javascript.., BigInt - BigInt is used when we have very big value which are 
// not handling....

// const Score = 100
// const ScoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; 
// const id = Symbol('123')
// const anotherid = Symbol('123')

// console.log(id === anotherid)

// const bigInt = 23456765489n

// Reference (Non-primitive) - In this type, In memory the reference of these
// values directly allocated..

// Array, Objects, Functions

// const heros = ["shaktiman" , "naagraj" , "doga"]
// let myObj = {
//     name : "Kashish",
//     age : 21,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof anotherid);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)
//Whenever stack memory uses, the variable which you declare, you get a copy of it
//And Whenever memory or object defines in heap, you get a reference....

// let myYoutubename = "kashishrajputdotcom"
// let anothername = myYoutubename
// anothername = "ritanshirajputdotcom"

// console.log(myYoutubename);
// console.log(anothername);

// let userOne = {
//     email: "user@google.com",
//     upi : "user@ybl"
// }

// let userTwo = userOne
// userTwo.email = "Kashish@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);