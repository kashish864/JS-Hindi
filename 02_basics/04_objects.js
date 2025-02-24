//const tinderUser = new Object() //Singleton Object 

// const tinderUser = {} //Non-singleton object
// tinderUser.id = "123abc"
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         Userfullname: {
//             firstname: "Kashish",
//             lastname: "Rajput"
//         }
//     }
// }

// console.log(regularUser.fullname.Userfullname.firstname);

// const obj1 = {1: "a" , 2: "b"}
// const obj2 = {3: "a" , 4: "b"}
// const obj4 = {5: "a" , 6: "b"}

// const obj3 = {obj1 , obj2} //It will give object inside object....
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} this is optional..Result will be same..but if we use
//{}this then we have guarantee that this is the target and rest of all will work as a source.. 

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [  // when users come from database so it comes as array of objects.... 
//     {
//         id: 1,
//         email: "k@gmail.com"
//     },
//     {
//     },
//     {
//     }
// ]

// users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// Destructuring of Objects.....

// const course = {
//     coursename : "Js in Hindi",
//     price: "999",
//     courseInstructor : "hitesh"
// }

// course.courseInstructor
// const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);


//Concepts of React..Here is by default a props..toh har chiz pr props .company and all people do not do 
// this..so there is the concept of destructuring instead of props.    ........

// const navbar = ({company}) => {

// }

// navbar(company = "Kashish")



//API -->  there are some values which come from backend How do you write that values..In previous time
//values come in XML structure which was very complex..Now values come in Json..Json is not complex..

// {
//     "name": "kashish", //In Json keys are also string....
//     "coursename": "Js in hindi",
//     "price": "free"
// }

// [
//     {}, //Sometimes API's not only in objects , but also in arrays
//     {},
//     {}
// ]