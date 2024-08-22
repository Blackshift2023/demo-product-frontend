// src/pages/index.tsx

import { ExtendedProduct, Product } from '@/application/models/product';
import { fetchProducts } from '@/application/services/product-service';
import FilterPanel from '@/components/filter-panel';
import PaginationControls from '@/components/pagination-controls';
import ProductList from '@/components/product-list';
import SearchBar from '@/components/search-bar';
import SortOptions from '@/components/sort-options';
import { presentProducts } from '@/presenters/product-presenter';
import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('ASC');
  const [filters, setFilters] = useState({});
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(currentPage, limit, sortBy, searchQuery, filters);
      const items: Product[] = data.items; // items is an array of Product objects
      setProducts(presentProducts(items));
      // Set total pages based on API response
      setTotalPages(data.meta.totalPages); // Example, adjust according to your data
    };

    loadProducts();
  }, [currentPage, sortBy, searchQuery, filters]);

  return (
    <div className="container mx-auto p-4 ">
      <SearchBar onSearch={setSearchQuery} />
      <SortOptions onSortChange={setSortBy} />
      <FilterPanel onFilterChange={setFilters} />
      <ProductList products={products} />
      <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default HomePage;
