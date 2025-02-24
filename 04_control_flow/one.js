// Difficulty is that always whole code should not execute at a time. Whole code should be execute on conditional
// base. Example if you are login then some other code should run. If you are logout then some other code
// should run. It is known as control flow or logic flow. So, the first control flow is :-

//if statement

// const isuserloggedIn = true
// const temperature = 41

// if (temperature === 40 ){
//     console.log("less than 50");    
// }else{
//     console.log("Temperature is greater than 50");
// }
// console.log("Executed");


// if (false){ //This doesn't execute.
    
// } 
//There are some operators for comparison. Ex - <, >, <=, >=, ==, != Note that single = is for operator assignment.
//and when we write double equal(==) it checks is it equal or not..,=== It checks type also.

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);   
// }
// console.log(`user power: ${power}`);

// Shorthand Notation

// const balance = 1000
// if (balance > 500) console.log("test"); // Implicit scope..

//Nesting

// if (balance < 500){
//     console.log("Less than 500");
// }else if (balance < 750){
//     console.log("Less than 750");
// }else if (balance < 900){
//     console.log("Less than 900");   
// }else{
//     console.log("Less than 1200");
// }

// const userloggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

//AND and or are our logical operators, AND means all the conditions should be true and OR means if any one
//of them is true i will do my work. I will go inside that condition.
// if(userloggedIn && debitCard && 2==3){
//     console.log("Allow to buy course");
// }
// if(loggedInFromGoogle || loggedInFromEmail)
//     console.log("User Logged In");

// Nullish coalescing operator (??) // In this you have to see on null and undefined keyword..
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20


// console.log(val1);

// Terniary Operator
// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");