class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

//-------------inheritence
class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${
        this.username
        }`);
    }
}

const one= new Teacher("Meera", "erra@example.com", "123");
// console.log(one);
// one.addCourse();
one.logMe();

const two=new user("Frustration");
// two.addCourse();
two.logMe();

console.log(two instanceof user)