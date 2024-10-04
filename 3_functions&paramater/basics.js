//  keyword--- function

function addNum(num1, num2){
    let sum=num1+num2;
    console.log(sum);
}

// const result=addNum(3,5); // returning nothing 
//console.log("Result: ", result)


function addNum(num1, num2){
    let sum=num1+num2;
  return sum;
}

let result=addNum(3,5);
// console.log("Result: ", result);

function loginUserMessage(username="John"){
    if(username===undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// let print=loginUserMessage("Aashish");
console.log(loginUserMessage());


function calculateCarPrice(...num1){
    return num1
}

console.log(calculateCarPrice(200,100,500,550))

const user={
    userName:"Aashish",
    price:999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    userName:"sam",
    price:399
})

const myNewArray=[200,400,600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,676]));

