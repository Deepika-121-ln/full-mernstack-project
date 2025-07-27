import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const MainPanel = () => {
  const [prompt, setPrompt] = useState('');
  const [preview, setPreview] = useState('');
  const [darkMode, setDarkMode] = useState(() =>
  localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleSubmit = () => {
    setPreview(`🔧 Generating UI for: "${prompt}"`);
  };

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300">
      <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
        {/* 🌗 Dark Mode Toggle - Top Right */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Main Content */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-4xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Build , Any Web Application
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            With Your 24/7 MyGen
          </p>

          {/* Input & Button */}
          <div className="flex flex-col sm:flex-row w-full items-center gap-4 mb-6">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="What do you want to build? (e.g., Create portfolio website)"
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              ➤ Generate
            </button>
          </div>

          {/* Preview Result */}
          {preview && (
            <p className="text-lg text-gray-700 dark:text-gray-200 mt-4">
              {preview}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPanel;

// import DarkModeToggle from './DarkModeToggle';

// ...

// {/* Top-right button */}
// <div className="absolute top-4 right-4 z-50">
//   <DarkModeToggle />
// </div>

