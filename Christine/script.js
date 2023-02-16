"use strict";
// Basic 1
let selector = document.getElementById("result");
let selWrap = document.getElementById("wrapper");
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printGreet() {
        return `Hello there, my name is ${this.name}, I am ${this.age} years old and I am a ${this.jobTitle}`;
    }
}
const person1 = new Person("Christine", 45, "Web Developer");
console.log(person1);
selector.innerHTML = person1.printGreet();
// Basic 2
class PersonSalary extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printSalary() {
        return `<hr><br>${super.printGreet()}, I get ${this.salary} every month and I work in ${this.jobLocation}.`;
    }
}
const person2 = new PersonSalary("Christine", 45, "Web Developer", 3000, "San Francisco");
console.log(person2);
selector.innerHTML += person2.printSalary();
// Advanced
class Vehicles {
    constructor(brand, year, color, price) {
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.price = price;
    }
    printAd() {
        return `<hr><br>Hello there, our car is made by ${this.brand}, it is from ${this.year} and is ${this.color}`;
    }
    printPrice() {
        return `€ ${this.price},--`;
    }
}
const vehicle1 = new Vehicles("Mercedes", 1999, "silver", 50000);
const vehicle2 = new Vehicles("Audi", 2015, "blue", 5000);
const vehicle3 = new Vehicles("BMW", 2022, "red", 30000);
const vehicle4 = new Vehicles("VW", 2019, "black", 10000);
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log(vehicle4);
// selector.innerHTML += vehicle1.printAd();
// selector.innerHTML += vehicle1.printPrice();
let allVehicles = [vehicle1, vehicle2, vehicle3, vehicle4]; //create array of objects
console.log(allVehicles);
for (let val of allVehicles) {
    selWrap.innerHTML += ` 
  <div class="box">${val.brand}</div>
  `;
}
let boxs = document.getElementsByClassName("box");
for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener("click", function () {
        boxs[i].style.backgroundColor = "white";
        boxs[i].innerHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${allVehicles[i].brand}</h5>
      <p class="card-text">This vehicle was built in ${allVehicles[i].year}</p>
      <a href="#" class="btn btn-primary btnPrice">Price</a>
    </div>
    </div>
    `;
        let buttons = document.getElementsByClassName("btnPrice");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                //console.log(`The price of the vehicle is: € ${allVehicles[i].price}`);
                alertPrice();
            });
        }
    });
    function alertPrice() {
        alert(`The price of the vehicle is: € ${allVehicles[i].price}`);
    }
}
