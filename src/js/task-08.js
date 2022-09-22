// Alert z upomnieniem
const bodyDiv = document.querySelector("body");
  const alertConteiner = `<div class="alert__background"><div class="alert__div"><p>Please fill in all the fields!</p><button class="alert__btn" type="button">OK</button></div></div>`;
  bodyDiv.innerHTML += alertConteiner;
  bodyDiv.style.position="relative";
  const alertBgd = document.querySelector(".alert__background");
  alertBgd.style.position ="fixed";
  alertBgd.style.top="0";
  alertBgd.style.left="0";
  alertBgd.style.width="100vw";
  alertBgd.style.height="100vh";
  alertBgd.style.display="none";
  alertBgd.style.justifyContent="center"
  alertBgd.style.alignItems="center"
  const alertDiv = document.querySelector(".alert__div");
  alertDiv.style.margin="auto";
  alertDiv.style.padding="10px";
  alertDiv.style.backgroundColor="red";
  alertDiv.style.color="white";
  alertDiv.style.textAlign = "center";
// Potwierdzenie odczytania alertu
  const alertBtn = document.querySelector(".alert__btn");
  alertBtn.addEventListener("click", (event) => {alertBgd.style.display ="none"})
// Przesłanie formularza
const frm = document.querySelector(".login-form");
frm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alertBgd.style.display="flex";
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
