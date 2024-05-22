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
function onClick(){
  //handling displaying operators in blank screen
  if(display.value === ("+" || "-" || "*" || "/")){
    clearDisplay();
  }
  //handling displaying operators in a row
  //it also should change the operator into the following one
  if(display.value.length > 0 && display.value.slice(display.value.length-1, display.value.length) === ("-" || "+" || "*" || "/") && display.value.slice(display.value.length-2, display.value.length-1) === ("-" || "+" || "*" || "/")){
    let temp = display.value.slice(display.value.length-1, display.value.length);
    display.value = display.value.slice(0, display.value.length-2);
    display.value += temp;
    const button = document.getElementById(temp);
    button.addEventListener('click', handleClick);
  }
}
//Add event listeners to the buttons

const buttons = document.querySelectorAll("button");