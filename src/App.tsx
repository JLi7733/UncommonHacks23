import * as React from 'react';
import { useState, useEffect } from "react"

export default function App() {
  const [solution, setSolution] = useState("FMA");
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

  if(lastGuess === solution){
    return(
     <div>
      <p>You Win!</p>
      <p>The solution was {solution}</p>
     </div>
    )
  }

  if(tries > 7){
    return(
      <div>
      <p>Sorry, you lost</p>
      <p>The solution was {solution}</p>
    </div>
    )
  }

  return (
    <div className = "App">
      <p>Anime Wordle</p>
      <label>Guess your anime: </label>
      <input type = "text" 
        id = "guess" 
        value = {guess} 
        onChange={guessInput}>
      </input>
      <button onClick={onClick}>Enter</button>
      <p>You have guessed {tries} times</p>
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

