//Singleton -----using constructor  

// const app=new Object()  //----Singleton object
const app={}
app.id="124abc";
app.name="John";
app.isLoggedIn=false;

const regular_user={
    email:"someone@hotmail.com",
    fullName:{
        users_name:{
            first_name:"Aashish",
            last_name:"Mijar",
        }
    }
}
// console.log(regular_user.fullName.users_name.first_name);

// console.log(app);

const obj1={1:"a", 2:"b"}
const obj2={1:"a", 2:"b"}

const obj3= Object.assign({}, obj1, obj2);
// const obj3={...obj1, ...obj2}


// console.log(obj3);

const users=[
    {
        id:1,
        email:"aa@gmail.com",
    },
    {
    },
    {
    },
]

console.log(users[1].email);
console.log(Object.keys(regular_user));
// console.log(Object.values(regular_user));
console.log(Object.entries(regular_user));