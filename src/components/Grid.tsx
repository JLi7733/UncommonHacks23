// src/components/Grid.js

import React from 'react'
import Row from './Row'

interface GridProps {
    guesses: any[];
    currentGuess: any;
    turn: any;
}

export default function Grid({ guesses, currentGuess, turn }: GridProps) {
  return (
    <div>
      {guesses.map((g, i) => {
        return <Row key={i} /> 
      })}
    </div>
  )
}