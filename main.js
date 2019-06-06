// let car = ["red", 2015, "Ford", "Mustang"]

// let car = {
//     color: "Red",
//     maker: "Ford",
//     model: "Mustang",
//     year: 2015
// }

// `I love my ${car.color} ${car.model}`

// animals = {
//  name: ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
// }

// // winner
// let animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// Exercise 1
// const age = 30;
// const timeSpan = 25;
// const futureAge = age + timeSpan;
// const name = "Biff";
// const generationStereotype = "millenial";
// const dadJoke = "milleni-old";

// const lunchBox = {
//   meal: "lunch",
//   sandwich: "peanut butter and jelly",
//   bread: "whole wheat",
//   drink: "grape juice",
//   fruit: "apple"
// };

// const lunchBox = [
//   "lunch",
//   "peanut butter and jelly",
//   "whole wheat",
//   "grape juice",
//   "apple"
// ];

// console.log(
//   `Hi, my name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}. I guess that means I'll be a ${dadJoke} then. Ha, ha!`
// );

// const blogContainer = document.querySelector(".blogPosts");
// myArticles = document.querySelectorAll(".blogArticle");

// console.log(blogContainer);
// console.log(myArticles);

// blogContainer.classList.add("currentBlog");

// myArticles[0].classList.add("currentBlog")
// myArticles[1].classList.add("currentBlog")
// myArticles[2].classList.add("currentBlog")

// or

// for (let i = 0; i < myArticles.length; i++) {
//   myArticles[i].classList.add("currentBlog");
// }

// For In loops
// for (let foo in lassie) {
//     console.log(lassie[foo]);
// }

// const empireStateBuilding = {
//   stories: 103,
//   height: 1453,
//   address: "350 Fifth Avenue, Manhattan, New York 10118",
//   squareFeet: 2768591,
//   constructionDate: 1931,
//   cost: 40948900,
//   owner: "Empire State Realty Trust",
//   eastWestLength: 424,
//   northSouthLength: 187,
//   architect: "Shreve, Lamb & Harmon"
// };

// console.log(empireStateBuilding);
// console.log(
//   "Stories:",
//   empireStateBuilding.stories,
//   "Height:",
//   empireStateBuilding.height,

//   "Square Feet:",
//   empireStateBuilding.squareFeet,

//   "East/West Length:",
//   empireStateBuilding.eastWestLength,
//   "North/South Length:",
//   empireStateBuilding.northSouthLength
// );

// const empireAddress = "address";
// const empireConstructionDate = "constructionDate";
// const empireCost = "cost";
// const empireOwner = "owner";
// const empireArchitects = "architect";

// console.log(
//   "address:",
//   empireStateBuilding[empireAddress],
//   "Construction Date:",
//   empireStateBuilding[empireConstructionDate],
//   "Cost:",
//   empireStateBuilding[empireCost],
//   "Owner:",
//   empireStateBuilding[empireOwner],
//   "Architects:",
//   empireStateBuilding[empireArchitects]
// );

// const nashvilleSoftwareSchool = {
//   founded: 2012,
//   director: "John Wark",
//   instructors: {
//     fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//     partTime: ["Zoe", "Nathan"]
//   },
//   address: "500 Interstate Blvd. S"
// };

// console.log(nashvilleSoftwareSchool.instructors["partTime"]);
// console.log(nashvilleSoftwareSchool.instructors["fullTime"]);
// console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
// console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

const beatles = {
  albums: [
    "Abbey Road",
    "Sgt Peppers Lonely Heart's Club Band",
    "Revolver",
    "Magical Mystery Tour",
    "Something New"
  ],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
};

//console log Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

for (let i = 0; i < beatles.members.length; i++) {
  if (beatles.members[i].name === "Paul McCartney") {
    console.log(
      `${beatles.members[i].name} was in the Beatles from ${
        beatles.history.formed
      } to ${beatles.history.disbanded}. He was born in ${
        beatles.members[i].birth
      }. He contributed heavily to the ${beatles.albums[3]} album.`
    );
  }
}
//   ${history.disbanded}. He was born in ${members[i].birth}. He contributed heavily to the ${beatles.album[3]}` Album.)
// }

// function sayHello() {
//     console.log("hello")
// }
// sayHello()

// let result = sayHello()
//  function sayHelloName () {
//      returned "Hello, Fred"
//  }

//  function sayHelloName () {return "Hello, Fred"}
// undefined
// sayHelloName()
// "Hello, Fred"
// let greeting = sayHelloName()
// undefined
// greeting
// "Hello, Fred"
// `When I see my freind, I say ${sayHelloName()}`
// "When I see my freind, I say Hello, Fred"
// `When I see my friend, I say ${greeting}`
// "When I see my friend, I say Hello, Fred"
// function createMessage() {
// return `When I see my friend, I say ${sayHelloName}`
// ]
// VM7851:3 Uncaught SyntaxError: Unexpected token ]
// function createMessage() {
// return `When I see my friend, I say ${sayHelloName}`
// }
// undefined
// createMessage()
// "When I see my friend, I say function sayHelloName () {return "Hello, Fred"}"

// function sayHello (name) {
//     return `Hello, ${name}`
// }
// sayHello("Kristen")

// Chicken Monkey Practice Exercise

// function chickenMonkey() {
//   for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//       console.log("ChickenMonkey"); // Only 2, 4, 6 will appear
//     } else if (currentNumber % 7 === 0) {
//       console.log("monkey");
//     } else if (currentNumber % 5 === 0) {
//       console.log("Chicken");
//     } else {
//       console.log(currentNumber);
//     }
//   }
// }
// chickenMonkey();

