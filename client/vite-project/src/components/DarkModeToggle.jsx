import React, { useEffect, useState } from 'react';
// import { Sun, Moon } from 'lucide-react'; // optional icons, use any

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
      title="Toggle theme"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-500" />}
    </button>
  );
};

export default DarkModeToggle;
