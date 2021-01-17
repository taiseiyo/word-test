import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let text_list = ["test", "red", "value", "blue", "word"];

ReactDOM.render(
  <React.StrictMode>
    <App text_list={text_list} />
  </React.StrictMode>,
  document.getElementById("question"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
