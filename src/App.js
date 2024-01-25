import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import Home without curly braces
import About from './components/About'; // Import About component

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route  exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <h1>This is iNotebook</h1>
      </div>
    </Router>
  );
}

export default App;
