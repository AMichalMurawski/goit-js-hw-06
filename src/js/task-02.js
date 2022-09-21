const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liItem = [];
for (let i = 0; i < ingredients.length; i += 1) {
  liItem[i] = document.createElement("li");
  liItem[i].textContent = ingredients[i];
  liItem[i].classList.add("item");
}

const documentFragment = document.createDocumentFragment();
liItem.forEach((element) => documentFragment.appendChild(element));

const ulIngredients = document.querySelector("#ingredients");
ulIngredients.append(documentFragment);
