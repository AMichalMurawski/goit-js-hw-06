(() => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const conteiner = document.querySelector("#boxes");
  flexStyle(conteiner);

  //HTML elements
  const controls = document.querySelector("#controls");
  const controlNumber = controls.querySelector("input");
  const controlBtnCreate = controls.querySelector("[data-create]");
  const controlBtnDestroy = controls.querySelector("[data-destroy]");

  //event listeners
  controlBtnCreate.addEventListener("click", (event) =>
    createBoxes(controlNumber.value)
  );
  controlBtnDestroy.addEventListener("click", (event) =>
    destroyBoxes(controlNumber)
  );

  //functions to create and destroy boxes
  const boxes = [];
  function createBoxes(amount) {
    if (isNaN(amount) || amount < 0) {
      wrongAmount();
    } else if (+amount > boxes.length) {
      addBoxes(amount);
    } else if (+amount < boxes.length) {
      removeBoxes(amount);
    }
  }

  function destroyBoxes(amountInput) {
    createBoxes(0);
    amountInput.value = "";
  }

  //subfunctions to create and destroy boxes
  function wrongAmount() {
    console.log("This value is not a positive number!");
  }

  function boxesStyle(amount) {
    for (let i = boxes.length; i < amount; i += 1) {
      boxes[i] = document.createElement("div");
      boxes[i].style.width = 30 + i * 10 + "px";
      boxes[i].style.height = 30 + i * 10 + "px";
      boxes[i].style.backgroundColor = getRandomHexColor();
    }
  }

  function addBoxes(amount) {
    boxesStyle(amount);
    const allBoxes = document.createDocumentFragment();
    boxes.forEach((box) => allBoxes.appendChild(box));
    conteiner.append(allBoxes);
  }

  function removeBoxes(amount) {
    const total = boxes.length - 1;
    for (let i = total; i >= amount; i -= 1) {
      boxes[i].remove();
      boxes.pop();
    }
  }

  //css styles
  function flexStyle(element) {
    element.style.paddingTop = "10px";
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.gap = "10px";
  }
})();
