const person = {
    name : "John",
    age : 30
}//Person

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }//Constructor

    greeting(){
        return "My name is "+this.name+" and I am "+this.age+".";
    }//greeting
}//Person

module.exports = Person;