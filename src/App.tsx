import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from './SearchContextProvider';
import { SearchFilters } from './SearchFilters';
import { Map } from './Map'; // Update this line accordingly
import { PropertyList } from './PropertyList'; // Assuming you have this component

const App = () => {
  return (
    <SearchContextProvider>
      <Router>
        <div className="App">
          <header className="bg-gray-100 border-b py-4">
            <h1 className="text-center text-3xl font-semibold">Properties</h1>
          </header>
          <main className="p-4">
            <SearchFilters />
              <Map />
              <PropertyList />
          </main>
        </div>
      </Router>
    </SearchContextProvider>
  );
};

export default App;
