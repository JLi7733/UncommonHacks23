import * as React from 'react';
import { useState, useEffect } from "react"


export default function App() {
  const [solution, setSolution] = useState("CRANE")

  return (
    <div className = "App">
      <p>Anime Wordle</p>
      {solution && <div>Solution is {solution}</div>}
      <button>Wow!</button>
    </div>
  );
}

