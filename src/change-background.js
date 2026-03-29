const container = document.querySelector(".container");

function changeBackgroundColor(weatherCondition) {
  if (weatherCondition == 100) {
    document.body.style.background = "linear-gradient(135deg, #4a4a4a, #7a7a7a, #a0a0a0)";
    document.body.style.color = "white";
    container.style.borderColor = "#2a2a2a";
  } else if (weatherCondition == 0) {
    document.body.style.background = "linear-gradient(135deg, #87CEEB, #4FC3F7, #ffffff)";
    document.body.style.color = "black";
    container.style.borderColor = "#4FC3F7";
  } else {
    document.body.style.background = "linear-gradient(135deg, #a2a6dc, #b8bce8, #d0d4f0)";
    document.body.style.color = "black";
    container.style.borderColor = "#a2a6dc";
  }
}

export { changeBackgroundColor };
