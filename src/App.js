import './App.css';

import React from 'react';
import Inputs from './components/Inputs/Inputs';
import Output from './components/Output/Output';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Splitter</h1>
        <Inputs />
        <Output />
      </header>
    </div>
  );
}

export default App;
