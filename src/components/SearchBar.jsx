import React, { useState } from 'react';


//Con el componente SearchBar, como su nombre indica, buscaremos al candidato acorde a nuestras necesidades
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text"
        placeholder="Buscar candidatos a decano...   "
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;