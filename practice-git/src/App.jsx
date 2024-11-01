import { useState } from 'react';
import React from "react";
import CodeSample1 from "./components/Code1";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null); // Added state for selected

  return (
    <>
      <div>
        <button onClick={() => setSelected("1")}>Code Sample 1</button>
        <p>Fuck you ness, how can a person be soo mean?</p>
      </div>

      <div id="CodeSampleContainer">
        {selected === "1" && <CodeSample1 />}
      </div>
    </>
  );
}

export default App;
