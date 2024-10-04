var num2=4500; // var has global scope

let num1=34;  // let has local/block scope 
if(true){
    let num1=23;
    var num2=45;
    const num3=434;
}

console.log(num1);
console.log(num2);
// console.log(num3);

function one(){
    const username="Aashish";

    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();


console.log(addOne(34)); // accessible
function addOne(num){
    return num+3;
}



console.log(addTwo(43)); // not accessible 
const addTwo=function(num){ // also known as expression sometimes 
    return num+4
}



