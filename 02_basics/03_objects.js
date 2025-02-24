//There are two ways to declare an object....First one is literal and second one is constructors....
//Singleton - when you make a constructor then an object make which is singleton....but when you make a 
//a literal then it doesn't make singleton....
//object.create(through constructor method)

//Object Literals - It is a way to declare objects....In objects we can define our keys and values also..

// const mySym = Symbol("key1")

// const JsUser = {
//     name : "Kashish",
//     "full name" : "Kashish Rajput",//We cannot access it by dot
//     [mySym] : "mykey1",//When we don't write square brackets in my sym, then it will execute like string..
//     age : 21,
//     location : "New Delhi",
//     email : "kashish@google.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "kashish@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "kashish@microsoft.com"
// console.log(JsUser)

//In functions there is no discrimination..
// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// console.log(JsUser.greeting)//function is not executed....the reference of function has come....

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js User, ${this.name}`);//String interpolation..whenever you have to refer same 
    //object so you can write this and when you this. and the object name....when u write the object name 
   //all properties which are inside that object you will find it..
// }
// // console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())