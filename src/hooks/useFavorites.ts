import { useState, useEffect } from 'react';
import { Product } from '../types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (productId: string) => {
    setFavorites(prev => [...prev, productId]);
  };

  const removeFavorite = (productId: string) => {
    setFavorites(prev => prev.filter(id => id !== productId));
  };

  const toggleFavorite = (productId: string) => {
    if (favorites.includes(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };

  const isFavorite = (productId: string) => {
    return favorites.includes(productId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  };
};