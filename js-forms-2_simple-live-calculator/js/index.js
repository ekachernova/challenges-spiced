console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (e) => {
  e.preventDefault();
  const firstNumber = firstInput.value;
  const secondNumber = secondInput.value;

  let multiplyNumbers = firstNumber * secondNumber;
  console.log(multiplyNumbers);

  result.textContent = multiplyNumbers;
});

secondInput.addEventListener("input", (e) => {
  e.preventDefault();
  const firstNumber = firstInput.value;
  const secondNumber = secondInput.value;

  let multiplyNumbers = firstNumber * secondNumber;
  console.log(multiplyNumbers);

  result.textContent = multiplyNumbers;
});
