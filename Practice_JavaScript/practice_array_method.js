/*   ---------ARRAY Methods
length  tostring    at  join    pop     push    shift   unshift delete  concat  copyWithin  flat    splice  toSpliced   slice    */

const vegetable=["Potato","Carrot","Radish","Egg Plant","Chayote","Ridge Gourd"];
// console.table(vegetable);
// console.log(vegetable.length); //finding out the length of array
// console.log(vegetable.toString());


vegetable.push("Cucumber"); // add in last
vegetable.pop();  // delete from last

vegetable.unshift("Bottle Gourd"); // add in first
vegetable.shift(); // delete from last
// console.log(vegetable);


// ------  Concating two arrays
const numbers=[1,3,5,4,7,9];
const newNumbers=[90,45,65,23,56];
const negNumbers=[-1,-3,-45,-34];

// Method one
// let allNumbers=numbers.concat(newNumbers, negNumbers);

//  Method two
// let all_Numbers=[...negNumbers,...newNumbers,...numbers];

// console.log(all_Numbers);

const arr=numbers.concat(3435);
console.log(arr);


const num=[[1,3],[3,4],[4,5]];
const newNum=num.flat();
// console.log(num);
// console.log(newNum);


// splice() can be used to remove and add elements in array
const brands=["H&M", "LV", "Chanel","Zara"];
brands.splice(1,2,"Hermes","Pepsi");
console.log(brands);


// ------toSpliced() it is same as splice() but it returns new array

// const newBrands=brands.toSpliced(2,2,"Coco-Cola", "Fanta");
const newBrands=brands.toSpliced(1,2);
// console.log(newBrands);

const drinks=brands.slice(2) // slice from 2 including 2
console.log(drinks);