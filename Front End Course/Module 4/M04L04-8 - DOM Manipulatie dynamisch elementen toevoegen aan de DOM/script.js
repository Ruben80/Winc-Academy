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
  let firstItem = document.getElementById("spotted-animals-list").firstChild;
  firstItem.remove();
};

let removeAll = () => {
  let allItems = document.getElementById("spotted-animals-list");
  allItems.innerHTML = "";
};

let bigFiveButtonClick = document.querySelectorAll(".big-five-button");
bigFiveButtonClick.forEach(function (bigFiveButtonClick) {
  bigFiveButtonClick.addEventListener("click", animalSpotted);
});

let removeFirstItemButton = document.getElementById("remove-first-item-button");
removeFirstItemButton.addEventListener("click", removeFirstItem);

let removeAllButons = document.getElementById("remove-all-button");
removeAllButons.addEventListener("click", removeAll);