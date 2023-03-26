// src/components/Row.js

import React from 'react'
import { TOTAL_ANIME } from '../AutoComplete';
import { green } from '@mui/material/colors';

var data = require('../solutions.json')

let all_anime : any[] = []
for (let i = 0; i < TOTAL_ANIME; i++) {
  all_anime.push(data.data[i].node)
}

function get_year(str:string): number {
  return Math.floor(Number(str.substring(0, 4)))
}

function get_score(sc: number): number {
  return Math.floor(sc)
}

interface RowProps {
  is_header: boolean;
  is_empty: boolean;
  guess_id: number;
  answer_id: number;
}
export default function Row({ is_header, is_empty, guess_id, answer_id }: RowProps) {

  if (is_header) {
    return (
      <div className="row_header">
          <div>Guess</div>
          <div>Year</div>
          <div>Score</div>
          <div># Episodes</div>
          <div>Studio</div>
          <div>Genres</div>
          <div>Recommeded</div>
      </div>
    )
  }

  if (is_empty || guess_id === -1) {
    return (
      <div className="row">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    )
  }

  let guess_anime = null
  let answer_anime = null
  for (let anime of all_anime) {
    if (anime.id === guess_id) {
      guess_anime = anime
    }
    if (anime.id === answer_id) {
      answer_anime = anime
    }
  }

  // Activate win sequence
  if (guess_id === answer_id) {

  }


  // Handle title
  let title_color, title_image
  if (guess_anime.title === answer_anime.title) {
    title_color = "green"
  } else {
    title_color = "grey"
  }


  // Handle realease date
  let guess_date, date_color, date_image
  guess_date = get_year(guess_anime.start_date)
  if (guess_date === get_year(answer_anime.start_date)) {
    date_color = "green"
  } else {
    date_color = "grey"
  }

  // Handle score
  let guess_score, score_color, score_image

  guess_score = get_score(guess_anime.mean)
  if (guess_score === get_score(answer_anime.score)) {
    score_color = "green"
  } else {
    score_color = "grey"
  }

  // Handle episode count
  let guess_episode, episode_color, episode_image
  guess_episode = guess_anime.num_episodes
  if (guess_episode === answer_anime.num_episodes) {
    episode_color = "green"
  } else {
    episode_color = "grey"
  }

  // Handle studio
  let guess_studio, studio_color

  // Handle genre
  let guess_genre, genre_color

  // Handle recommendations
  let guess_rec, rec_color

  return (
    <div className="row">
        <div className={title_color}>{guess_anime.title}</div>
        <div className={date_color}>{guess_date}</div>
        <div className={score_color}>{guess_score}</div>
        <div className={episode_color}>{guess_episode}</div>
        <div className={studio_color}>Studios</div>
        <div className={genre_color}>Genres</div>
        <div className={rec_color}>Recommeded</div>
    </div>
  )
  
}