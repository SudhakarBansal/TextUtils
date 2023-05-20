import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //used to captalize text
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case...","success");
  };
  const handleLoClick = () => {
    //used to lowercase text
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case...","success");
  };
  const handleSpace = () => {
    //used to remove extra spaces
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Removed extra spaces...","success");
  };
  const handleClear = () => {
    //used to clear text
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared...","success");
  };
  const handlecopyText = () => {
    //used to copy text
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to Clipboard...","success");
  };

  const handleOnChange = (event) => {
    //used to write text by user in text area
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3" style = {{color : props.mode ==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control my-4"
            id="myBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor : props.mode ==='dark'?'#2b3035':'white',color : props.mode ==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button
          disabled = {text.length===0}
          className="btn btn-primary btn-sm mx-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled = {text.length===0}
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled = {text.length===0}
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={handleSpace}
        >
          Reomve Spaces
        </button>
        <button
          disabled = {text.length===0}
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={handlecopyText}
        >
          Copy Text
        </button>
        <button
          disabled = {text.length===0}
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3" style = {{color : props.mode ==='dark'?'white':'black'}}>
        <h3>Your Text Summary </h3>
        <p>
          {text.split(/\s+/).filter((word) => { return word!==""}).length} words and {text.split(/\s+/).join("").length} characters.
        </p>
        <p>{0.008 * text.split(/\s+/).join("").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0? text:" Nothing to Preview..."}</p>
      </div>
    </>
  );
}
