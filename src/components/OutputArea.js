import React, { useState } from "react";

function OutputArea({ output, setOutput }) {
  const clipboardHandler = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="container p-3">
      <div className="mb-1 ">
        <h3>Output</h3>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label "
        ></label>
        <textarea
          readOnly
          value={output}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
        ></textarea>
      </div>
      <div className="btn-group" role="group">
        <button onClick={clipboardHandler} className="btn btn-primary">
          Copy Output
        </button>
      </div>
    </div>
  );
}

export default OutputArea;
