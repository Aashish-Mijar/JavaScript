class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`The username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const meera=new user("Meera");
// console.log(meera.createId())


class Teacher extends user{
    constructor(username, email){
        super(username);
        this.email=email;
    }

}

const miru=new Teacher("Miru", "miru@gmail.com");
miru.logMe();
console.log(miru.createId())