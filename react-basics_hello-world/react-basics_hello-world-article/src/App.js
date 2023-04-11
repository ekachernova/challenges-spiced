import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle/>;
}

function HelloWorldArticle() {
  return (<article>
    <h1>Headline</h1>
    <p>This article is about .....</p>
    <p>This another part of the article </p>
  </article>)
}
