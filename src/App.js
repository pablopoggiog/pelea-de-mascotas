import React from 'react';
import './App.css';
import Pelea from './containers/Pelea';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <Contador></Contador>
      <Pelea></Pelea>
    </div>
  );
}

export default App;
