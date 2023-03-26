import * as React from 'react';
import { useState, useEffect } from "react";
import autocomplete from './AutoComplete';
import AutocompleteForm from './AutoComplete';

var data = require('./solutions.json')

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
      <AutocompleteForm></AutocompleteForm>
      <p>You have used {tries}/7 tries</p>
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

