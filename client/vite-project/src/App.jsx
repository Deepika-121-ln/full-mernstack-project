import React from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';


function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainPanel />
    </div>
  );
}

export default App;
