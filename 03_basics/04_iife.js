// Immediately Invoked Function Expressions (IIFE) - As you write the function as it will execute..
// We use immediately invoked function expression(IIFE) Jab humare global scope se chize pollute hoti hai..

// (function chai(){
//     //named IIFE
//     console.log(`DB CONNECTED`);
// })();

// Immediately invoked function invoked toh ho gya h par usko pata nahi hai ki context kaha rokna hai..In
//this situation you have to end that line..To end that line you have to enter semi column..Now, the 
//second code will run..
// console log also expects variable..

// ((name) => {
//     //Unnamed IIFE
//     console.log(`DB CONNECTED TWO ${name}`);
    // })('Kashish')