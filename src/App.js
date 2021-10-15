import React from "react";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.js";

import TextArea from "./components/TextArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState();
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={darkmode ? "dark" : "light"}>
      <Nav darkmode={darkmode} setDarkmode={setDarkmode} />

      <TextArea
        text={text}
        setText={setText}
        output={output}
        setOutput={setOutput}
      />
      <OutputArea output={output} setOutput={setOutput} />
    </div>
  );
}

export default App;
