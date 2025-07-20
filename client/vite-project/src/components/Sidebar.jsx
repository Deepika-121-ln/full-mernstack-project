import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // Optional: If you want toggle here

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-blue-100 dark:bg-gray-900 p-6 flex flex-col justify-between shadow-lg transition-all duration-300">
      <div>
        <div className="text-2xl font-bold text-blue-800 dark:text-white mb-6">🧠 MyGen</div>

        <button className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition">
          + New Chat
        </button>

        <button className="w-full bg-white dark:bg-gray-800 border border-blue-400 text-blue-700 dark:text-gray-200 py-2 rounded mb-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition">
          History
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <button className="w-full bg-yellow-400 text-black dark:text-gray-900 font-semibold py-2 rounded hover:bg-yellow-500 transition">
          Upgrade
        </button>

         {/* Toggle Button (Optional) 
         <DarkModeToggle />  */}
      </div>
    </div>
  );
};

export default Sidebar;
