import React from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import './App.css'; // Assuming you have some global styles


function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainPanel />
    </div>
  );
}

export default App;
