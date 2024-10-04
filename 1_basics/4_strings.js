const name="Aashish";

const subName="JavaScript-node-react";
console.log(subName);
console.log(subName[1]);
console.log(subName.__proto__);
console.log(name);

// console.log(name.toUpperCase());
// console.log(subName.toLowerCase());
// console.log(subName.charAt(2));
// console.log(subName.indexOf('S'));

// const newName=new String("Jone");
// console.log(newName);

const newString=subName.substring(0,5);
console.log(newString);

const anotString=subName.slice(0,4);
console.log(anotString);

const cl_ass="      fourthSemester     ";
console.log(cl_ass);
console.log(cl_ass.trim());

const url="https://aashish.com/aashish%20mijar";
console.log(url.replace('%20', '_'));
console.log(url.includes("aashish"));

console.log(subName.split('-'));