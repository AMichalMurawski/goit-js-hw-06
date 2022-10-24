(() => {
  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  function newList(itemsTable) {
    const newItem = [];
    for (let i = 0; i < itemsTable.length; i += 1) {
      newItem[i] = document.createElement("li");
      newItem[i].textContent = itemsTable[i];
      newItem[i].classList.add("item");
    }
    return newItem;
  }

  function newHtmlList(listItems) {
    const documentFragment = document.createDocumentFragment();
    listItems.forEach((element) => documentFragment.appendChild(element));
    return documentFragment;
  }

  function addListToHtml(htmlList, htmlElement) {
    htmlElement.append(htmlList);
  }

  const liItem = newList(ingredients);
  const listOfIngredients = newHtmlList(liItem);
  const ulIngredients = document.querySelector("#ingredients");
  addListToHtml(listOfIngredients, ulIngredients);
})();
