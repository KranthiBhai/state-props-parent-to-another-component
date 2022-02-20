import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Component2 } from './Component2';
import { Parent1 } from './parent-to-child/Parent1';

function App() {
  const [state, setState] = useState({data:""});

  const changeState = () => {
    setState({data:"state/props of component-1 is send by onClick event to another component."});
  };
  return (
    <div className="App">
        <div>
          <h2>Component 1</h2>
          <button onClick={changeState} type='button'>Send State</button>  
        </div>    
        <Component2 data={state.data} />
        <Parent1 />
    </div>
  );
}

export default App;
