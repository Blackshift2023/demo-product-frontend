export interface Product {
    id: number;
    name: string;
    description: string;
  }

  export interface ExtendedProduct extends Product {
    displayPrice: string;
  }

  export interface ApiResponse {
    items: Product[]; // Array of products
    meta:{
        currentPage:number,
        itemCount:number,
        itemsPerPage:number,
        totalItems:number,
        totalPages:number
    } ; // Example, if your API returns total pages
  }