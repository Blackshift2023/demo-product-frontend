// src/application/repositories/productRepository.ts
import axiosInstance from '@/infrastructure/api/axios-instance';
import { Product } from '../models/product';

export const getProducts = async (
    page: number,
    limit: number,
    sortBy: string,
    searchQuery: string,
    filters: Record<string, any>
): Promise<Product[]> => {
    const response = await axiosInstance.get<Product[]>('/product', {
        params: {
            sort: sortBy,
            ...searchQuery && { keyword: searchQuery },
            ...filters,
            limit: limit,
            page: page,
        },
    });
    console.log(response)
    return response.data;
};
