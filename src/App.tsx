import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Items, Pokemon, Pokemons} from './pages';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/items" element={<Items/>} />
          <Route path="/pokemons" element={<Pokemons/>} />
          <Route path="/pokemon/:name" element={<Pokemon/>} />
          <Route path="/" element={<Pokemons/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
