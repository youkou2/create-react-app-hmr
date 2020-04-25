import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader';

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(p => p + 1);
    console.log('Edited !!!');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit2 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        </a>
        <button onClick={onClick}>My Button : {count}</button>
      </header>
    </div>
  );
}

export default hot(module)(App);
