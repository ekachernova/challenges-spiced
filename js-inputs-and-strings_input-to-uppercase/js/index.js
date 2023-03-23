console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element


*/

let inputElement = document.querySelector('[data-js="first-input"]');
let buttonElement = document.querySelector('[data-js="button-uppercase"]');

buttonElement.addEventListener("click", (evt) => {
  evt.preventDefault();
  const dataToUpper = inputElement.value;
  const newValue = dataToUpper.toUpperCase();
  console.log(newValue);
});
