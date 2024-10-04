//-------------Arrays-------------------------
// const myArr=["Aashish", "Dipisha","Prabin"];
const myArr=[1,3,4,5,6]
console.log(myArr);
// console.log(myArr[2]);

// const myArr1=[1, 4,6,7];
// console.log(myArr1);

// const myArr2=new Array(1,5,7,7);
// console.log(myArr2);


// ---------ARRAY Methods------------

// myArr.push("Meera","Ayushma");
// myArr.pop();

// myArr.unshift('Meera');
myArr.shift();

// console.log(myArr.includes("Dipisha"));
// console.log(myArr.indexOf("Meera"));


// const newArr=myArr.join();
// console.log(myArr);
// console.log(newArr);

// //---------Slice, Splice

// console.log("a", myArr);

// const myn1=myArr.slice(1,3);

// console.log(myn1);
// console.log("B", myn1);

const myn2=myArr.splice(1, 3);
console.log("c", myArr);
console.log(myn2);