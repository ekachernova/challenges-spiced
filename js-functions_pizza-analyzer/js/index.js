console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  console.log("input pizza size 1: ", pizzaSize1);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  console.log("input pizza size 2: ", pizzaSize2);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  let area1 = Math.PI * (diameter1 / 2) ** 2;
  let area2 = Math.PI * (diameter2 / 2) ** 2;
  let gain = ((area2 - area1) / area1) * 100;
  console.log(gain);
  output.textContent = Math.round(gain);
}

// Task 2

1. Write a function `updatePizzaDisplay` which has two parameters: `pizzaElement` - the queried DOM element of the respective pizza and `newSize` which is the new size of that pizza.
2. Calculate the new display size of the pizza element
  > 💡 The formula is: `newSize / 24 * 100`.
3. Set the width of the `pizzaElement` to this new value.
  > 💡 You can use `pizzaElement.style.width` for that.
  > 💡 The width needs a unit, a simple number is not enough. Don't forget to concat "px" to your calculated number.
4. Call this function in both event listeners and pass in the correct pizza element and the correct pizza size.


function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}
