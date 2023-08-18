let expression = "";

const buttons = document.querySelectorAll(".row button");
const screen = document.querySelector(".screen");

buttons.forEach((elem) => {
  elem.addEventListener("click", () => {
    const textContent = elem.textContent;
    switch (textContent) {
      case "AC":
        expression = "";
        break;
      case "D":
        if (expression.length > 0) {
          expression = expression.slice(0, expression.length - 1);
        }
        break;
      case "=":
        expression = eval(expression);
        break;
      default:
        expression += textContent;
        break;
    }
    screen.textContent = expression;
  });
});
