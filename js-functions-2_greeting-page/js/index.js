console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const date = new Date().getHours();
  if (date >= 6 && date <= 12) {
    return "Good morning";
  } else if (date >= 13 && date <= 18) {
    return "Good afternoon";
  } else if (date >= 19 && date <= 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

function getDayColor() {
  // Code here
  const day = new Date().getDay();
  if (day === "monday") {
    return "darkgray";
  } else if (day === "satuday" || day === "sunday") {
    return "hotpink";
  } else {
    return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
