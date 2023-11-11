import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Guelph" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            charity and is
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mike-charity/guelphweather"
            target="_blank"
            rel=" noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
