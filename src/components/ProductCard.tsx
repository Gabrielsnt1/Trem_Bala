import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  onViewDetails
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{discountPercentage}%
            </span>
          )}
          {product.featured && (
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Destaque
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Esgotado
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onToggleFavorite(product.id)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
              isFavorite 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => onViewDetails(product)}
            className="p-2 bg-white/80 backdrop-blur-sm text-gray-600 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="w-full bg-white text-gray-900 py-2 px-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="font-medium">{product.brand}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full capitalize">
            {product.category.replace('-', ' ')}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} avaliações)
          </span>
        </div>

        {/* Key Specs */}
        <div className="space-y-1 mb-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Armazenamento:</span>
            <span className="font-medium">{product.specs.storage}</span>
          </div>
          <div className="flex justify-between">
            <span>RAM:</span>
            <span className="font-medium">{product.specs.ram}</span>
          </div>
          <div className="flex justify-between">
            <span>Câmera:</span>
            <span className="font-medium">{product.specs.camera}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};