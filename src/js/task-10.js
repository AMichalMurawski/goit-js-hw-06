function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const conteiner = document.querySelector("#boxes");
conteiner.style.paddingTop = "10px";
conteiner.style.display = "flex";
conteiner.style.flexDirection = "column";
conteiner.style.gap = "10px";

const boxes = [];
function createBoxes(amount) {
  if (isNaN(amount)) {
    console.log("This value is not number!");
  } else if (+amount > boxes.length) {
    for (let i = boxes.length; i < amount; i += 1) {
      boxes[i] = document.createElement("div");
      boxes[i].style.width = 30 + i * 10 + "px";
      boxes[i].style.height = 30 + i * 10 + "px";
      boxes[i].style.backgroundColor = getRandomHexColor();
    }

    const allBoxes = document.createDocumentFragment();
    boxes.forEach((box) => allBoxes.appendChild(box));
    conteiner.append(allBoxes);
  } else if (amount < boxes.length) {
    const total = boxes.length - 1;
    for (let i = total; i >= amount; i -= 1) {
      boxes[i].remove();
      boxes.pop();
    }
  }
}

function destroyBoxes() {
  createBoxes(0);
  controlNumber.value = "";
}

const controls = document.querySelector("#controls");
const controlNumber = controls.querySelector("input");
const controlBtnCreate = controls.querySelector("[data-create]");
const controlBtnDestroy = controls.querySelector("[data-destroy]");

controlBtnCreate.addEventListener("click", (event) =>
  createBoxes(controlNumber.value)
);
controlBtnDestroy.addEventListener("click", (event) => destroyBoxes());
