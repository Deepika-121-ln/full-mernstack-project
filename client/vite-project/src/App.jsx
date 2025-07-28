// import React from 'react';
// import Sidebar from './components/Sidebar';
// import MainPanel from './components/MainPanel';
// import { useEffect, useState } from "react";
// import './App.css';
// import './index.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(() =>
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
//       <div className="layout">
//         <Sidebar />
//         <MainPanel darkMode={darkMode} setDarkMode={setDarkMode} />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Sidebar from './components/Sidebar';
// import MainPanel from './components/MainPanel';
// import DarkModeToggle from './components/DarkModeToggle';
// import './index.css';
// import './app.css';

// function App() {
//   return (
//     <>
//       <DarkModeToggle />
//       <div style={{ display: 'flex' }}>
//         <Sidebar />
//         <MainPanel />
//       </div>
//     </>
//   );
// }

// export default App;


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