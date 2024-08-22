// src/components/SortOptions.tsx

import React from 'react';

interface SortOptionsProps {
  onSortChange: (sortBy: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ onSortChange }) => {
  return (
    <select onChange={(e) => onSortChange(e.target.value)} className="p-2 border rounded">
      <option value="price">Price</option>
      <option value="rating">Rating</option>
      {/* Add more sort options */}
    </select>
  );
};

export default SortOptions;
