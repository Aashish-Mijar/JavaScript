//---------ARRAYS

// const subjects=["DBMS","System Analysis","Operating System", "Numerical Analysis","Leadership","Curriculum"];


// This can also be done
// const subjects=[]
// subjects[0]="DBMS";
// subjects[1]="System Analysis";

const subjects=new Array("DBMS","System Analysis","Operating System", "Numerical Analysis","Leadership","Curriculum")

const newSubjects=["Software Engineering", "Java","Discrete Maths"];

// console.table(subjects);
// console.log(subjects);
// console.log(newSubjects);

// const all=subjects.concat(newSubjects);   // first method to join two array together


// second method to join two array 
// all_members=[...subjects, ...newSubjects];
// console.log(all_members);

// converting array into string

const fruits=["Banana", "Orange", "Apple", "Mango"];
let fruit=fruits[fruits.length-1];
let str=fruits.toString();

// console.log(str);
// console.log(typeof(fruits));
// console.log(typeof(str));
 console.log(fruit);
