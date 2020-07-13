console.log("Hij doet het!");

let animalSpotted = (event) => {
  console.log("spotted:", event.target.innerHTML);
  let spottedAnimal = event.target.innerHTML;
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(spottedAnimal));
  let newLiItem = document.getElementById("spotted-animals-list");
  newLiItem.appendChild(newLi);
};

let removeFirstItem = () => {
  let firstItem = document.getElementById("spotted-animals-list").firstElementChild;
  console.log(firstItem)
  firstItem.remove();
};

let removeAll = () => {
  let allItems = document.getElementById("spotted-animals-list").remove();
};

let bigFiveButtonClick = document.querySelectorAll(".big-five-button");
bigFiveButtonClick.forEach(function (bigFiveButtonClick) {
  bigFiveButtonClick.addEventListener("click", animalSpotted);
});

let removeFirstItemButton = document.getElementById("remove-first-item-button");
removeFirstItemButton.addEventListener("click", removeFirstItem);

let removeAllButons = document.getElementById("remove-all-button");
removeAllButons.addEventListener("click", removeAll);

// Deel 1 Elementen toevoegen aan de DOM

//  1 Maak een event-listener vast aan de buttons

// 2 Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. Check dit met een console.log.

// 3 Zorg dat het click event wordt doorgegeven aan deze functie.

// 4  Zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. Check dit met console.log. De uitkomst die je wilt zien in de console wanneer je klikt is: Leopard / Lion / Elephant / Rhino of Buffalo.

// 5 Creëer een nieuw list-item met JavaScript met de bovenstaande waarde (namelijk het dier waar je op hebt geklikt.

// 6 Selecteer het parent-element waar je dit nieuwe list-item aan vast wilt maken (de spotted animals list).

// 7 Maak het nieuwe list-item vast aan het parent-element.

// Deel 2 1 element verwijderen uit de DOM

// Opdracht: Wanneer ik als gebruiker op de "remove the first item" knop klik wordt de eend die ik op mijn tocht naar het vliegveld heb gespot verwijderd (het is toch een beetje een vreemde eend in dit lijstje van de big five). De gebruiker kan op deze knop blijven klikken, telkens wordt het eerste item verwijderd.

// Maak een eventlistener vast aan de button
// Maak een functie vast aan de eventlistener
// In de functie: selecteer de eend (het element)
// selecteer ook de parent
// gebruik parent.removeChild(child).
// Alternatief: Verwijder het element met ChildNode.remove()

// Deel 3 - Meerdere element verwijderen uit de DOM

// Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.

// Todolist:

//     Maak een eventlistener vast aan de button
//     Maak een functie vast aan de eventlistener
//     In de functie: selecteer de parent
//     Verwijder alle kinderen van de parent
//      De simpele manier: set de innerHTML van de parent naar een empty string
//      De chique manier: selecteer de parent en gebruik een loop om elk element 1 voor 1 te verwijderen met .remove() of met .removeChild()

// oplossing

// console.log("test of mijn javascript werkt");

// const animalSpotted = event => {
//   console.log("spotted:", event.target.textContent);
//   const spottedAnimal = event.target.textContent;
//   const listItem = document.createElement("li");
//   listItem.appendChild(document.createTextNode(spottedAnimal));
//   const list = document.getElementById("spotted-animals-list");
//   list.appendChild(listItem);
// };

// const removeFirstItem = () => {
//   const firstItem = document.getElementById("spotted-animals-list").firstChild;
//   firstItem.remove();
// };

// const removeAll = () => {
//   const spottedAnimalsList = document.getElementById("spotted-animals-list");
//   spottedAnimalsList.innerHTML = "";
// };

// document.addEventListener("DOMContentLoaded", function() {
//   const animalButtons = document.querySelectorAll(".big-five-button");
//   animalButtons.forEach(function(animalButton) {
//     animalButton.addEventListener("click", animalSpotted);
//   });

//   const removeFirstItemButton = document.getElementById(
//     "remove-first-item-button"
//   );
//   removeFirstItemButton.addEventListener("click", removeFirstItem);

//   const removeAllButton = document.getElementById("remove-all-button");
//   removeAllButton.addEventListener("click", removeAll);
// });
