// src/components/PaginationControls.tsx

import React from 'react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Previous
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
