import React, { useState } from "react";

export default function TextForm(props) {
  const clickToUp = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  const clickToLo = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };
  const clickToClr = () => {
    setText("");
    props.showAlert("Cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h1>{props.heading}</h1>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div
            className="my-3"
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <button className="btn btn-primary" onClick={clickToUp}>
              Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-1" onClick={clickToLo}>
              Convert to LowerCase
            </button>
            <button className="btn btn-primary mx-1" onClick={clickToClr}>
              Clear Text
            </button>
          </div>

          <div className="container my-3">
            <h2>Text Summary</h2>
            <p>
              {text === "" ? 0 : text.split(" ").length} words and {text.length}{" "}
              characters
            </p>
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
