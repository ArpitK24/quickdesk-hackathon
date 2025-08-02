import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-md border-b border-purple-200">
      {/* Left: Brand */}
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        QuickDesk
      </div>
      {/* Right: Icons & Buttons */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-purple-100 transition">
          <BellIcon className="h-6 w-6 text-purple-600" />
          {/* Notification Dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
        </button>
        {/* Dashboard Button */}
        <button className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">
          Dashboard
        </button>
        {/* Admin Button */}
        <button className="px-4 py-1 rounded-full border-2 border-purple-400 text-purple-700 font-semibold bg-white hover:bg-purple-100 shadow transition">
          Admin
        </button>
      </div>
    </nav>
  );
}

export default Navbar;