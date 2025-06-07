import React, { useEffect } from 'react';
import './App.css';
import TPSelection from './components/TPSelection';
import { initGA, pageview } from './analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    console.log('Initializing Google Analytics...');
    try {
      initGA();
      // Track initial page view
      pageview(window.location.pathname + window.location.search);
      console.log('Google Analytics initialization completed');
    } catch (error) {
      console.error('Error initializing Google Analytics:', error);
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    const handleRouteChange = () => {
      pageview(window.location.pathname + window.location.search);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
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
