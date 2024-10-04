//
let sum=0;
for(let idx=0; idx<=10; idx++){
    console.log(idx);
    sum+=idx;
}
// console.log("Sum is ",sum);

// multiplication table

for (let i = 1; i <=10; i++) {
    console.log("The outer loop value is: ", i);
    for(let j=1; j<=10; j++){
        console.log(`${i}* ${j} = ${i*j}`);
    }
}


// array and loop
let myArr=["RAM","ROM","Volatile", "Non-Volatile" ];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}



for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        // break;
        continue;
    }
  console.log(`The value of index is ${index}`);
    
}