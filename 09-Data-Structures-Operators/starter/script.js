'use strict';


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


for(const flight of flights.split('+')) {
  const [type,from,to,time] = flight.split(';');
  const output =
    `${type.substr(1,).replace('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`.padStart(41);
  console.log(output)
}



/*
for (const [i,row] of rows.entries()) {
  const [first, second] = row.toLocaleLowerCase().trim().split('_');
  const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
  console.log(`${output.padEnd(20)}${'T'.repeat(i+1)}`);
}

console.log(rows);








// Data needed for first part of the section
const weekdays = ['mon', 'tue','wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {

[weekdays[3]]: {
    open:12,
      close:22,
  },
  [weekdays[4]]:{
    open:11,
      close:23,
  },
  [weekdays[5]]: {
    open:0,
      close:24,
  },
};



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,



  order(starterIndex,mainIndex) {
    return [this.starterMenu[starterIndex],
      this.mainMenu[mainIndex]];
  },

  orderDelivery({
                            starterIndex = 1,
                            mainIndex = 0,
                            time = '20:00',
                            address })
  {
    console.log(starterIndex, mainIndex, time, address);
    console.log(`${ this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]}, adres: ${address}, ${time}`);
  },

  orderPasta(ing1,ing2,ing3) {

    console.log(`${ing1},${ing2},${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients)
  },

};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  
  for (const [i,row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'T'.repeat(i+1)}`);
  }

});


/*

underscore_care
 first_name
 Some_Variable
  calculate_AGE
  delayed_departure

/*
console.log('a+b+c'.split('+'));

const [firstName, lastName] = 'Onur KARAAS'.split(' ');

console.log(firstName, lastName)

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const cap = function(name) {
   const names = name.split(' ');
   const nameUp = [];
   for(const n of names) {
     nameUp.push(n[0].toUpperCase() + n.slice(1));
   }
   console.log(nameUp.join('  '))
}

cap('jessica ann smith davis');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

const maskCredit = function(number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*') ;
}

console.log(maskCredit(2132132321321));
maskCredit('2444234221232134234');

const message2 = 'Bad weather... All delayed...';

console.log(message2.repeat(5));





/*

const airline = 'THY turkish airlines tur';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS'; //
const passengerLower = passenger.toLowerCase();
const passCor = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passCor);

console.log(passengerLower)

const email = 'qwe@onur.com';

const loginMail = '  Qwe@oNur.com \n'

const lowerMail = loginMail.toLowerCase().trim();

console.log(lowerMail);

const trimMail = lowerMail.trim();
console.log(trimMail);

console.log(email === trimMail)


const priceGB = '288,97£';

const priceUS = priceGB
  .replace('£', '$')
  .replace(',','.');

console.log(priceUS);

const announ = 'All pass come to door 23. door 23';

const announ1 = announ.replace('door','gate');

const announ2 = announ.replaceAll('door','gate');
console.log(announ1);

console.log(announ2);

const plane = 'A320neo';

console.log(plane.includes('neo'));

const checkBag = function(items) {
      const bag = items.toLowerCase();
      if (bag.includes('knife')) console.log('cant enter')
  else
    console.log('qwe')
};

checkBag('I have a laptop, some Food and a pocket Knife');
checkBag('Socks and camera') ;
checkBag('Got some snack and a gun for protection');

const plane = 'A320';
console.log(airline.indexOf('T'));

console.log(airline.lastIndexOf('T'));

console.log(airline.indexOf('tur'));
console.log(airline.lastIndexOf('tur'));

console.log(airline.slice(0,4).length);

console.log(airline.slice(0, airline.indexOf('lines')));

console.log(airline.slice(5,-5));

const checkMiddle = function(seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Mıddle Seat')
  else console.log('Not')
};

checkMiddle('11B');
checkMiddle('23C');
checkMiddle('3E');












const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'SUBS'],
  [47, 'GOAL'],
  [61, 'SUBS'],
  [64, 'YELLOW'],
  [69, 'RED'],
  [70, 'SUBS'],
  [72, 'SUBS'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'YELLOW'],
]);

console.log(gameEvents);


const events = [...new Set(gameEvents.values())];
console.log(events);


gameEvents.delete(64);
console.log(gameEvents);

const min = 90;
const avgEvent = min / gameEvents.size;

console.log(`An event happend, on avg, every ${avgEvent} min in ${min} min`);
console.log(avgEvent);




for (const [key, value] of gameEvents) {
  if(key < 45) console.log(`[FIRST HALF] ${key}, ${value}`);
  else
    console.log(`[SECOND HALF] ${key}, ${value}`);
}




const question = new Map([
  ['Question', 'Whats the best p l i t w ?'],
  [1, 'C'],
  [2, 'Java'],
  [3,'JS'],
  ['correct', 3],
  [true,'Correct'],
  [false,'Wrong answer']
]);


console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);



for (const [key, value] of question) {
  if(typeof key === 'number') console.log(`${key}, ${value}`);
};




console.log([...question]);
console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);







const rest = new Map();
rest.set('name','Class');

rest.set(1,'Firenze, Italy');
rest.set(2,'Firenze, Italy');



console.log(rest);



rest
  .set('cat', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true,'WEREOP')
  .set(false,'WEREc');


rest.get('name');

console.log(rest.get(true));

const time = 1;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('open'));

console.log(rest);

rest.delete(2);

console.log(rest.size);

const arr = [1,2];

rest.set(arr, 'test');
console.log(rest.get(arr));




const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);

console.log(ordersSet);
console.log(new Set('Onur'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));

const a = ['asd','qwe'];
ordersSet.add(a[0]);
console.log(ordersSet.size);

console.log(ordersSet);
ordersSet.add('zxc');
console.log(ordersSet);

console.log(ordersSet.size);

for (const order of ordersSet) console.log(order);



const staff = ['chef','wait', 'wait', 'manager','chef', 'wait'];

console.log(staff);

const staffSet = [...new Set(staff)];
console.log(staffSet);









const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

};

for(const [i,player] of game.scored.entries())
  console.log(`goal ${i +1}: ${player}`);


const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;

console.log(average)

for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw': `victory ${game[team]}`
  console.log(`odd of ${teamStr} ${odd}`);
};


/*

const goals = Object.keys(game.scored);
console.log(goals);



const values1 = Object.values(game.scored);
console.log(values1);


const entries1 = Object.entries(game.scored);

console.log(entries1);
for (const [b, a] of entries1) {
  console.log(`Goal ${b+1}  : ${a} `);
};




const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `};

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open,close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
};








if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue','wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day}, ${open}`);

};

console.log(restaurant.order?.(0,1) ?? 'qwe');
console.log(restaurant.orderRisotto?.(0,1) ?? 'qwe');

const users = [
  {name: 'onur', email: 'qweqwe'}
];

console.log(users[0]?.name ?? ' user array empty');






const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

for (const item1 of menu.entries()) {
  console.log(item1);
}











const [players1, players2] = game.players;
console.log(players1,players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers)

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

const players1Final = [...players1, 'Thiage', 'Coutinho', 'Periscic'];

const {odds: {team1, x:draw, team2}} = game;
console.log(team1,draw,team2);

const printGoal = function(...players) {

  console.log(`${players.length} goals were scored`);
};

console.log(...game.scored);

//printGoal( 'Davies','Muller','Lewandowski','Kimmich');
//printGoal( 'Davies','Muller');
printGoal(...game.scored);

team1 < team2 && console.log('team 1 gonna win');
team1 > team2 && console.log('team 2 gonna win');


console.log('--- OR --- ')

console.log( 0 || null);
console.log('' || 'qwe');
console.log(true);

console.log(1 || 0);

console.log( 0 || '' || 'qwe' || 23 || null);



console.log('--- AND --- ');

console.log(0 && 'qwe');
console.log(7 && 'qwe');

console.log('qwe' && 23 && null && 'asd');

if (restaurant.orderPizza) {
  restaurant.orderPizza('qwe', 'asd');
}
console.log('Qweqweqwe')

restaurant.orderPizza && restaurant.orderPizza('qwe', 'asd');

const arr = [1,2, ...[3,4]];

const [a, b , ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , ris, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, ris, otherFood);


// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log( weekdays );

//functions

const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum)
}
add(2,3);
add(5,5,7,563,234,7,3);
add(2,6,9,89,34,3);

const x = [23,5,7];

add(...x);

restaurant.orderPizza('qwe','asd','zxc','gh');

restaurant.orderPizza('qwe','df');


/*

const arr = [3,4,5,6,7];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr)

const newMenu = [...restaurant.mainMenu, 'qwe'];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

const menu = [ ...restaurant.mainMenu ,...restaurant.starterMenu];

console.log(menu);

//iterables : arrays, strings, maps, sets. NOT OBJECTS
const str = 'QWE';
const letters = [...str, ' ', 'S.' ];
console.log(letters);
console.log(...str);

const ingredients = [
  //prompt("Let's make pasta!"),
  // prompt("2?"),
  //prompt("3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);

//objects

const newRes = {foundedIn: 1999, ...restaurant, founder:'onur'};
console.log(newRes)

const resCopy = {...restaurant};

resCopy.name = 'karaas';
console.log(resCopy.name);
console.log(restaurant.name);




restaurant.orderDelivery({
  time: '22:30',
  address: 'qwe, 21',
  mainIndex: 2,
  starterIndex:2,
});
restaurant.orderDelivery({
  address: 'qwe, 21',
  starterIndex:1,

});



const {name,openingHours, categories} = restaurant;
console.log(name,openingHours, categories)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;

console.log(restaurantName,hours,tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu,starters);

// mutating variables
let a = 111;
let b = 999;

const obj = {a: 23, b:7, c: 14};

({a, b} = obj);

console.log(a,b)

// nested object
const {fri: {open: o,close: c}} =  openingHours;

console.log(o,c)



const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const  [x,y,z] = arr ;
console.log(x,y,z);
console.log(arr);

let [main, ,  secondary] = restaurant.categories;
console.log(main, secondary);

[main,secondary] = [secondary,main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

const nested = [2,4, [5,6]];


const [i, ,[,k]] = nested;
console.log(i,k)
*/
