let score="13";

console.log(typeof score);

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"13"== 13
// "13"==NaN
//true== 1; false==0

let isLoggedIn=1;
let boolIsLog=Boolean(isLoggedIn);

console.log(typeof isLoggedIn);
console.log(typeof boolIsLog);
console.log(boolIsLog);

let numb=124;
let stringNum=String(numb);
console.log(stringNum);
console.log(typeof stringNum);

// --------- Operations ---------------

let val=45;
let neVal=-val;
// console.log(neVal);
// console.log(34+234);
// console.log(23-12);
// console.log(2**5);
// console.log(2/3);
// console.log(2%3);

let str1="hello";
let str2=" Aashish";

let str3=str1+str2;
console.log(str3);

// console.log(1+"2");
// console.log("1"+2);
// console.log("1"+2+2);
// console.log(1+2+3+"34");

console.log(+true); // true+ --not allowed

let count=10;
let newcount=count++;
// console.log(count);
console.log(`Count:${count}, Newcount:${newcount}`)
console.log(3>1);
console.log(null>0);
console.log(null>=0);
console.log(undefined==0);
console.log(undefined!=0);
// ===  it checks values and datatypes as well
console.log("2"===2);


