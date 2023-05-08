import React from "react";
import "./styles.css";

export default function App() {
  return <Article/>;
}

function Article() {
  return (<article className='article__title'>
    <label htmlFor="input" >This is input</label>
    <input id="input" name="name"></input>
    <a className ='article__link' href="https://en.wkipedia.org/wiki/Vincent_van_Gogh">Whould you like to know something about Van Gogh?
      </a>

  </article>
  )
}