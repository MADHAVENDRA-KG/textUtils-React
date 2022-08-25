import React from "react";
import { useState } from "react";
export default function Textarea(props) {
  const handleUpClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const colorHelper = (color) => {
    if (color === "dark") {
      return "white";
    } else if (color === "green") {
      return "#fd7e14";
    } else {
      return "#042743";
    }
  };
  const textboxBg = (color) => {
    if (color === "dark") {
      return "grey";
    } else if (color === "green") {
      return "#dc3545";
    } else {
      return "yellow";
    }
  };
  const [text, setText] = useState("Enter the text here");
  return (
    <>
      <div
        className="container"
        style={{ color: colorHelper(props.mode) }}
        // style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: textboxBg(props.mode),
              color: colorHelper(props.mode),
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
          style={{ backgroundColor: textboxBg(props.mode) }}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
          style={{ backgroundColor: textboxBg(props.mode) }}
        >
          Convert to Lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: colorHelper(props.mode) }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim().split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
