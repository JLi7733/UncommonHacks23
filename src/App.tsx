import * as React from 'react';
import { useState, useEffect } from "react"
import Grid from './components/Grid'

var data = require('./solutions.json')

const allTitles = []
for(let i = 0;i < 10; i ++){
  allTitles.push([data.data[i].node.title])
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 10);
}
const anime = data.data[getRandomNumber()]
console.log(anime.node.title)
console.log(anime)

const names = [anime.node.title, anime.node.alternative_titles.en];
const score = anime.node.mean;
const eps = anime.node.num_episodes;
const studio = anime.node.studios[0].name
const genres = anime.node.genres

console.log(names)
console.log(score)
console.log(eps)
console.log(studio)
console.log(genres)

export default function App() {
  const [previousGuesses, setPreviousGuesses] = useState(["Pingu"]);
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
      <p>The solution was {names[0]}/{names[1]}</p>
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
      <p>The solution was {names[0]}/{names[1]}</p>
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
      <p>You have used {tries}/7 tries</p>
      <Grid guesses={previousGuesses} currentGuess={guess} turn={tries} />
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

