// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="w-64 min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6 flex flex-col justify-between shadow-lg transition-all duration-300">
//       {/* Top Section */}
//       <div>
//         {/* Brand */}
//         <div className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6">🧠 MyGen</div>

//         {/* New Chat Button */}
//         <button className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition">
//           + New Chat
//         </button>

//         {/* History Button */}
//         <button className="w-full bg-white dark:bg-gray-800 border border-blue-400 text-blue-700 dark:text-white py-2 rounded mb-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition">
//           History
//         </button>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col gap-4">
//         <button className="w-full bg-yellow-400 text-black dark:text-gray-900 font-semibold py-2 rounded hover:bg-yellow-500 transition">
//           Upgrade
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="w-64 min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6 flex flex-col justify-between shadow-lg transition-all duration-300">
//        {/* Top Section */}
//        <div>
//          {/* Brand */}
//          <div className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6">🧠 MyGen</div>

//          {/* New Chat Button */}
//         <button className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition">
//            + New Chat
//          </button>

//          {/* History Button */}
//          <button className="w-full bg-white dark:bg-gray-800 border border-blue-400 text-blue-700 dark:text-white py-2 rounded mb-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition">
//            History
//         </button>
//        </div>

//        {/* Bottom Section */}
//       <div className="flex flex-col gap-4">
//          <button className="w-full bg-yellow-400 text-black dark:text-gray-900 font-semibold py-2 rounded hover:bg-yellow-500 transition">
//            Upgrade
//          </button>
//        </div>
//     </div>
//   );
// };

// export default Sidebar;


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