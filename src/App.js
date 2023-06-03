import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Yangon" />
        <footer>
          This project is created by{" "}
          <a href="mailto:yoonpyae26@gmail.com" target="_blank" rel="noreferrer">
            Yoon Pyae Eain
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yoonpyae/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
