console.clear();

const startButton = document.querySelector('[data-js="start-button"]');
const toast = document.querySelector('[data-js="toast"]');
const countdown = document.querySelector('[data-js="countdown"]');

let timeoutId;

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  timeoutId = setTimeout(hideToast, 2000);
  toast.classList.remove("toast--hidden");
  countdown.classList.add("countdown--visible");
});

toast.addEventListener("click", () => {
  clearTimeout(timeoutId);
  hideToast();
});

// These actions are in a separate function
// because we need them in two places in our code.
function hideToast() {
  startButton.disabled = false;
  toast.classList.add("toast--hidden");
  countdown.classList.remove("countdown--visible");
}

/**
 * ## Task 1

The hover effect on the start button can still be improved. Let's do that.

Find some rules you like and animate them with transitions.

- Use at least one timing-function
- Assign different durations
- Consider using delays

> Also check out the handout if you have questions!

## Task 2

When you click the start button, a toast appears in the upper left corner. Currently this toast is animated with transitions.

Make it your own!  
Here are 3 options to start with:

### Option 1 - Keep Transitions:

Keep animating the toast with transitions.

### Option 2 - Change Transitions to keyframes:

Change the way to animate the toast and use keyframes instead.

> Is much more versatile to customize, but holds far more pitfalls.

### Option 3 - Add your own logic and css:

Do whatever you want. Can you animate the body's background-color while holding your mouse down on the start-button?

 */
