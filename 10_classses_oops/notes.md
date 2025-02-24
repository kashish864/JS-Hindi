# javascript and classes -
Yes, JavaScript does have classes, but they were introduced relatively recently in ECMAScript 6 (ES6), which was released in 2015. Before that, JavaScript relied on prototypes for inheritance and object-oriented patterns.

JavaScript's class syntax is a more convenient way to create and work with objects and inheritance, but under the hood, it still uses prototype-based inheritance. The class syntax provides a cleaner and more familiar approach for developers coming from class-based object-oriented languages (like Java or C#), but it's still built on the same prototype mechanism.

## OOP -
It is a programming paradigm. Programming paradigm means how is the structure of writing code, What is the preference of style. It is a process that, In javascript there are objects.

## Object -
- Collection of properties and methods. Properties means variables or constants and methods means our functions.
- toLowerCase 

## Why use OOP -
Because code was messing up and after OOP we can use many good features of javascript like services.

## Parts of OOP -
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 Pillars -

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism 

When we are talking about current context, we will use this keyword.
When you use new keyword, an empty object will create which is known as instance. Then, a contructor function calls because of new keyword. Then, The arguments which you have written will inject in this keyword. Then, you get it in a function. 

The default behaviour of javascript is prototypal behaviour like if there is something which doesn't get it then javascript will go one layer up and find it. This process continues until it will get null value. So, it means that it access parent then grand parent and then grand-grand parent. This keyword works when it will link with this prototypal behaviour. 
Prototype gives us access of new keyword, classes, this keyword, prototypal inheritance or inheritance. 