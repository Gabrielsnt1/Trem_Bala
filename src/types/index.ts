export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  specs: {
    storage: string;
    ram: string;
    camera: string;
    battery: string;
    processor: string;
    display: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  brand: string[];
  priceRange: [number, number];
  category: string[];
  inStock: boolean;
}