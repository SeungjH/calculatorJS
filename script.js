const display = document.getElementById("display");

//Three functions to create: 
//appendToDisplay, calcualte, clearDisplay

function appendToDisplay(input) {
  display.textContent += input;
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Error";
  }
}

function clearDisplay() {
  display.textContent = "";
}

//Add event listeners to the buttons

const buttons = document.querySelectorAll("button");