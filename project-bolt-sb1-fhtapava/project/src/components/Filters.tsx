import React from 'react';
import { Filter, X } from 'lucide-react';
import { FilterState } from '../types';
import { brands, categories } from '../data/products';

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Filters: React.FC<FiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle
}) => {
  const handleBrandChange = (brandId: string) => {
    const updatedBrands = filters.brand.includes(brandId)
      ? filters.brand.filter(b => b !== brandId)
      : [...filters.brand, brandId];
    
    onFiltersChange({
      ...filters,
      brand: updatedBrands
    });
  };

  const handleCategoryChange = (categoryId: string) => {
    const updatedCategories = filters.category.includes(categoryId)
      ? filters.category.filter(c => c !== categoryId)
      : [...filters.category, categoryId];
    
    onFiltersChange({
      ...filters,
      category: updatedCategories
    });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFiltersChange({
      ...filters,
      priceRange: [min, max]
    });
  };

  const handleInStockChange = (inStock: boolean) => {
    onFiltersChange({
      ...filters,
      inStock
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      brand: [],
      priceRange: [0, 10000],
      category: [],
      inStock: false
    });
  };

  const hasActiveFilters = filters.brand.length > 0 || 
                          filters.category.length > 0 || 
                          filters.priceRange[0] > 0 || 
                          filters.priceRange[1] < 10000 ||
                          filters.inStock;

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
        >
          <Filter className="h-5 w-5" />
          <span>Filtros</span>
          {hasActiveFilters && (
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              Ativo
            </span>
          )}
        </button>
      </div>

      {/* Filter Sidebar */}
      <div className={`
        lg:block lg:static lg:w-80
        ${isOpen ? 'fixed' : 'hidden'} 
        inset-0 z-40 lg:z-auto
      `}>
        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onToggle}
          />
        )}

        {/* Filter Panel */}
        <div className={`
          bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24
          ${isOpen ? 'absolute right-4 top-4 w-80 max-h-[calc(100vh-2rem)] overflow-y-auto z-50' : ''}
        `}>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filtros</span>
            </h3>
            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Limpar
                </button>
              )}
              {isOpen && (
                <button
                  onClick={onToggle}
                  className="lg:hidden p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Faixa de Preço</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(Number(e.target.value), filters.priceRange[1])}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none slider"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(filters.priceRange[0], Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none slider"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>R$ {filters.priceRange[0].toLocaleString()}</span>
                  <span>R$ {filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Marca</h4>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand.id} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes(brand.id)}
                      onChange={() => handleBrandChange(brand.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{brand.name}</span>
                    <span className="text-sm text-gray-500">({brand.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Categoria</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category.id)}
                      onChange={() => handleCategoryChange(category.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Disponibilidade</h4>
              <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => handleInStockChange(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">Apenas em estoque</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};