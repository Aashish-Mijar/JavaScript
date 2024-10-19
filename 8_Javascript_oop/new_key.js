function multiplyBy4(num){
    // console.log('Hi');
    return num*4;
}

console.log(multiplyBy4(4));
console.log(multiplyBy4.power);
console.log(multiplyBy4.prototype);

function createUser(username, score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++
}
 
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const one=new createUser("pen", 10)
const two=new createUser("pencil", 5)

one.printMe();
two.printMe();