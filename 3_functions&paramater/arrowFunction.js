const user={
    userName:"Aashish",
    price:34500,

    messageForWel: function(){
        // console.log(`${this.userName}, Welcome here!`);
    }
}

user.messageForWel();
user.userName="Meera";
user.messageForWel();

// console.log(this);


// ----------ACTUAL ARROW FUNCTIONS 
const sumTwoNumber=(num1, num2)=>{return (num1+num2)};
console.log(`The result is ${sumTwoNumber(4,5)}`);


// arrow function returning objects
const user_want=()=>({
    username:"Aashish"
})

console.log(user_want(this.username));
