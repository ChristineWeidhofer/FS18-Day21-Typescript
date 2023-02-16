// let vitamin: string = "B";
// console.log(vitamin);

let selector = document.getElementById("result")as HTMLElement;

class Person {
  name: string;
  age: number;
  jobTitle: string;
    constructor(name: string, age: number, jobTitle: string) {
      this.name = name;
      this.age = age;
      this.jobTitle = jobTitle;
    }
    printGreet() {
      return `<p>Hello there, my name is ${this.name}, I am ${this.age} years old and I am a ${this.jobTitle}.</p>`;
    }  
}

const person1 = new Person("Christine", 45, "Web Developer");

console.log(person1);
selector.innerHTML = person1.printGreet();

