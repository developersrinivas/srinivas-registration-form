import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-400 to-blue-600 p-4 text-white shadow-lg z-50 ">
    <div className="flex justify-between items-center"> {/* Align items vertically */}
      <div className="flex items-center space-x-2 bg-white rounded-lg p-2"> {/* Align image and text */}
        <img src="/logo192.jpg" alt="Logo" className="h-6" /> {/* Adjusted height */}
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text">JCS</span> {/* Gradient text */}
      </div>
  
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

