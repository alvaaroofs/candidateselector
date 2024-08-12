import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CandidatePage from './pages/CandidatePage';
import './styles.css'
import './App.css'
import { CandidatesProvider } from './context/CandidatesContext';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CandidatesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage scrollPosition={scrollPosition} />} />
          <Route path="/candidate/:id" element={<CandidatePage scrollPosition={scrollPosition} />} />
        </Routes>
      </Router>
    </CandidatesProvider>
  );
};

export default App;