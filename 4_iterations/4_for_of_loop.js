//for of

const arr=[1,4,5,23,6];
for(const val of arr){
    console.log(val);
}

// for of in strings

const userName="Aashish"
for(const letter of userName){
    console.log(`Character in username is ${letter}`);
}
console.log(userName.length)

// Map
const map=new Map()
map.set('N', "Nepal")
map.set('USA',"United states of America")

console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}