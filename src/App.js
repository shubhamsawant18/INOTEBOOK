// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { NoteState, noteContext } from './context/notes/NoteState';
// import Alert from "./Alert.js";

function App() {
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar/>
          {/* <Alert message="This is amazing "/> */}
          <div className="container"></div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
