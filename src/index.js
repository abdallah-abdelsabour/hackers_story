import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

function Header(props) {
  return <h1>{props}</h1>;
}

ReactDOM.render(<App></App>, document.getElementById("root"));
