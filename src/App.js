import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Glasgow" />
        <footer>
          This project is created by{" "}
          <a href="https://shieldstalent.com" target="_blank" rel="noreferrer">
            Jackie
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/jackiedelrey/weather-app-final-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://joyful-sorbet-4ec45a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
