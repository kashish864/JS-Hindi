//This keyword tells about current context..In arrow function there is no this..
// const user = {
//     username : "Kashish",
//     price : 999,
//     welcomeMessage : function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this.price);        
//     }
// } 

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this); //Result is empty because you are in node environment..In browser the global object is Window..

// function chai(){ //When you run this in a function then you will see many values..
//     let username = "kashish"
//     console.log(this);
//     console.log(this.username);//Result is undefined..can't use this in functions..
// }

// chai()

// const chai = function() {
//     let username = "kashish"
//     console.log(this.username);
// }


// const chai = () => {   //Arrow Function..
//     let username = "kashish"
//     console.log(this.username); // Result is undefined
//     console.log(this); // Result is empty parenthesis
     
// }

// chai()

// () => {} //Syntax of arrow functions..
// const addTwo = (num1, num2) => {  //We can also hold arrow function inside a name..
//     return num1 + num2
// } 

// console.log(addTwo(3, 4)) //Basic arrow function

// const addTwo = (num1, num2) => num1 + num2 //Implicit return..
// const addTwo = (num1, num2) => ( num1 + num2 ) 
// const addTwo = (num1, num2) => {username: "kashish"} //The result is undefined because we cant declare object like this we have to write parenthesis..
// const addTwo = (num1, num2) => ({username: "kashish"})

// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()