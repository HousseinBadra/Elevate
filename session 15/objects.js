class Creature {
  name = "Creature";
  constructor() {
    console.log("hello");
  }
  sayHi() {
    console.log("hi");
  }
}
class Human extends Creature {
  constructor(user_name) {
    super();
    // this.name = user_name;
    this.state = 0;
    // console.log(this);
  }
  sayHello() {
    console.log(`Hello I am ${this.name}`);
  }
}

let Houssein = new Human("Houssein");
// let Alaa = new Human("Alaa");
Houssein.sayHello();
Houssein.sayHi();
// Houssein.state = 9;
// console.log(Alaa.state);
