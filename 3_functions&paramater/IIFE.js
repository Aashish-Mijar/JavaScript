//Immediately invoked function expression  for solving global scope pollution


(function subt(num1, num2){
    console.log(num1-num2);
    console.log("Hello coders!");
})(3, 5);

((name)=>{
    console.log(`Welcome ${name}, in my hotel!`);
})('Aashish');