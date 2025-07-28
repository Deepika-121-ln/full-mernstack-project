import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        {/* Attractive Logo */}
        <div style={{
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            fontSize: '1.8rem'
          }}>
            🧠
          </div>
          <h2 style={{
            margin: 0,
            fontSize: '1.6rem',
            fontWeight: 'bold',
            color: '#1e4dd8'
          }}>
            My<span style={{ color: '#5b4da7' }}>Gen</span> 
          </h2>
        </div>

        {/* Sidebar Buttons */}
        <button className="button-blue" style={{ width: '100%' }}> + New Chat</button>
     
       <button className="w-full bg-white dark:bg-gray-800 border border-blue-400 text-blue-700 dark:text-white py-2 rounded mb-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition">
              History
         </button>
   </div>
     

      <button className="button-yellow" style={{ width: '100%' }}> Upgrade</button>
    </div>
  );
};

export default Sidebar;