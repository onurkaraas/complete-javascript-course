(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function (click) {
    header.style.color = 'blue';
  });
})();

/*
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 555;
  f = function () {
    console.log(b * 2);
  };
};

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we have ${n} passenger`);
    console.log(`each groups has ${perGroup} person`);
  }, wait * 500);

  console.log(`will start ${wait}`);
};

boardPassengers(3, 3);

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

secureBooking()();
secureBooking()();

const booker = secureBooking();
booker();
booker();
booker();
booker();

console.dir(booker);
booker();
booker();

console.dir(booker);


const runOnce = function () {



  console.log(`qeqweqweqweq`);
};

runOnce();

(function () {
  console.log('asdasd');
  const isPrivate = 23;
})();

(() => console.log('12312'))();

{
  const isPrivate = 21;
  var notPrivate = 234;
  console.log(isPrivate);
}

console.log(isPrivate);



'use strict';

const poll = {
  question: 'Fav Lang',
  options: ['0:JS', '1:PYTHON', '2:RUST', '3:C'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(',')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// [5,2,3]
// [1,5,3,9,6,1]
/*

const thy = {
  airline: 'Turkish Airlines',
  iataCode: 'THY',
  booking: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`
    );
    this.booking.push({flight:`${this.iataCode}${flightNum}, name`});
  },
};

thy.book(23,'Onur karaas');
thy.book(453,'KARAAS');
console.log(thy);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};
const book = thy.book;

const bookEW = book.bind(eurowings);
const bookTHY = book.bind(thy);


bookEW(222, 'Onur Karaas');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('KARAAS');

thy.planes = 200;
thy.buyPlane = function() {
  console.log(this);

  this.planes++
  console.log(this.planes);
};

thy.buyPlane();
document.querySelector('.buy').addEventListener('click',thy.buyPlane.bind(thy));

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.10,200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(1));



















/*


const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greet('qwe');



greetHey('Onur');


greet('Hello')('qwe');


/*

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};



//higher order
const transformer = function(str, fn) {
  console.log(`orj str ${str}`);
  console.log(`transformed str ${fn(str)}`);
  console.log(`transformed str ${fn.name}`);

}
transformer('js is the best', upperFirstWord);
transformer('js is the best', oneWord);















/*

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmed',
  passport: 123213213
}
const checkIn = function(flightNum,passenger) {

    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 123213213) {
      console.log('ok')
    } else {
      console.log('wrong')}
}

checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000000)
}


newPassport(jonas);
checkIn(flight,jonas);

/*

const bookings = [];

const createBooking = function(flightNum,
                               numPassengers = 1,
                               price = 199) {

  //numPassengers = numPassengers || 1;
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('qwe');


 */
