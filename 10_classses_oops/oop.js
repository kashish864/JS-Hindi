const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true, 

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
            
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise() //new keyword allows us, from one object literal we can make multiple instances.
// const date = new Date()

// Function runs only one time. It has only one global execution context.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //constructor = reference of its own.
//console.log(userTwo); 