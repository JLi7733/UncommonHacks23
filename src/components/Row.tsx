// src/components/Row.js

import React from 'react'
var data = require('../solutions.json')

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

  if (is_empty) {
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

  return (
    <div className="row">
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