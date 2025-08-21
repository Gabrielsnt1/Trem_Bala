import React from 'react';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzIxMjEyMSIgZmlsbC1vcGFjaXR5PSIwLjA0Ij4KPHBhdGggZD0iTTM2IDE0djEyaDEyVjE0SDM2ek0wIDJ2MTJoMTJWMkgwem0yNCAyNHYxMmgxMlYyNkgyNHoiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Os Melhores{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Smartphones
              </span>{' '}
              do Mercado
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Descubra nossa seleção exclusiva de celulares premium com tecnologia de ponta, 
              preços competitivos e garantia estendida.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-blue-100">Entrega Rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-500/20 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="text-blue-100">5 Estrelas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-blue-100">Garantia Total</span>
              </div>
            </div>

            {/* CTA */}
            <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span>Ver Produtos</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Smartphone Premium"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Em Estoque</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-sm">Desconto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};