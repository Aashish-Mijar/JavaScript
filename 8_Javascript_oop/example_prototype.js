let myName='MindBrust    ';
console.log(myName.trueLength);

let myHeros=["thor", "spiderman"];

let heroPower={
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`Spider man's power is ${this.spiderman}`)
    }
}

Object.prototype.aashish=function(){
    console.log("aahshish is present in all objects")
}

Array.prototype.heyAashish=function(){
    console.log("power given to array")
}
// heroPower.aashish();
myHeros.aashish();
myHeros.heyAashish();
// heroPower.heyAashish();


//------------------------Inheritance 

const user={
    name:'coffee',
    id:1232,
}

const Teacher={
    name:"Aashish",
}

const TeachingSupport={
isAvailable:false
}

const TASupport={
    makeAssignment:'Js Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user;

//----------modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername="     Meera     ";

String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"MindBrust     ".trueLength()