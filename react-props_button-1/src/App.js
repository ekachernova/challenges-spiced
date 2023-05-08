import React from "react";
import "./styles.css";

export default function App() {
  function clickButton() {
    console.log("I'm clicked!");
  }
  
  return (
    <Button 
    color="#009FBD" 
    disabled = {false}
    text="First button"
    backgroundColor = "#F9E2AF"
    clickButton ={clickButton}
    radius = "15px"
    height = "150px"
    width = "300px"

    />
  )
}

export const Button = ({color,disabled,text,backgroundColor,clickButton,radius,height,width}) => {
  return (
    <button
    onClick={clickButton}
    disabled={disabled} 
    style={{
      color: color,
      height: height,
      width: width,
      backgroundColor: backgroundColor,
      borderRadius: radius
    }}
  >
      {text}
    </button>
  )

}