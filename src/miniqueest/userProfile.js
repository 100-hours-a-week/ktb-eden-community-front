export class User {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hi my name is ${this.name}, i'm ${this.age} years old`)
    }

};