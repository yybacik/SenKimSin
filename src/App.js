import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tests from './pages/Tests';
import About from './pages/About';
import Contact from './pages/Contact';
import DiscoverTests from './pages/DiscoverTests';
import SolveTest from './pages/SolveTest';
import TestDetails from './pages/TestDetails'; // TestDetails içe aktarılıyor

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discover" element={<DiscoverTests />} />
          <Route path="/test/:id/details" element={<TestDetails />} />
          <Route path="/solve/:id" element={<SolveTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
