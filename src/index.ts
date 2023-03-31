//practical usecase for customObject
//maiking type intead of comma , we can use semi colon ; just like schema;
// first letter of type should be in a capital letter
type User = {
    name: string;
    rollNo: number;
    hobbies: string[];
    email?: string; // ?.. for optional

}
// In cases where programs have complex data structures, 
//using TypeScript’s basic types may not completely describe
// the data structures you are using. In these cases,
// declaring your own type will help you address the 
//complexity. In this section, you are going create 
//types that can be used to describe any object shape you need to use in your code.


let user: User = {
    name: "hira",
    rollNo: 604,
    hobbies: ["listening"],

}
user.email = "amaze@gmail.com"



const users: User[] = [];
//users.push(4) error not accepting any other value except User
// users.push({}) error bcz its keys and values are not same as first
users.push({
    name: "ekram",
    rollNo: 605,
    hobbies: ["reading"],
    email: "dad@gmail.com" //store later
})

console.log(users, user)


const user2: User = {
    name: 'anjum',
    rollNo: 505,
    hobbies: ["cooking, baking"],
    email: "admin@gmail.com" //giving error
}


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
let add = function (val1: number, val2: number, calc: "add" | "substract") {
    if (calc === "add") {
        return val1 + val2
    } else if (calc === "substract") {
        return val1 - val2
    }
};
//console.log(add(5,10,"divide")) //accepted bcz string calc: string
//for actual value :"add" | "substract" using unon operator
// or const Calc = "add" | "substract" using this as calc: Calc this is literaal operator
console.log(add(5, 10, "add"))

//Tuples FOR FIXED length ARRAY
// let gender : [string,string] = ["Male","Female",""] error legth wrong
let gender: [string, string] = ["Male", "Female"]
gender.push("hello") // this working its wrong
console.log(gender);


let admin: [number, boolean] = [1, true]
//code status
let error: [number, string] = [404, "redirect"]


//class in ts


//The constructor is a special type of method which is called when creating an object. In TypeScript,
// the constructor method is always defined with the name "constructor
class Person {
    Pname: string;
    ProllNo: number;
    constructor(name: string, rollNo: number) {
        this.Pname = name;
        this.ProllNo = rollNo
    }
}
const person1 = new Person("rida", 56)
const person2 = new Person("shama", 66)
console.log(person1, person2)

//Access mofifiers  by default properties are public
class Employee {
    private name: string;
    rollNo: number;
    constructor(n: string, r: number) {
        this.name = n;
        this.rollNo = r
    }
}
const emp1 = new Employee("raza", 1000)
console.log(emp1.rollNo)
// console.log(emp1.name)  // compiling error because name is error
const emp2 = new Employee("yasir", 5000)
console.log(emp1, emp2)

//shorthand for class 

class Children { 
constructor(private n: string, public r: number){
  }
         }
 const child1 = new Children ("MAHA",78)
// child1.n  //error not accesible
child1.r = 73
console.log(child1)


