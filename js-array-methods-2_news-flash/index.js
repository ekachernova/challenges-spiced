import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((card) =>
  card.categories.includes("politics")
);

console.log("article politics ", filteredNews);

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

sortedNews.sort((a, b) => {
  const lengthA = a.body.length;
  const lengthB = b.body.length;
  if (lengthA > lengthB) {
    return 1;
  } else if (lengthA < lengthB) {
    return -1;
  }
  return 0;
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
