const counter = document.querySelector("#value");
let counterValue = counter.textContent;
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');

decrementValue.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

incrementValue.addEventListener("click", () => {
  counterValue = +counterValue + 1;
  counter.textContent = counterValue;
});
