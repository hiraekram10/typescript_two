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
    email:"dad@gmail.com" //store later
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
let add = function (val1:number,val2:number,calc:"add" | "substract" ){
   if (calc === "add" ){
    return val1 + val2
   }else if (calc === "substract"){
    return val1 - val2
   }
} ;
//console.log(add(5,10,"divide")) //accepted bcz string calc: string
//for actual value :"add" | "substract" using unon operator
// or const Calc = "add" | "substract" using this as calc: Calc this is literaal operator
console.log(add(5,10,"add"))


