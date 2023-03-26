// src/components/Row.js

import React from "react";

interface RowProps {
  guess: any;
  empty_guess: boolean;
  header: boolean;
}

export default function Row({ guess, empty_guess, header }: RowProps) {
  // Prompt entering next guess
  if (empty_guess) {
  }

  // Header
  if (header) {
    return (
      <div className="row_header">
        <div>Your Guess</div>
        <div>Year Released</div>
        <div>MAL Score</div>
        <div># Episodes</div>
        <div>Studio</div>
        <div>Genres</div>
        <div>Common Recommendations</div>
      </div>
    );
  }

  // Fill out all remaining guessed things
  return (
    <div className="row">
      <div>Your Guess</div>
      <div>Year Released</div>
      <div>MAL Score</div>
      <div># Episodes</div>
      <div>Studio</div>
      <div>Genres</div>
      <div>Common Recommendations</div>
    </div>
  );
}
