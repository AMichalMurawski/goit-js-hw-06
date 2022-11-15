(() => {
  const inputSize = document.querySelector("#font-size-control");
  const spanText = document.querySelector("#text");
  
  inputSize.value = 16;
  inputSize.addEventListener("input", () => {
    spanText.style.fontSize = +inputSize.value + "px";
  });
})();
