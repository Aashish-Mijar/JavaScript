//-------Strings in JavaScript

let fname="Aashish\t";
let lname="Mijar\v";
// console.log(fname.length);
// console.log(lname.length);


//---- string concatination
let fullName=fname+lname;
// console.log(fullName);

// console.log("This called \"so called\" man.");

let str1="Let's have a pizza";
let str2= new String("Let's have a pizza"); // using new String can be defined as OBJECTS 

// console.log(`The type of str1 is ${typeof str1} and the type of str2 is ${typeof str2}`);

// console.log(str1==str2); // result----True
// console.log(str1===str2); // result would be false because datatype is different


//--------------STRING METHODS-----------
let str="Let's rock";
let newStr=str.length;
// console.log(newStr);
// console.log(str.charAt(2));
// console.log(str.charCodeAt('s'));
// console.log(str.at(4));
// console.log(str[0]);
// console.log(str.slice(0,5));


let name="   My name is aashish and  aashish Mijar     ";
// console.log(name);
// let name2=name.trim();
// let name2=name.trimStart();
// let name2=name.trimEnd();
// console.log(name2);

// let name2=name.replace(/Aashish/g, "Mira");
let name2=name.replaceAll(/aashish/g, "Mira");
// name2=name.replaceAll(/aashish/g, "meera");
// console.log(name2);
// console.log(name2.split("and"));


let heros="Superman, Hulk, Thor";
console.log(heros);
let newheros=heros.slice(0,7); // 0 is first/starting index and 7 is the index upto which users what to print
let new2heros=heros.substring(3, 12);
let new3heros=heros.substr(1,7);
// console.log(new2heros);
// console.log(newheros);
// console.log(new3heros);