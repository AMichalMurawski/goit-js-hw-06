(() => {
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

  const listElement = document.querySelector(".gallery");

  function addImageList(images) {
    return images
      .map(
        (image) =>
          `<li><img src="${image.url}" alt="${image.alt}" width="360"/></li>`
      )
      .join("");
  }

  function addListToHtml(list, htmlElement) {
    htmlElement.innerHTML = list;
  }

  function listStyle(list) {
    list.style.listStyleType = "none";
    list.style.display = "flex";
    list.style.flexWrap = "wrap";
    list.style.maxWidth = "800px";
    list.style.gap = "30px";
    list.style.alignItems = "center";
  }

  const imageList = addImageList(images);
  const htmlList = addListToHtml(imageList, listElement);
  const newStyleList = listStyle(listElement);
  
  const liElement = document.querySelectorAll('li');
  
  liElement.forEach(li => li.style.border = "2px solid red");
})();
