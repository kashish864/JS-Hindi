//Functions means the code which you wrote of 10 lines,20 lines is closed into a package.... where you 
//want you can take the copy of it....
// function sayMyName(){
//     console.log("K");
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }

// sayMyName() //sayMyName is the reference of the function..() It is the execution..When i want to execute 
//this, i have to write this..

// function addTwoNumbers(number1, number2){ //When you make a function,inside that function if you give any
// input that is known as parameters....
    // console.log(number1 + number2);
    
// }
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
//     return(number1 + number2)
//     console.log("Kashish"); //This doesn't execute because by default there is a rule of function,s
//definition when you returned a value then it doesn't work..If i take it one line up then it will 
//execute..
// }
// addTwoNumbers(3, 5) //Inside () this, give arguments..We can also store it in a variable....

// const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

// function loginUserMessage(){ //when u give the username then it will not go in if block..
// and when u write username in console.log also then it will overwrite..
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    // if(!username){
    //     console.log("Please enter a username");
    //     return
    // }
    // return `${username} just logged in`//If i don't want to run this statement write return on above line
// }
// console.log(loginUserMessage("Kashish"))
// console.log(loginUserMessage("Kashish"))

// function calculateCartPrice(val1, val2, ...num1){ //.... This is known as rest operator means you can add as much item
    //as you want....and it can add that items in an array.... 
    // return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) 

// const user = {
//     username: "Kashish",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)

// handleObject({
//     username : "sam" ,
//     price : 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));