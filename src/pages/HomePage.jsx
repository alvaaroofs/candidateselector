import React, { useState, useContext, useEffect } from 'react';
import CandidateList from '../components/CandidateList';
import SearchBar from '../components/SearchBar';
import { CandidatesContext } from '../context/CandidatesContext';

const HomePage = () => {
  const { candidates } = useContext(CandidatesContext);
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  const handleSearch = (query) => {
    if (query === ''){
        setFilteredCandidates(candidates)
    } else {
    const lowercasedQuery = query.toLowerCase();
    const filtered = candidates.filter(candidate => 
      candidate.title.toLowerCase().includes(lowercasedQuery) ||
      candidate.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCandidates(filtered);
    }
  };

  return (
    <div className="container">
      <h1>Lista de Candidatos a Decano</h1>
      <SearchBar onSearch={handleSearch} /> 
      <CandidateList candidates={filteredCandidates} />
    </div>
  );
};

export default HomePage;
