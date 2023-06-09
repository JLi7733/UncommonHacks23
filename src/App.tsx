import * as React from 'react';
import { useState, useEffect } from "react"
import Grid from './components/Grid'
import AutocompleteForm from './AutoComplete';
import { TOTAL_ANIME } from './AutoComplete';
import Row from './components/Row';
import AlertDialog from './components/Alert'
import { LoseDialog } from './components/Alert';

const numofTries = 10;

var data = require('./solutions.json')
var allAnimes = []
for (let i = 0; i < TOTAL_ANIME; i++) {
  allAnimes.push({ label: data.data[i].node, value: data.data[i].node.id });
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * TOTAL_ANIME);
}
const chosenAnime = data.data[getRandomNumber()].node
console.log(chosenAnime.title)
console.log(chosenAnime)

//Maybe not used
export const names = chosenAnime.title;
const score = chosenAnime.mean;
const eps = chosenAnime.num_episodes;
const studio = chosenAnime.studios[0].name
const genres = chosenAnime.genres
const id = chosenAnime.id
const image = chosenAnime.main_picture.medium

export default function App() {
  const [tries, setTries] = useState(0);
  const [allGuesses, setAllGuesses] = useState<number[]>([])
  const [lastGuess, setLastGuess] = useState(-1)
  const [currentGuess_ID, setCurrentGuess] = useState(-1)
  const [showLose, setShowLose] = useState(false)
  const [showWin, setShowWin] = useState(false)
  
  const closeLose =() => {
    setShowLose(false)
  }
  const openLose =() => {
    setShowLose(true)
  }

  const closeWin =() => {
    setShowWin(false)
  }
  const openWin =() => {
    setShowWin(true)
  }

  const changeGuess = (newGuess: number) => {
    setCurrentGuess(newGuess)
  }

  if (lastGuess != currentGuess_ID) {
    if(currentGuess_ID != -2 && tries <= numofTries){
      setAllGuesses([...allGuesses, currentGuess_ID])
      setLastGuess(currentGuess_ID)
      setTries(tries + 1)
    }
  }

  if (currentGuess_ID === id) {
    openWin()
    setTries(0)
    setCurrentGuess(-2)
  }

  if (tries >= numofTries) {
    openLose()
    setTries(0)
    setCurrentGuess(-2)
  }

  return (
    <div className="App">
      <p>
        Guess the anime: from the top {TOTAL_ANIME} most popular anime on MAL
      </p>
      <label>Guess your anime: </label>
      <AutocompleteForm changeGuess={changeGuess}></AutocompleteForm>
      <p>You have used {tries}/{numofTries} tries</p>
      <div></div>
      <Row is_header={true} is_empty={false} guess_id={-1} answer_id={-1} />
      <Grid guess_id={currentGuess_ID} answer_id={chosenAnime.id} all_guesses={allGuesses} />
      <AlertDialog open = {showWin} handleClose={closeWin} image = {image}></AlertDialog>
      <LoseDialog open = {showLose} handleClose={closeLose} image = {image}></LoseDialog>
      
    </div>
  );
}

