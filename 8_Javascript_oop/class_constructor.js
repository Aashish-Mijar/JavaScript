// class user{
//     constructor(username, email, password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const one=new user("MindBrust", "brust@example.com", "123")
// console.log(one.encryptPassword());
// console.log(one.changeUsername());

//--------------behind the scene

function user(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password
}

user.prototype.encryptPassword=function(){
    return `${this.password}abx`;
}

user.prototype.changeUsername=function(){
    return `${this.username.toLowerCase()}`;
}

 const one=new user("MindBrust", "brust@example.com", "123")
console.log(one.encryptPassword());
console.log(one.changeUsername());