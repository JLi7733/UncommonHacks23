import * as React from 'react';
import { useState, useEffect } from "react"
import Grid from './components/Grid'
import AutocompleteForm from './AutoComplete';
import { TOTAL_ANIME} from './AutoComplete';

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
  const [allGuesses, setAllGuesses] = useState<number[]>([])
  const [lastGuess, setLastGuess] = useState(-1)
  const [currentGuess_ID, setCurrentGuess] = useState(-1)

  const changeGuess = (newGuess: number) => {
    setCurrentGuess(newGuess)
  }


  if(lastGuess != currentGuess_ID){
    setAllGuesses([...allGuesses, currentGuess_ID])
    setLastGuess(currentGuess_ID)
    console.log(currentGuess_ID)
  }

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
      <AutocompleteForm changeGuess = {changeGuess}></AutocompleteForm>
      <p>You have used {tries}/7 tries</p>
      <Grid guess_id={currentGuess_ID} answer_id={chosenAnime.id} all_guesses={allGuesses} />    
    </div>
  );
}

