// src/components/Row.js

import React from 'react'
import { useState, useEffect } from "react"
import { TOTAL_ANIME } from '../AutoComplete';
import { green } from '@mui/material/colors';

var data = require('../solutions.json')

let all_anime: any[] = []
for (let i = 0; i < TOTAL_ANIME; i++) {
  all_anime.push(data.data[i].node)
}

function get_year(str: string): number {
  return Math.floor(Number(str.substring(0, 4)))
}

function get_score(sc: number): number {
  return Math.floor(sc * 10) / 10
}

function getRandomNumbers(count: number, ub: number): number[] {
  var arr = [];
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * ub);
    while (arr.indexOf(random) !== -1) {
      random = Math.floor(Math.random() * ub);
    }
    arr.push(random);
  }
  return arr;
}

function fillArray(n: any) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

interface RowProps {
  is_header: boolean;
  is_empty: boolean;
  guess_id: number;
  answer_id: number;
}
export default function Row({ is_header, is_empty, guess_id, answer_id }: RowProps) {
  const [genreRandom, setGenreRandom] = useState<number[]>([]);

  if (is_header) {
    return (
      <div className="row_header">
        <div>Guess</div>
        <div>Year</div>
        <div>Score</div>
        <div># Episodes</div>
        <div>Studio</div>
        <div>Genres</div>
        <div>most reco'd</div>
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
  }
  else {
    date_color = "grey"
    if (guess_date < get_year(answer_anime.start_date)) {
      guess_date = guess_date + "\n↑";
    }
    else {
      guess_date = guess_date + "\n↓";
    }

  }

  // Handle score
  let guess_score, answer_score, score_color, score_image
  guess_score = get_score(guess_anime.mean)
  if (guess_score === get_score(answer_anime.mean)) {
    score_color = "green"
  } else {
    score_color = "grey"
    if (guess_score < get_score(answer_anime.mean)) {
      guess_score = guess_score + "\n↑";
    }
    else {
      guess_score = guess_score + "\n↓";
    }
  }

  // Handle episode count
  let guess_episode, episode_color, episode_image
  guess_episode = guess_anime.num_episodes
  if (guess_episode === answer_anime.num_episodes) {
    episode_color = "green"
  } else {
    episode_color = "grey"
    if (guess_episode < answer_anime.num_episodes) {
      guess_episode = guess_episode + "\n↑";
    }
    else {
      guess_episode = guess_episode + "\n↓";
    }
  }

  // Handle studio
  let guess_studio = "", studio_color
  /*
    get dictionary of studios
    check if each studio worked on the answer anime (id)
    green if exactly the same: yellow if the number present are not equal, red if no overlap
  */
  let guess_studio_dic = guess_anime.studios, answer_studio_dic = answer_anime.studios, overlap = 0, guess_studio_arr = []
  for (let g of guess_studio_dic) {
    guess_studio_arr.push(g.name)
    for (let a of answer_studio_dic) {
      if (g.id === a.id) {
        overlap++
        break
      }
    }
  }

  // Listing studio names
  for (let name of guess_studio_arr) {
    guess_studio = guess_studio + name + "\n"
  }

  // Studio color
  if (overlap === guess_studio_dic.length && overlap === answer_studio_dic.length) {
    studio_color = "green"
  } else if (overlap > 0) {
    studio_color = "yellow"
  } else {
    studio_color = "grey"
  }

  // Handle genre
  let guess_genre = "", genre_color
  /*
    get dictionary of genres
    pick 3 random genres
    green if answer has the same genres: yellow if it shares one, red if no overlap
  */
  if (genreRandom.length === 0) {
    let num_genres = Math.min(guess_anime.genres.length, 3)
    let chosen_genres = getRandomNumbers(num_genres, guess_anime.genres.length)
    setGenreRandom(chosen_genres)
  }
  let genre_overlap = 0
  for (let iter of genreRandom) {
    let g_g = guess_anime.genres[iter]
    for (let a_g of answer_anime.genres) {
      if (g_g.id == a_g.id) {
        genre_overlap++
        break
      }
    }
  }

  // Determine genre colors
  if (genre_overlap === 3) {
    genre_color = "green"
  } else if (genre_overlap > 0) {
    genre_color = "yellow"
  } else {
    genre_color = "grey"
  }

  // Format genre text to display
  for (let iter of genreRandom) {
    guess_genre = guess_genre + guess_anime.genres[iter].name + ",\n"
  }
  guess_genre = guess_genre.slice(0, -2)

  /////////// Handle recommendations //////////
  let guess_rec = "", rec_color

  let rec_max = Math.min(2, guess_anime.recommendations.length)
  let ind_arr = fillArray(rec_max)
  let rec_overlap = 0
  for (let iter of ind_arr) {
    let g_g = guess_anime.recommendations[iter].node
    for (let a_g of answer_anime.recommendations) {
      if (g_g.id == a_g.node.id) {
        rec_overlap++
        break
      }
    }
  }

  // Determine recommendation colors
  if (rec_overlap === 3) {
    rec_color = "green"
  } else if (rec_overlap > 0) {
    rec_color = "yellow"
  } else {
    rec_color = "grey"
  }

  // Format recommendation text to display
  for (let iter of ind_arr) {
    guess_rec = guess_rec + guess_anime.recommendations[iter].node.title + ",\n"
  }
  guess_rec = guess_rec.slice(0, -2)

  return (
    <div className="row">
      <div className={title_color}><p className="title">{guess_anime.title}</p></div>
      <div className={date_color}><p className="date">{guess_date}</p></div>
      <div className={score_color}><p className="score">{guess_score}</p></div>
      <div className={episode_color}><p className="score">{guess_episode}</p></div>
      <div className={studio_color}>{guess_studio}</div>
      <div className={genre_color}>{guess_genre}</div>
      <div className={rec_color}>{guess_rec}</div>
    </div>
  )

}