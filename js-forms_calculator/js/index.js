console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;
  // --v-- write your code here --v--
  formData = new formData(event.target);
  data = Object.fromEntries(formData);

  let a = parceInt(data.numberA);
  let b = parceInt(data.numberB);

  let addition = document.getElementById("addition");
  let substract = document.getElementById("substraction");
  let multiplication = document.getElementById("multiplication");
  let division = document.getElementById("division");
  if (addition.checked === true) {
    result = add(a, b);
    resultOutput.textContent = result;
  } else if (subtract.checked === true) {
    result = substract(a, b);
    resultOutput.textContent = result;
  } else if (multiplication.checked === true) {
    result = multiply(a, b);
    resultOutput.textContent = result;
  } else if (division.checked === true) {
    result = divide(a, b);
    resultOutput.textContent = result;
  }
  // --^-- write your code here --^--
  console.log(a + b);

  resultOutput.textContent = result;
});