// you can change the range of numbers by inserting a variable into chickenMonkey(num)

// function chickenMonkey(currentNumber, limit) {
//   for (; currentNumber <= limit; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//       console.log("ChickenMonkey"); // Only 2, 4, 6 will appear
//     } else if (currentNumber % 7 === 0) {
//       console.log("monkey");
//     } else if (currentNumber % 5 === 0) {
//       console.log("Chicken");
//     } else {
//       console.log(currentNumber);
//     }
//   }
// }
// chickenMonkey(50, 125);

// Battle of the Bands Exercise

let bandNumber = 1;

const takeNumber = function(bandName) {
  let count = bandNumber;
  bandNumber++;
  // let bandName = ();
  return count + ` ${bandName}`;

  /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
};

const scum = takeNumber("Galactic Scum");
console.log(scum); // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under); // This should print "2. Underdogs" in the console

// Cookout

const hamburger = {
  name: "Hamburger",
  type: "beef",
  cooked: false
};
const zucchini = {
  name: "Zucchini",
  type: "vegetable",
  cooked: false
};
const chickenBreast = {
  name: "Chicken Breast",
  type: "chicken",
  cooked: false
};
const corn = {
  name: "Corn",
  type: "vegetable",
  cooked: false
};
const steak = {
  name: "Steak",
  type: "beef",
  cooked: false
};

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
}

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
for (let i = 0; i < foods.length; i++) {
  grill(foods[i]);
}
console.log(cookedFood);

const employees = [
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"
  },
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"
  },
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"
  },
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"
  }
];

for (let i = 0; i < employees.length; i++) {
  //  employeesJobs+=
  console.log(`${employees[i].name}'s job title is  ${employees[i].title}`);
}

//  Using a for each loop

employees.forEach(function(employee) {
  console.log(`${employee.name}'s job title is  ${employee.title}`);
});

//  #2) Functions can return a value that we can capture:

// 1. Write a function that takes a string of a dog breed as an argument (like 'border collie')

// 2. Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".

// 3. Execute the function in a way that captures the returned value in a variable.

// 4. Console.log the string "When it comes to pets," plus the returned value of the function.

function printFaveDog(breed) {
  if (breed) {
    return `my favorite dog breed is ${breed}.`;
  } else {
    return "I like cats.";
  }
}

let message = printFaveDog("Aussie/Border Collie mix");
console.log(`When it comes to pets, `, message);

let sad = printFaveDog();
console.log(`When it comes to pets, `, sad);

// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// Use dot notation to access the value of the key "meaning_of_life" in this object
let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
    copies_sold: 14000000,
    formats: ["radio", "TV", "film", "graphic novel"],
    ultimate_answer: {
      meaning_of_life: 42
    }
  }
};
console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`

let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;

console.log(meaning);

// 2) ## An object's properties can be accessed by dot notation or bracket notation

// ```js
let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
};
// ```

// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
console.log(`Our company lawyer is ${employee.name}`);

// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.

console.log(`${employee.name} was hired on ${employee.hire_date}`);

// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.

employee["vacation_days"] = 20;
console.log(employee);
// ```js

let eom = "employee_of_the_month";

// ```

// // 4. Use the variable above to add a new property to `employee`. Set its value to `false`. Should you use dot or bracket notation?
employee[eom] = "false";
console.log(employee);

// #3) ## Objects' keys can contain values of any type, even functions.
// js

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.0,
  insured: true,
  prep: function(action) {
    console.log(`The painter ${action}s the window`);
  }
};

// 1. Add an action that the painter can perform.
// painter.prep = function(action) {

// }
painter.prep("tape");
// 2. Have her take that action by execucting the method you created.
// BONUS:
// Add a method that allows us to add new tools for the painter.
painter.tools.push("tape");
console.log(painter);

// Create an index.html file with a section element with an ID of 'family':
// Loop over this array of objects and insert the names of the family members into `<h3>` tags, and append them to the DOM.

let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
];

//   const createFamily = function(){
//       return `<h3>`
//   }

//   const familyMember = document.querySelector("#family")
//   familyMember.innerHTML = createFamily()

for (let i = 0; i < family.length; i++) {
  document.querySelector("#family").innerHTML += `<h3>${family[i].name}</h3>`;
}

family.forEach(function(person) {
  document.querySelector(`#family`).innerHTML += `<h3>${person.name}</h3>`;
});

//   1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

let fave_Demo = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18 && ages[i] <= 49) {
    fave_Demo.push(ages[i]);
    // console.log(fave_Demo[i])
  }
}
console.log(fave_Demo);

// Another way to complete the exercise above

ages.forEach(function(num) {
  if (num >= 18 && num <= 49) {
  }
});

// 2) Loop over the following array and
// * capitalize 'the'
// * insert a comma after 'teacher'
// * output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];
// let newYodaQuote = []
// for (let i = 0; i < yoda_quote.length; i++) {
//     if ( yoda_quote[i] === [0]) {
//         yoda_quote[i][0].toUpperCase
//     }

// }
// console.log(newYodaQuote)

let newYodaQuote = [];

yoda_quote.forEach(function(word) {
  if (word === "the") {
    word = "The";
  }
  if (word === "teacher") {
    word = "teacher,";
  }
  newYodaQuote.push(word);
});
console.log(`Yoda says, "${newYodaQuote.join(" ")}."`);
