import React from 'react';

const MainPanel = () => {
  return (
    <div className="main-panel">
      <h1 style={{ color: '#1e4dd8', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Build , Any Web Application</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}> With Your 24/7 MyGen</p>

<div className="flex w-full max-w-3xl mx-auto px-4 gap-3">
  <input
    type="text"
    placeholder="What do you want to build? (e.g., Create a Portfolio Website)"
    className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
  />
  <button
    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
  >
    ➤ Generate
  </button>
</div>
    </div>
  );
};

export default MainPanel;