class Person  {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getInput(){
        this.name = prompt("이름 입력:");
        this.age = parseInt(prompt("나이 입력:"));
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};

const person = new Person("Jane Doe", 25);
person.greet();