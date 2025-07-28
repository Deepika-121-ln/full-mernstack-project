// import React, { useEffect, useState } from 'react';


// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
//       title="Toggle theme"
//     >
//       {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-500" />}
//     </button>
//   );
// };

// export default DarkModeToggle;

// import React, { useEffect, useState } from 'react';

// const DarkModeToggle = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.body.className = savedTheme;
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.body.className = newTheme;
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <div className="toggle-container">
//       <button className="toggle-button" onClick={toggleTheme}>
//         {theme === 'light' ? '🌙 Dark' : '☀ Light'}
//       </button>
//     </div>
//   );
// };

// export default DarkModeToggle;


import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="toggle-container">
      <button className="toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀ Light'}
      </button>
    </div>
  );
};

export default DarkModeToggle;