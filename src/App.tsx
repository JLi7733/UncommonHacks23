import * as React from 'react';
import { useState, useEffect } from "react"
require 
import Grid from './components/Grid'

var data = require('./solutions.json')

function getRandomNumber(): number {
  return Math.floor(Math.random() * 10);
}
const anime = data.data[getRandomNumber()]
console.log("Hello")
console.log(anime.node.title)
console.log(anime)

export default function App() {
  const [names] = useState([anime.node.title]);
  const [previousGuesses, setPreviousGuesses] = useState([""]);
  const [guess, setGuess] = useState("");
  const [lastGuess, setLastGuess] = useState(guess);
  const [tries, setTries] = useState(0);

  function guessInput(event: { target: { value: React.SetStateAction<string>; }; }){
    setGuess(event.target.value);
  };

  function onClick(){
    setLastGuess(guess);
    setTries(tries + 1);
    setPreviousGuesses([...previousGuesses, guess])
  };

  if(names.includes(lastGuess)){
    return(
     <div>
      <p>You Win!</p>
      <p>The solution was {names[0]}</p>
     </div>
    )
  }
  if(lastGuess === "debug"){
    return(
      <div><p>Secret</p></div>
    )
  }

  if(tries > 7){
    return(
      <div>
      <p>Sorry, you lost</p>
      <p>The solution was {names[0]}</p>
    </div>
    )
  }

  return (
    <div className = "App">
      <label>Guess your anime: </label>
      <input type = "text" 
        id = "guess" 
        value = {guess} 
        onChange={guessInput}>
      </input>
      <button onClick={onClick}>Enter</button>
      <p>You have guessed {tries} times</p>
      <Grid guesses={[...previousGuesses, guess]} currentGuess={guess} turn={tries} />
      <figure>Previous Guesses
        <ul>
          {previousGuesses.map((previousGuesses, index) => (
            <li key = {index}>{previousGuesses}</li>
          ))}
        </ul>
      </figure>
      

    </div>
  );
}

