const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const changeName = (event) => {
  if (event.currentTarget.value.length > 0) {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", changeName);
