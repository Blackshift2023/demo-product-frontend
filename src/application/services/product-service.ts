// src/application/services/productService.ts

import { ApiResponse, Product } from '../models/product';
import { getProducts } from '../repositories/product-repository';

export const fetchProducts = async (
  page: number,
  limit: number,
  sortBy: string,
  searchQuery: string,
  filters: Record<string, any>
): Promise<ApiResponse> => {
  const product:any = await getProducts(page, limit, sortBy, searchQuery, filters);
  // Add any additional business logic here if needed
  return product;
};
