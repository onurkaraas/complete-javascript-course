'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
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
