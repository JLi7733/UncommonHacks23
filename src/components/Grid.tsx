// src/components/Grid.js

import React from 'react'
import Row from './Row'

interface GridProps {
    guess_id: number;
    all_guesses: number[];
    answer_id: number;
}

export default function Grid({ guess_id, all_guesses, answer_id }: GridProps) {
  console.log(guess_id)

  return (
    <div>
      {all_guesses.map((g, i) => {
        return <Row key={i} is_header={false} is_empty={false} guess_id={g} answer_id={answer_id} /> 
      })}
    </div>
  )
}