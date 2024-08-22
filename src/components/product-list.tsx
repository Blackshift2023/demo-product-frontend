// src/components/ProductList.tsx

import { Product } from '@/application/models/product';
import React from 'react';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
