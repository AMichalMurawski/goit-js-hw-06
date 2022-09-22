const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const markup = images.map((image) =>
      `<li><img src="${image.url}" alt="${image.alt}" width="360"/></li>`
  ).join("");

// const markup = [];
// images.forEach((image) =>
//   markup.push(`<li><img src="${image.url}" alt="${image.alt}" /></li>`)
// );

list.insertAdjacentHTML("beforeend", markup);
list.style.listStyleType = "none";
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.maxWidth = "800px";
list.style.gap = "30px";
list.style.alignItems = "center";
