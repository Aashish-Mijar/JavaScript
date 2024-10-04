const myobject={
    js:"Javascript",
    py:"Python",
    cpp:"C++"
}

for(const key in myobject){
    // console.log(myobject[key]);
}

// array and for in loop

const myarr=["js", "py", "cpp", "c"];
for(const key in myarr){
    // console.log(myarr[key]);
}

// map and for in loop
const map=new Map()
map.set('N', "Nepal")
map.set('USA',"United states of America")

// console.log(map);

for(const key in map){
    console.log(map);
}