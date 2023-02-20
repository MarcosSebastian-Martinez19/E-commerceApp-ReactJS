import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Header } from './components/Header/Header';
import { Paginas } from "./components/Paginas";
import { DataProvider } from './Context/DataProvider';
import { Carrito } from './components/Carrito/Carrito';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
