import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SerieA from './components/SerieA';
import Euro2024 from './components/National';

function App() {
  return (
    <Router>
      <div className='text-center'>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seriea" element={<SerieA />} />
          <Route path="/national" element={<Euro2024 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
