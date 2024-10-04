const pLanguage=["Javascript","C","C++", "Python", "Java", "C#", "Ruby","Rust","Swift"];

// pLanguage.forEach( function (item){
//     console.log(item);
// })

pLanguage.forEach((value)=>{
    // console.log(value);
})

function print(item){
    console.log(item);
}

// pLanguage.forEach(print);

// pLanguage.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

// object inside array and accessing using forEach loop 
const coding=[
    {
        languageName:"Javascript",
        languageFile:"js"
    },
    {
        languageName:"Java",
        languageFile:"java"
    },
    {
        languageName:"C++",
        languageFile:"cpp"
    }
]
coding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFile);
})