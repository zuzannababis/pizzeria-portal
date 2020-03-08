import React from 'react';
import MainLayout from './components/Layout/MainLayout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </MainLayout>
    </div>
  );
}

export default App;
