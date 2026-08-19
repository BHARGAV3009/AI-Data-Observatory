import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ onSearch, placeholder = 'Search...', className = '' }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative w-full max-w-md ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IoSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm transition-colors duration-200"
          placeholder={placeholder}
        />
      </div>
    </form>
  );
};

export default SearchBar;
