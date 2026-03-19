class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old");
    }
}

const person = new Person("Filip", 20);
person.greet();