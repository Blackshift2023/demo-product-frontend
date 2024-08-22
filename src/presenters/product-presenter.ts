// src/presenters/productPresenter.ts

import { ExtendedProduct, Product } from "@/application/models/product";

export const presentProducts = (products: Product[]) => {
    return products.map(product => ({
      ...product,
    }));
  };