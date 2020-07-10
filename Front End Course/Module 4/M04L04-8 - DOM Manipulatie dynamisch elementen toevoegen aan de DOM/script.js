// 1 Maak een event-listener vast aan de buttons

console.log("Hij doet het!");

const animalSpotted = event => {
  console.log("spotted:", event.target.textContent);
  const spottedAnimal = event.target.textContent;
  // const listItem = document.createElement("li");
  // listItem.appendChild(document.createTextNode(spottedAnimal));
  const list = document.getElementById("spotted-animals-list");
  // list.appendChild(listItem);
};

document.addEventListener("DOMContentLoaded", function() {
  const animalButtons = document.querySelectorAll(".big-five-button");
  animalButtons.forEach(function(animalButton) {
    animalButton.addEventListener("click", animalSpotted);
  });
});




// 2 Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. Check dit met een console.log.

// 3 Zorg dat het click event wordt doorgegeven aan deze functie.

// 4  Zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. Check dit met console.log. De uitkomst die je wilt zien in de console wanneer je klikt is: Leopard / Lion / Elephant / Rhino of Buffalo.

// 5 Creëer een nieuw list-item met JavaScript met de bovenstaande waarde (namelijk het dier waar je op hebt geklikt.

// 6 Selecteer het parent-element waar je dit nieuwe list-item aan vast wilt maken (de spotted animals list).

// 7 Maak het nieuwe list-item vast aan het parent-element.
