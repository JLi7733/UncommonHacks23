// src/components/Row.js

import React from 'react'
import { TOTAL_ANIME } from '../AutoComplete';

var data = require('../solutions.json')

let all_anime : any[] = []
for (let i = 0; i < TOTAL_ANIME; i++) {
  all_anime.push(data.data[i].node)
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
  for (let anime of all_anime) {
    if (anime.id === guess_id) {
      guess_anime = anime
    }
  }

  return (
    <div className="row">
        <div>{guess_anime.title}</div>
        <div>{guess_anime.start_date}</div>
        <div>{guess_anime.mean}</div>
        <div>{guess_anime.num_episodes}</div>
        <div>Studios</div>
        <div>Genres</div>
        <div>Recommeded</div>
    </div>
  )
  
}