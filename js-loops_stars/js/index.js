console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  console.log(filledStars);
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let i = 1; i < 6; i++) {
    const emptyStar = document.createElement("img");
    if (filledStars > i) {
      emptyStar.setAttribute("src", "./assets/star-filled.svg");
    } else {
      emptyStar.setAttribute("src", "./assets/star-empty.svg");
    }
    emptyStar.addEventListener("click", () => {
      console.log("clicked on a star");
      renderStars(i);
      // console.log(i);
    });
    starContainer.append(emptyStar);
  }

  //--v-- your code here --v--

  //--^-- your code here --^--
}

renderStars();
