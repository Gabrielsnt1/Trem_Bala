import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 6999,
    originalPrice: 7499,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'flagship',
    specs: {
      storage: '256GB',
      ram: '8GB',
      camera: '48MP',
      battery: '4422mAh',
      processor: 'A17 Pro',
      display: '6.7" Super Retina XDR'
    },
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    featured: true,
    description: 'O iPhone mais avançado da Apple com chip A17 Pro e sistema de câmera profissional.'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 5999,
    originalPrice: 6499,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'flagship',
    specs: {
      storage: '256GB',
      ram: '12GB',
      camera: '200MP',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 3',
      display: '6.8" Dynamic AMOLED 2X'
    },
    rating: 4.7,
    reviews: 892,
    inStock: true,
    featured: true,
    description: 'Galaxy com S Pen integrada, câmera de 200MP e inteligência artificial avançada.'
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 4299,
    image: 'https://images.pexels.com/photos/1034841/pexels-photo-1034841.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1034841/pexels-photo-1034841.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'flagship',
    specs: {
      storage: '128GB',
      ram: '12GB',
      camera: '50MP',
      battery: '5050mAh',
      processor: 'Google Tensor G3',
      display: '6.7" LTPO OLED'
    },
    rating: 4.6,
    reviews: 543,
    inStock: true,
    featured: true,
    description: 'Pixel com IA do Google, fotografia computacional avançada e Android puro.'
  },
  {
    id: '4',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 3799,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1034841/pexels-photo-1034841.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'premium',
    specs: {
      storage: '256GB',
      ram: '16GB',
      camera: '50MP',
      battery: '5300mAh',
      processor: 'Snapdragon 8 Gen 3',
      display: '6.73" LTPO AMOLED'
    },
    rating: 4.5,
    reviews: 321,
    inStock: true,
    featured: false,
    description: 'Smartphone premium com excelente custo-benefício e sistema de câmera Leica.'
  },
  {
    id: '5',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 2999,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1034841/pexels-photo-1034841.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'premium',
    specs: {
      storage: '256GB',
      ram: '12GB',
      camera: '50MP',
      battery: '5400mAh',
      processor: 'Snapdragon 8 Gen 3',
      display: '6.82" LTPO3 AMOLED'
    },
    rating: 4.4,
    reviews: 267,
    inStock: true,
    featured: false,
    description: 'OnePlus com carregamento ultra-rápido e performance de flagship.'
  },
  {
    id: '6',
    name: 'Motorola Edge 40 Pro',
    brand: 'Motorola',
    price: 1899,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/1034841/pexels-photo-1034841.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1034841/pexels-photo-1034841.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'mid-range',
    specs: {
      storage: '256GB',
      ram: '8GB',
      camera: '50MP',
      battery: '4600mAh',
      processor: 'Snapdragon 8 Gen 2',
      display: '6.67" pOLED'
    },
    rating: 4.3,
    reviews: 145,
    inStock: true,
    featured: false,
    description: 'Motorola com design elegante, tela curva e Android quase puro.'
  }
];

export const categories = [
  { id: 'flagship', name: 'Flagship', count: 3 },
  { id: 'premium', name: 'Premium', count: 2 },
  { id: 'mid-range', name: 'Intermediário', count: 1 }
];

export const brands = [
  { id: 'apple', name: 'Apple', count: 1 },
  { id: 'samsung', name: 'Samsung', count: 1 },
  { id: 'google', name: 'Google', count: 1 },
  { id: 'xiaomi', name: 'Xiaomi', count: 1 },
  { id: 'oneplus', name: 'OnePlus', count: 1 },
  { id: 'motorola', name: 'Motorola', count: 1 }
];