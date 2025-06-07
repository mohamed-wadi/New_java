import React, { useEffect } from 'react';
import './App.css';
import TPSelection from './components/TPSelection';
import { initGA, pageview } from './analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    // Track initial page view
    pageview(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Java Programming Exercises</h1>
      </header>
      <main>
        <TPSelection />
      </main>
      <footer>
        <p>© 2025 Wadi Mohammed</p>
      </footer>
    </div>
  );
}

export default App;
