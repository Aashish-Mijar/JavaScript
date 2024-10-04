// objects can be defined as real life entities for example house, car etc 
// car can have different properties eg name, model, weight, color etc


// In javascript object can be defined in three ways 
// using object literal, new keyword, object constructor

const user={
    name: "Aashish",
    age: 19,
    eyeColor:"black",
    hairColor:"Blue",
    weight:55,
}

// --------------------------accessing objects values 
// console.log(user.name);
// console.log(user["eyeColor"]);
// delete user.weight;  // can delete object value
// console.log(user);

const product={}; // creating objects

product.name="phone";
product.color="Black";
product.storage=256;
product.prize=50000;

// console.log(product);
// console.log(product.name);
// console.log(product["storage"]);

// --------- It can also be made unchangeable 
Object.freeze(product)
product.prize=45000;  // can change the value of object 

// console.log(product.prize);
// console.log(Object.keys(product));      // this gives keys of object
// console.log(Object.values(product));    // this gives values of object
// console.log(Object.entries(product));   // this gives keys with values 

const num1={
    n1:1,
    n2:2,
}

const num2={
    n1:3,
    n2:4,
}


const obj=Object.assign({},num1, num2);
// const obj={...num1,...num2}
console.log(obj);

 