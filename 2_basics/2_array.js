const teachers=["Amrit", "Kiran", "Rajan"];
const students=["Aashish", "Samyog","Prabin"];

// teachers.push(students);
// console.log(teachers);

// let all=teachers.concat(students);
// console.log(all);

const all_members=[...teachers, ...students];
console.log(all_members);

const another_array=[1,2,3, [4,5,6],7,[8,9,10,[4,5]]];
const real_array=another_array.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("Aashish"));
console.log(Array.from("Aashish"));
console.log(Array.from({name:"Aashsih"})) // should be noted

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));
