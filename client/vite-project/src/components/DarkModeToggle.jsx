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