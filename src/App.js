import React from 'react';
import './App.css';
import './SearchBar/SearchBar';
import SearchBar from './SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Google Book Search</h1>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
