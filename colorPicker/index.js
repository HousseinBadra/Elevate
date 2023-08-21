const inputs = document.querySelectorAll("input");
let red = 127;
let green = 127;
let blue = 127;

window.onload = () => {
  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
};

inputs.forEach((elem) => {
  elem.addEventListener("input", () => {
    const value = Math.floor((elem.value / 100) * 255);
    if (elem.classList.contains("red")) {
      red = value;
    } else if (elem.classList.contains("green")) {
      green = value;
    } else {
      blue = value;
    }
    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
  });
});
