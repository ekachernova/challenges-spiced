import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function addPerson() {
    setPeople(people+1)
  }

  function removePerson() {
    if (people <= 0){
      return
    }
    setPeople(people-1)
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onPlus = {addPerson} onMinus = {removePerson}/>
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
