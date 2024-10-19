const user={
    username:"aashish",
    loginCount:7,
    signedIn:true,

    getUserDetails:function(){
        console.log(`Got detail of ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this
}

const userOne= new User("Aashish", 1, true);
const userTwo=new User("Aashish1", 14, false);

console.log(userOne);
console.log(userTwo);