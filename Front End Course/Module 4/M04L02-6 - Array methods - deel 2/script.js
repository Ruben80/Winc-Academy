// A Schrijf een JavaScript functie die een bepaald item weet te vinden en retourneren op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

// const superheroes = [
//     {name: "Batman", alter_ego: "Bruce Wayne"}, 
//     {name: "Superman", alter_ego: "Clark Kent"}, 
//     {name: "Spiderman", alter_ego: "Peter Parker"}]
       
//     let obj = superheroes.find( o => o.name === "Spiderman");
//     console.log(obj);
//     // Find Spiderman
//     // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

// const array = [1, 2, 3];
// const doubleArrayValues = array.map(x => x * 2);
// console.log(doubleArrayValues);
// // result should be [2, 4, 6]

// C In een array met integers. Schrijf een JavaScript functie die een checkt of er een integer in de array aanwezig is die groter is dan 10.

// var containsNumberBiggerThan10a = [1, 4, 3, 6, 9, 7, 11] 
// let hasItems1 = containsNumberBiggerThan10a.some((containsNumberBiggerThan10a) => {
//     return containsNumberBiggerThan10a > 10    
// });
// console.log(hasItems1);
//   // result should be true

//   var containsNumberBiggerThan10b = [1,2,1,2,1,2] 
//   let hasItems2 = containsNumberBiggerThan10b.some((containsNumberBiggerThan10b) => {
//       return containsNumberBiggerThan10b > 10    
//   });
//   console.log(hasItems2);
//   // result should be false

// D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

// const isItalyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'] 

// const isItGreat = isItalyInTheGreat7.some((isItalyInTheGreat7) => {
//     return isItalyInTheGreat7
// });
// console.log("Is Italie fantastisch?",(isItGreat));
// // result should be true

// E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruikt .forEach.

// var tenfold = [1, 4, 3, 6, 9, 7, 11];
// for(var i=0; i<tenfold.length; i++) {
// 	//Let's take the constant factor as 2
// 	tenfold[i] = tenfold[i] * 10;
// }
// console.log(tenfold);

// F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

// const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]

// const goodValue = isBelow100.some((isBelow) => {
//     return isBelow100 < 200
// });
//  console.log("Are all prices below 100?",(goodValue));
// // result should be: false

// G Bonus! Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).

// In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method. En echt, gebruik Google.

// const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(bigSum.reduce(reducer));

// // result should be 1118