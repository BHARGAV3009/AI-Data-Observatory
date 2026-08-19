import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from '../common/SearchBar';
import { IoNotificationsOutline, IoMoonOutline, IoSunnyOutline, IoMenuOutline } from 'react-icons/io5';

const Navbar = ({ toggleSidebar }) => {
  const { user } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10 sticky top-0">
      <div className="flex items-center flex-1">
        <button 
          onClick={toggleSidebar}
          className="mr-4 text-gray-500 hover:text-gray-700 md:hidden focus:outline-none cursor-pointer"
        >
          <IoMenuOutline size={24} />
        </button>
        <div className="hidden sm:block w-full max-w-md">
          <SearchBar placeholder="Search AIDO..." />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme}
          className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          title="Toggle Dark Mode"
        >
          {isDarkMode ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
        </button>
        
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors relative cursor-pointer">
          <IoNotificationsOutline size={20} />
          <span className="absolute top-1 right-1.5 block h-2 w-2 rounded-full bg-[var(--color-danger)] ring-2 ring-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-2 border-l border-gray-200 ml-2 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
          <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <span className="text-sm font-medium text-gray-700 hidden md:block">
            {user?.name || 'User'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
