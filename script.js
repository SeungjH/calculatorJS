const display = document.getElementById("display");

//Three functions to create: 
//appendToDisplay, calcualte, clearDisplay

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value="error";
  }
}

function clearDisplay() {
  display.value = "";
}

//Add event listeners to the buttons

const buttons = document.querySelectorAll("button");