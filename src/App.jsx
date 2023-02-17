import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Productos } from './components/Productos/Productos';

function App() {
  return (
    <div className="App">
      <Header />
      <Productos />
    </div>
  );
}

export default App;
