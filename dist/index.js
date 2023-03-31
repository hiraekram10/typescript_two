"use strict";
// In cases where programs have complex data structures, 
//using TypeScript’s basic types may not completely describe
// the data structures you are using. In these cases,
// declaring your own type will help you address the 
//complexity. In this section, you are going create 
//types that can be used to describe any object shape you need to use in your code.
let user = {
    name: "hira",
    rollNo: 604,
    hobbies: ["listening"],
};
user.email = "amaze@gmail.com";
const users = [];
//users.push(4) error not accepting any other value except User
// users.push({}) error bcz its keys and values are not same as first
users.push({
    name: "ekram",
    rollNo: 605,
    hobbies: ["reading"],
    email: "dad@gmail.com" //store later
});
console.log(users, user);
const user2 = {
    name: 'anjum',
    rollNo: 505,
    hobbies: ["cooking, baking"],
    email: "admin@gmail.com" //giving error
};
//next step function
//void: not return anything
//for callback in params                       //cb:Function
// const add = function(val1:number ,val2:number ,cb:(x:string)=>void):number {
//    cb("hello")
//     return val1 + val2
// }
//any type is not recommended in ts
// let func: Function; ><>>>>//accept all type of function
// let func : (x:number,y:number,cb:(x:string)=>void ) =>number ;
// func = add;
//type literals
// const Calc = "add" | "substract |"+" | "-"
let add = function (val1, val2, calc) {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "substract") {
        return val1 - val2;
    }
};
//console.log(add(5,10,"divide")) //accepted bcz string calc: string
//for actual value :"add" | "substract" using unon operator
// or const Calc = "add" | "substract" using this as calc: Calc this is literaal operator
console.log(add(5, 10, "add"));
//Tuples FOR FIXED length ARRAY
// let gender : [string,string] = ["Male","Female",""] error legth wrong
let gender = ["Male", "Female"];
gender.push("hello"); // this working its wrong
console.log(gender);
let admin = [1, true];
//code status
let error = [404, "redirect"];
//class in ts
//The constructor is a special type of method which is called when creating an object. In TypeScript,
// the constructor method is always defined with the name "constructor
class Person {
    constructor(name, rollNo) {
        this.Pname = name;
        this.ProllNo = rollNo;
    }
}
const person1 = new Person("rida", 56);
const person2 = new Person("shama", 66);
console.log(person1, person2);
//practicing
class Employee {
    constructor(name, rollNo) {
        this.name = name;
        this.Pname = name;
        this.ProllNo = rollNo;
    }
}
const emp1 = new Person("raza", 1000);
console.log(emp1.Pname);
const emp2 = new Person("yasir", 5000);
console.log(emp1, emp2);
//# sourceMappingURL=index.js.map