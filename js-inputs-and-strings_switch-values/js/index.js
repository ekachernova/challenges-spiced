/*

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

const secondInput = document.querySelector('[data-js="second-input"]');
const switchButton = document.querySelector('[data-js="switch-button"]');

switchButton.addEventListener("click", () => {
  if (firstInput.value === firstInput.value.toUpperCase()) {
    firstInput.value = firstInput.value.toLowerCase();
  } else {
    firstInput.value = firstInput.value.toUpperCase();
  }
  console.log(firstInput.value);
});

switchButton.addEventListener("click", () => {
  if (secondInput.value === secondInput.value.toUpperCase()) {
    secondInput.value = secondInput.value.toLowerCase();
  } else {
    secondInput.value = secondInput.value.toUpperCase();
  }
  console.log(secondInput.value);
});