console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
/**
 * This page shows an example of a social media post. Your task is to replicate the social media post with JavaScript. Use document.createElement() to generate all HTML elements separately.

Don't use .innerHTML to create the HTML in one instance, but use multiple calls of document.createElement() instead.

The index.html demonstrates the required HTML tags, structure and class names.

Append the second social media post to the body. Don't forget to add the event listener to the like button. You can use the function handleLikeButtonClick for the event listener.

 */
let newArticle = document.createElement("article");
newArticle.classList.add("post");
let paragraph = document.createElement("p");
paragraph.classList.add("post__content");
paragraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newArticle.append(paragraph);

let footer = document.createElement("footer");
// console.log(footer);
footer.classList.add("post__footer");
newArticle.append(footer);

let userName = document.createElement("span");
userName.classList.add("post__username");
userName.textContent = "@username";
footer.append(userName);

let button = document.createElement("button");
button.classList.add("post__button");
button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button");
button.innerText = "♥ Like";
footer.append(button);

button.addEventListener("click", handleLikeButtonClick);

document.body.append(newArticle);
