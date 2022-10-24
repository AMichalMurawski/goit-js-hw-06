(() => {
  // Alert
  const bodyDiv = document.querySelector("body");
  // --alert in html
  const alertHtml = `<div class="alert__background"><div class="alert__div"><p>Please fill in all the fields!</p><button class="alert__btn" type="button">OK</button></div></div>`;
  addAlertInParent(alertHtml, bodyDiv);
  // --alert css styles
  relativeStyle(bodyDiv);
  const alertBgd = document.querySelector(".alert__background");
  backgroundStyle(alertBgd);
  const alertDiv = document.querySelector(".alert__div");
  alertStyle(alertDiv);
  // --is alert read?
  const alertBtn = document.querySelector(".alert__btn");
  alertBtn.addEventListener("click", (event) => {
    alertBgd.style.display = "none";
  });

  // Sending form
  const loginData = document.querySelector(".login-form");
  const user = {};
  loginData.addEventListener("submit", submitForm);

  function submitForm(event) {
    event.preventDefault();

    const {
      elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      return (alertBgd.style.display = "flex");
    }

    user[email.name] = email.value;
    user[password.name] = password.value;

    console.log(user);

    event.currentTarget.reset();
  }

  // Functions for alert
  function addAlertInParent(alert, parent) {
    parent.innerHTML += alert;
  }

  function relativeStyle(element) {
    element.style.position = "relative";
  }

  function backgroundStyle(element) {
    element.style.position = "fixed";
    element.style.top = "0";
    element.style.left = "0";
    element.style.width = "100vw";
    element.style.height = "100vh";
    element.style.display = "none";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
  }

  function alertStyle(element) {
    element.style.margin = "auto";
    element.style.padding = "10px";
    element.style.backgroundColor = "red";
    element.style.color = "white";
    element.style.textAlign = "center";
  }
})();
