console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideDivSucces() {
  const divSuccesMessage = document.querySelector('[data-js="success"]');
  divSuccesMessage.setAttribute("hidden", "");
}

function showDivSucces() {
  const divSuccesMessage = document.querySelector('[data-js="success"]');
  divSuccesMessage.removeAttribute("hidden");
}

//in order to hide error message by reloading the page
hideTosError();
hideDivSucces();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const checkbox = form.tos.checked;
  if (checkbox === true) {
    // alert("Form submitted");
    showDivSucces();
    divSuccesMessage.textContent = hideTosError();
    // eslint-disable-next-line no-alert
  } else {
    return showTosError();
  }

  // --^-- write your code here --^--
});
//in order to hide an error message by clicking on checkbox
tos.addEventListener("change", () => {
  const checkbox = form.tos.checked;
  if (checkbox === true) {
    return hideTosError();
  } else {
    hideDivSucces();
  }
});
