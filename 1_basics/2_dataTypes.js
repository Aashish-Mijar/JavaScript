"use strict"; // treat all JS code as newer version
// alert("hello");  // we are using node js not browser


let name ="Aashish"; //String datatypes
let age =19  // Numbers
let isPass=true  //boolean
//null --standalone value
//undefined  
//symbol  --unique 

//object

console.log(typeof name);
console.log(typeof null);



// ---------------------------------------------

//  stack(primitive), heap(non-primitive)

let myName="Aashish";  // memory assigned in stack

let anName="Aash";
anName="Mijar";

console.log(anName);
console.log(myName);


//--------memory assigned in heap 
let user={
    name:"Aashish",
    id:123,
    age:19,
}

let user2=user;
user.name="Meera";

console.log(user2.name);