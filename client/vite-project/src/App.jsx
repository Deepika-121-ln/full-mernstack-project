import React from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <DarkModeToggle />
      <Sidebar />
      <MainPanel />
    </div>
  );
}

export default App;