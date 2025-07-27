import React from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
      <div className="layout">
        <Sidebar />
        <MainPanel darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
