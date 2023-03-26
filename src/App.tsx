import * as React from 'react';
<<<<<<< HEAD
import { useState, useEffect } from "react"
import Grid from './components/Grid'
=======
import { useState, useEffect } from "react";
import AutocompleteForm from './AutoComplete';
import { TOTAL_ANIME } from './AutoComplete';
>>>>>>> origin/main

var data = require('./solutions.json')
var allAnimes = []
for(let i = 0;i < TOTAL_ANIME; i ++){
    allAnimes.push({label: data.data[i].node, value: data.data[i].node.id});
}
console.log(allAnimes)

function getRandomNumber(): number {
  return Math.floor(Math.random() * TOTAL_ANIME);
}
const chosenAnime = data.data[getRandomNumber()].node
console.log(chosenAnime.title)

//Maybe not used
const names = chosenAnime.title;
const score = chosenAnime.mean;
const eps = chosenAnime.num_episodes;
const studio = chosenAnime.studios[0].name
const genres = chosenAnime.genres


export default function App() {
  const [tries, setTries] = useState(0);

  if(tries > 7){
    return(
      <div>
      <p>Sorry, you lost</p>
      <p>The solution was {names}</p>
    </div>
    )
  }

  return (
    <div className = "App">
      <label>Guess your anime: </label>
<<<<<<< HEAD
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
      

=======
      <AutocompleteForm></AutocompleteForm>
      <p>You have used {tries}/7 tries</p>    
>>>>>>> origin/main
    </div>
  );
}

