
//----------Objects Literals------
// Object.create


const mySym=Symbol("keys");
const user={
    name:"Aashish",
    id:"79290002",
    [mySym]:"My Keys",
    address:"Waling",
    email:"aashishmijar11@gmail.com",
    isLoggedIn:false,
}

console.log(user.email);
console.log(user["email"]);
console.log(user[mySym]);

user.email="aashishmijar23@hotmail.com";
// Object.freeze(user);   // make it unchangeable
user.email="aashishmijar24@microsoft.com";
console.log(user.email);

user.greetings=function(){
    console.log(`Hello Js users ${this.name} your id is ${this.id}`);
}

console.log(user.greetings());