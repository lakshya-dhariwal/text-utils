import React, { useState } from "react";

function TextArea({ text, setText, setOutput }) {
  const len = text.length;
  const minutes = Math.floor(len / 60);
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const uppercaseHandler = () => {
    const upperCasedText = text.toUpperCase();
    setOutput(upperCasedText);
  };
  const lowercaseHandler = () => {
    const lowerCasedText = text.toLowerCase();
    setOutput(lowerCasedText);
  };
  const extraSpaceHandler = () => {
    let newText = text.split(/[ ]+/);
    setOutput(newText.join(" "));
  };
  const clearHandler = () => {
    setText(" ");
    setOutput(" ");
  };
  const clipboardHandler = () => {
    navigator.clipboard.writeText(text);
  };
  const randomCaseHandler = () => {
    var flip = "";
    const str = text;
    for (var i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        flip += str.charAt(i).toLowerCase();
      } else {
        flip += str.charAt(i).toUpperCase();
      }
    }
    setOutput(flip);
  };

  return (
    <div className="container p-3">
      <h3>Enter text here</h3>
      <div className="mb-2 ">
        <textarea
          value={text}
          onChange={textHandler}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
        ></textarea>
        <label htmlFor="exampleFormControlTextarea1" className="form-label ">
          {len} Characters and {len === 0 ? 0 : text.split(" ").length} Words{" "}
          <br />
        </label>
        {"        "}
        <span className="ml-3">
          {minutes} min {len - minutes * 60}s Long
        </span>
      </div>
      <div className="btn-group ms-2 my-1" role="group">
        <button onClick={clipboardHandler} className="btn btn-primary">
          Copy Text
        </button>
        <button onClick={clearHandler} className="btn btn-danger">
          Clear Text
        </button>
      </div>
      <div className="btn-group ms-2" role="group">
        <button onClick={uppercaseHandler} className="btn btn-success">
          To Uppercase
        </button>
        <button onClick={lowercaseHandler} className="btn btn-warning">
          To Lowercase
        </button>
        <button onClick={randomCaseHandler} className="btn btn-danger">
          Upper-Lower Case
        </button>
      </div>
      <button onClick={extraSpaceHandler} className="btn btn-info ms-2 my-1">
        Remove Extra Spaces
      </button>
    </div>
  );
}

export default TextArea;
