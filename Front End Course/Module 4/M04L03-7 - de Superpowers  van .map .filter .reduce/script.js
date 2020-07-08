const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// 1 Maak een array van alle superhelden namen
// const allHeroesNames = superheroes.map(function (superheroes) {
//     return superheroes.name;
// });

// console.log(allHeroesNames);

// 2 Maak een array van alle "lichte" superhelden (< 190 pounds)

// const heroWeightLess190 = superheroes.filter((superhero190) => {
//     return superhero190.weight < 190
// });

// console.log(heroWeightLess190);

// 3 Maak een array met de namen van de superhelden die 200 pounds wegen

// const heroWeight200 = superheroes.filter((superhero200) => {
//     return superhero200.weight == 200
// });

// console.log(heroWeight200);

// 4 Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

// const firstAppear = superheroes.map(function (superheroes) {
//     return superheroes.first_appearance;
// });

// console.log(firstAppear);

// 5 Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.

// const dcCommics = superheroes.filter((superheroDc) => {
//   return superheroDc.publisher == "DC Comics"
// });

// console.log(dcCommics);

// const marvel = superheroes.filter((superheroMarvel) => {
//     return superheroMarvel.publisher == "Marvel Comics"
//   });

//   console.log(marvel);

// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?

// const dcCommics = superheroes.filter((superheroDc) => {
//   return superheroDc.publisher == "DC Comics"
// });

// const allHeroesWeight = dcCommics.map(function (superheroes) {
//   return superheroes.weight;
// });
// let allHeroesAllWeight = allHeroesWeight;

// let filtered = allHeroesAllWeight.filter(function (value) {
//   return value >= 0;
// });

// var a = filtered
// var parced = a.map(function (x) {
//   return parseInt(x, 10);
// });

// const bigSum = parced;
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log ("The weigt of all DC Commics heroes is:",(bigSum.reduce(reducer)), "pounds.");

// 7 Doe hetzelfde met alle superhelden van Marvel Comics

// const marvel = superheroes.filter((superheroMarvel) => {
//   return superheroMarvel.publisher == "Marvel Comics";
// });

// const allHeroesWeight = marvel.map(function (superheroes) {
//   return superheroes.weight;
// });
// let allHeroesAllWeight = allHeroesWeight;

// let filtered = allHeroesAllWeight.filter(function (value) {
//   return value >= 0;
// });

// var a = filtered;
// var parced = a.map(function (x) {
//   return parseInt(x, 10);
// });

// const bigSum = parced;
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(
//   "The weigt of all Marvel heroes is:",
//   bigSum.reduce(reducer),
//   "pounds."
// );

// 8 Bonus: zoek de zwaarste superheld!

// const allHeroesWeight = superheroes.map(function (superheroes) {
//   return superheroes.weight;
// });
// let allHeroesAllWeight = allHeroesWeight;

// let filtered = allHeroesAllWeight.filter(function (value) {
//   return value >= 0;
// });

// let maxWeight = Math.max(...filtered);
// console.log("maxWeight);
