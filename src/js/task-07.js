(() => {
  const inputSize = document.querySelector("#font-size-control");
  const spanText = document.querySelector("#text");
  
  inputSize.value = 16;
  console.log(inputSize.value);
  inputSize.addEventListener("input", () => {
    spanText.style.fontSize = +inputSize.value + "px";
  });
})();
