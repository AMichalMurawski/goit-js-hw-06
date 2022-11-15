(() => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

//   function hexToRgb(hex) {
//     return hex
//       .replace(
//         /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
//         (m, r, g, b) => "#" + r + r + g + g + b + b
//       )
//       .substring(1)
//       .match(/.{2}/g)
//       .map((x) => parseInt(x, 16));
//   }

//   function textColor(hex) {
//     let txtColor = "#fff";
//     hexToRgb(hex).forEach((color) => {
//       color > 200 ? (txtColor = "#000") : "";
//     });
//     return txtColor;
//   }

  const btnColor = document.querySelector(".change-color");
  const spanColor = document.querySelector(".color");
  const bodyColor = document.querySelector("body");

  btnColor.addEventListener("click", () => {
    const hexColor = getRandomHexColor();
    spanColor.textContent = `${hexColor}`;
    bodyColor.style.backgroundColor = hexColor;
  });
})();
