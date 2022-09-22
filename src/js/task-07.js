const inputSize = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

inputSize.addEventListener("click", () => {
  spanText.style.fontSize=+inputSize.value + "px";
});
