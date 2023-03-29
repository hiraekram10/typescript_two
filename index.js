// In cases where programs have complex data structures, 
//using TypeScript’s basic types may not completely describe
// the data structures you are using. In these cases,
// declaring your own type will help you address the 
//complexity. In this section, you are going create 
//types that can be used to describe any object shape you need to use in your code.
var user = {
    name: "hira",
    rollNo: 604,
    hobbies: ["listening"],
    email: "",
};
user.email = "amaze@gmail.com"; //pushing value in object



var users = [];
//users.push(4) error not accepting any other value except User
// users.push({}) error bcz its keys and values are not same as first
users.push({
    name: "ekram",
    rollNo: 605,
    hobbies: ["reading"],
    email: "dad@gmail.com" //store later
});
console.log(users, user);
var user2 = {
    name: 'anjum',
    rollNo: 505,
    hobbies: ["cooking, baking"],
    email: "admin@gmail.com" //giving error
};
