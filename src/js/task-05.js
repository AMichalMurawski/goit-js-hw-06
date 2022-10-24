(() => {
  const nameInput = document.querySelector("#name-input");
  const nameOutput = document.querySelector("#name-output");

  nameInput.addEventListener("input", changeName);

  function changeName(event) {
    event.currentTarget.value.length > 0
      ? (nameOutput.textContent = event.currentTarget.value)
      : (nameOutput.textContent = "Anonymous");
  }
})();
