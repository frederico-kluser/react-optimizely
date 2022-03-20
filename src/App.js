import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
  withOptimizely
} from '@optimizely/react-sdk';


const optimizely = createInstance({
  sdkKey: '<Your_SDK_Key>'
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
