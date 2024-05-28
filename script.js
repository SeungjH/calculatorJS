const display = document.getElementById("display");

var operatorSet = new Set(["+", "-", "/", "*"]);

var isEqualClicked = false;

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

function handleClick(){
  //does nothing
}
function function1(){
  //resetting screen if user inputs after the result
  if(isEqualClicked === true){
    display.value = "";
    isEqualClicked = false;
  }
}

//if operator is clicked, highlight selected operator, clear display and store value
//if equals is clicked, calculate and display result
function onClick(){
  //handling displaying operators in blank screen
  if(display.value.length > 0 && operatorSet.has(display.value)){
    clearDisplay();
  }
  //handling displaying operators in a row
  //it also should change the operator into the following one
  if(display.value.length > 0 && operatorSet.has(display.value.slice(display.value.length-1, display.value.length)) && operatorSet.has(display.value.slice(display.value.length-2, display.value.length-1))){
    
    let temp = display.value.slice(display.value.length-1, display.value.length);
    display.value = display.value.slice(0, display.value.length-2);
    display.value += temp;
    const button = document.getElementById(temp);
    button.addEventListener('click', handleClick);
  }
}
//resets the display if the previous calcualtion is finished and the user starts another calculation
function resetScreen(){
  isEqualClicked = true;
  //display.addEventListener("input", ());
}

const buttons = document.querySelectorAll("button");