(() => {
  const categories = document.querySelector("#categories");
  const liItems = categories.querySelectorAll(".item");

  function addItem(allElements) {
    const elementsTable = [];
    allElements.forEach((element) => {
      elementsTable.push(element);
    });
    return elementsTable;
  }

  class categoryInformation {
    constructor({ title, categoryLength }) {
      this.title = title;
      this.categoryLength = categoryLength;
    }
  }

  function addInformationToCategory(elements) {
    const category = [];
    for (let i = 0; i < elements.length; i += 1) {
      category.push(
        new categoryInformation({
          title: elements[i].querySelector("h2").textContent,
          categoryLength: elements[i].querySelectorAll("li").length,
        })
      );
    }
    return category
  }

  const liItem = addItem(liItems);
  const category = addInformationToCategory(liItem);

  console.log(`Number of categories: ${liItem.length}`);
  for (let i = 0; i < category.length; i += 1) {
    console.log("");
    console.log(`Category: ${category[i].title}`);
    console.log(`Elements: ${category[i].categoryLength}`);
  }
})();