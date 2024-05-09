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

//if operator is clicked, highlight selected operator, clear display and store value
//if equals is clicked, calculate and display result
function onClickOperator{
  
}
//Add event listeners to the buttons

const buttons = document.querySelectorAll("button");