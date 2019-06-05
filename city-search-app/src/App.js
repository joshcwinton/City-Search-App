import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm.js'
import Results from './components/Results.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        City Search
        </header>
        <SearchForm />
        <Results />
    </div>
  );
}

export default App;
