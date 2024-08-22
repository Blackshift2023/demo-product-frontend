// src/components/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 border rounded"
    />
  );
};

export default SearchBar;
