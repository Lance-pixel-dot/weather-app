function changeBackgroundColor(weatherCondition) {
  if (weatherCondition == 100) {
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
  } else if (weatherCondition == 0) {
    document.body.style.backgroundColor = "skyBlue";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "rgb(162, 166, 220)";
    document.body.style.color = "black";
  }
}

export { changeBackgroundColor };
