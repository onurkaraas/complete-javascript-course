'use strict';

/*

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never do this
  //  this.calcAge = function () {
  //    console.log(2037 - this.birthYear);
  //  };
};
const onur = new Person('Onur', 1997);

console.log(onur);
//new (empty) {} obj created
//function called, this = {}
//{} linked to prototype
//function auto return {}

const ahmet = new Person('ahmet', 1995);
console.log(ahmet);
console.log(onur instanceof Person);

Person.hey = function(){
console.log('Her There');
};
Person.hey();


//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(onur.__proto__);

console.log(Person.prototype.isPrototypeOf(onur));

Person.prototype.species = 'Homo Sapiens';
console.log(ahmet);

console.log(ahmet.hasOwnProperty('firstName'));

console.log(onur.__proto__);
//object.prototype
console.log(onur.__proto__.__proto__);

console.log(onur.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 3, 5, 5, 8, 8, 9, 9, 2];

console.log(arr.__proto__ === Array.prototype);

console.log(onur.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  const speed = 10 + this.speed;
  console.log(speed);
};
mercedes.accelerate();
bmw.accelerate();

//class expression
//const PersonCl = class {}

//class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
const onur = new PersonCl('Onur Karaas', 1997);
console.log(onur);

console.log(onur.age);

//PersonCl.prototype.greet = function () {
//console.log(`Hey ${this.firstName}`);
//};
onur.greet();

//Classes are not hoisted
//Class are first-class citizens
//Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1995);

const account = {
  ownew: 'Onur',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 500;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`${this.firstName} , ${this.course}`);
};

const mike = new Student('Mike', 2020, 'CS');

console.log(mike);

mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

//Coding challenge 3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Ev.prototype.accelerate = function () {
  const speed = 10 + this.speed;
  const charge = this.charge - 1;
  console.log(`${this.make} going at ${speed} Km/h with a charge of ${charge}`);
};

const tesla = new Ev('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`${this.fullName} , ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} y.o but i feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const onur = new StudentCl('Onur Karaas', 1997, 'MIS');
onur.introduce();
onur.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const onur = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
jay.introduce();
class Account {
  constructor(owner, curr, pin, movements) {
    this.owner = owner;
    this.curr = curr;
    this._pin = pin;
    //protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks ${owner}`);
  }
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan() {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);

      return this;
    }
  }
}

const acc1 = new Account('Onur', 'TRY', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
acc1._movements.push(250);
console.log(acc1._pin);

//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(24000).withdraw(4000);

console.log(acc1.getMovements());

 */

//Coding challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate();
