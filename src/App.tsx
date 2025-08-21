import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Cart } from './components/Cart';
import { Filters } from './components/Filters';
import { useCart } from './hooks/useCart';
import { useFavorites } from './hooks/useFavorites';
import { products } from './data/products';
import { Product, FilterState } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    brand: [],
    priceRange: [0, 10000],
    category: [],
    inStock: false
  });

  const cart = useCart();
  const favorites = useFavorites();

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Brand filter
      const matchesBrand = filters.brand.length === 0 || 
                          filters.brand.includes(product.brand.toLowerCase());

      // Price filter
      const matchesPrice = product.price >= filters.priceRange[0] && 
                          product.price <= filters.priceRange[1];

      // Category filter
      const matchesCategory = filters.category.length === 0 || 
                             filters.category.includes(product.category);

      // Stock filter
      const matchesStock = !filters.inStock || product.inStock;

      return matchesSearch && matchesBrand && matchesPrice && matchesCategory && matchesStock;
    });
  }, [searchTerm, filters]);

  const featuredProducts = filteredProducts.filter(product => product.featured);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCartOpen={() => cart.setIsOpen(true)}
        cartItemCount={cart.getItemCount()}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main>
        {/* Hero Section */}
        {!searchTerm && (
          <Hero />
        )}

        {/* Featured Products */}
        {!searchTerm && featuredProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Produtos em Destaque
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubra os smartphones mais populares com as melhores ofertas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={cart.addItem}
                  onToggleFavorite={favorites.toggleFavorite}
                  isFavorite={favorites.isFavorite(product.id)}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {searchTerm ? `Resultados para "${searchTerm}"` : 'Todos os Produtos'}
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <Filters
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={showFilters}
              onToggle={() => setShowFilters(!showFilters)}
            />

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Nenhum produto encontrado
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tente ajustar seus filtros ou termo de busca
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({
                        brand: [],
                        priceRange: [0, 10000],
                        category: [],
                        inStock: false
                      });
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Limpar Filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={cart.addItem}
                      onToggleFavorite={favorites.toggleFavorite}
                      isFavorite={favorites.isFavorite(product.id)}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold">MobileStore</h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                A melhor loja de smartphones do Brasil. Produtos originais, 
                garantia estendida e entrega rápida em todo o país.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <h4 className="font-semibold">Frete Grátis</h4>
                  <p className="text-gray-400 text-sm">Compras acima de R$ 299</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 (11) 9999-9999</li>
                <li>📧 contato@mobilestore.com</li>
                <li>🕐 Seg-Sex: 8h às 18h</li>
                <li>🕐 Sáb: 8h às 14h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MobileStore. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
        onAddToCart={cart.addItem}
        onToggleFavorite={favorites.toggleFavorite}
        isFavorite={selectedProduct ? favorites.isFavorite(selectedProduct.id) : false}
      />

      {/* Cart */}
      <Cart
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onClearCart={cart.clearCart}
        total={cart.getTotal()}
      />
    </div>
  );
}

export default App;