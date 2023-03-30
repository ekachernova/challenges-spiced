// Store the cards in a global state
import { cards } from "./utilis/cards.js";
import { Header } from "./components/Header/header.js";
import { Form } from "./components/Form/form.js";
// import { Bookmark } from "./components/Bookmark/bookmark.js";
// import { Card } from "./components/Card/card.js";
import { CardList } from "./components/CardList/CardList.js";

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
