
import { useState } from 'react';
import './App.css';
import SearchBar from './components/Molecules/Search Bar/searchbar'
import SearchResult from './components/Molecules/Search Result/searchResult';

function App() {
  const [results, setResults] =  useState([])
  return (
    <div className='App'>
      <SearchBar setResults={setResults}/>
      <SearchResult  results={results}/>
      
    </div>
  );
}

export default App;
