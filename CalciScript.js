let display = document.getElementById("display");
let result = "";

function appendToDisplay(value) {
  result += value;
  display.value = result;
}

function clearDisplay() {
  result = "";
  display.value = "";
}

function calculate() {
  try {
    result = eval(result);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function backspace() {
  result = result.slice(0, -1); // Remove the last character
  display.value = result;
}
