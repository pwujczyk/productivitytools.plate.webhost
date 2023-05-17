import React, { ReactElement, useState, useRef } from "react";

import { PTButton, PTPlate } from "productivitytools.plate";

function App() {
  const [content, setContent] = useState("Fdsdddda");

  const setRawContent=(value:string)=>{
    let x=(value);
    setContent(x);
  }

  return (
    <div className="App">
      hello2
      <input type="text" onChange={(x) => setRawContent(x.target.value)}></input>
      <PTButton label="click me!"></PTButton>
      <PTPlate content={content}></PTPlate>
    </div>
  );
}

export default App;
