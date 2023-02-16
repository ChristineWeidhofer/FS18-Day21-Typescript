// error is because of type thing of "Swal", but still works

// Basic 1

let selector = document.getElementById("result")as HTMLElement;
let selWrap = document.getElementById("wrapper")as HTMLElement;

// class Person {
//   name: string;
//   age: number;
//   jobTitle: string;
//     constructor(name: string, age: number, jobTitle: string) {
//       this.name = name;
//       this.age = age;
//       this.jobTitle = jobTitle;
//     }
//     printGreet() {
//       return `Hello there, my name is ${this.name}, I am ${this.age} years old and I am a ${this.jobTitle}`;
//     }  
// }

// const person1 = new Person("Christine", 45, "Web Developer");

// console.log(person1);
// selector.innerHTML = person1.printGreet();

// // Basic 2

// class PersonSalary extends Person {
//   salary: number;
//   jobLocation: string;
//     constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
//       super(name, age, jobTitle)
//       this.salary = salary;
//       this.jobLocation = jobLocation;
//     }
//   printSalary() {
//     return `<hr><br>${super.printGreet()}, I get ${this.salary} every month and I work in ${this.jobLocation}.`;
//   }  
// }

// const person2 = new PersonSalary("Christine", 45, "Web Developer", 3000, "San Francisco");

// console.log(person2);
// selector.innerHTML += person2.printSalary();

// Advanced
let allVehicles : any = [];
class Vehicles {
  image: string;
  brand: string;
  year: number;
  color: string;
  price: number;
    constructor(image: string, brand: string, year: number, color: string, price: number) {
      this.image = image;
      this.brand = brand;
      this.year = year;
      this.color = color;
      this.price = price;
      allVehicles.push(this);
    }
    printAd() {
      return `<hr><br>Hello there, our car is made by ${this.brand}, it is from ${this.year} and is ${this.color}`;
    }
}
const vehicle1 = new Vehicles("mercedes.jpg", "Mercedes", 1999, "silver", 50000);
const vehicle2 = new Vehicles("audi.jpg", "Audi", 2015, "blue", 5000);
const vehicle3 = new Vehicles("bmw.jpg", "BMW", 2022, "red", 30000);
const vehicle4 = new Vehicles("vw.jpg", "VW", 2019, "black", 10000);


class Motorbikes extends Vehicles {
  seats: number;
  fuel: string;
    constructor(image: string, brand: string, year: number, color: string, price: number, seats: number, fuel: string) {
      super(image, brand, year, color, price)
      this.seats = seats;
      this.fuel = fuel;
    }
    printAd() {
      return `<hr><br>This bike has ${this.seats} seat(s) and uses ${this.fuel}.`;
    }
}

const moto1 = new Motorbikes("honda.jpg", "Honda", 2018, "green", 3000, 2, "electric power");
console.log(moto1);

console.log(allVehicles);

for (let val of allVehicles) {
  selWrap.innerHTML += ` 
  <div class="box">${val.brand}</div>
  `;
}

let boxs = document.getElementsByClassName("box") as HTMLCollection;

for(let i: number = 0; i < boxs.length; i++){
  boxs[i].addEventListener("click", function(){
    (boxs[i] as HTMLElement).style.backgroundColor = "white";
    boxs[i].innerHTML = `
    <div class="card" style="width: 20rem;">
    <img src="${allVehicles[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${allVehicles[i].brand}</h5>
      <p class="card-text">${allVehicles[i].printAd()}</p>
      <a href="#" class="btn btn-primary btnPrice">Price</a>
    </div>
    </div>
    `;
    let buttons = document.getElementsByClassName("btnPrice")as HTMLCollection;
    for (let i: number = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
    //console.log(`The price of the vehicle is: € ${allVehicles[i].price}`);
    alertPrice();
    })
    }
  })
  function alertPrice() {
    Swal.fire(`The price of the vehicle is: €&nbsp;${allVehicles[i].price}`);
  }
}


// von Julius für das Tertiary If:

// let yesno = (this.companyCar==true)? "yes":"No"; // Create variable and make an if statement in a short way. After you can use this variable to print "yes" or "No" instead of "true" or "false"
//     return `Hi, my name is ${this.name} and I'm ${this.age} years old. I need ${this.specialTool} Do I get a company car? ${yesno} `