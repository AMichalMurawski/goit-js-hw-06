const categories = document.querySelector("#categories");
const liItems = categories.querySelectorAll(".item");

const liItem = [];
liItems.forEach((element) => {
  liItem.push(element);
});

class categoryInformation {
  constructor({ title, categoryLength }) {
    this.title = title;
    this.categoryLength = categoryLength;
  }
}
const category = [];
for (let i = 0; i < liItem.length; i += 1) {
  category.push(
    new categoryInformation({
      title: liItem[i].querySelector("h2").textContent,
      categoryLength: liItem[i].querySelectorAll("li").length,
    })
  );
}

console.log(`Number of categories: ${liItem.length}`);
for (let i = 0; i < category.length; i += 1) {
  console.log("");
  console.log(`Category: ${category[i].title}`);
  console.log(`Elements: ${category[i].categoryLength}`);
}
