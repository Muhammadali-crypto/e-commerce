"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ProductItem {
  imageUrl: string;
  name: string;
  oldPrice?: string;
  newPrice: string;
  label?: string;
  labelColor?: string;
}

interface ProductContextType {
  favorites: ProductItem[];
  compare: ProductItem[];
  cart: ProductItem[];
  toggleFavorite: (item: ProductItem) => void;
  toggleCompare: (item: ProductItem) => void;
  addToCart: (item: ProductItem) => void;
  removeFromCart: (item: ProductItem) => void;
  isFavorite: (item: ProductItem) => boolean;
  isCompared: (item: ProductItem) => boolean;
  isInCart: (item: ProductItem) => boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<ProductItem[]>([]);
  const [compare, setCompare] = useState<ProductItem[]>([]);
  const [cart, setCart] = useState<ProductItem[]>([]);

  // LocalStorage sync
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    setCompare(JSON.parse(localStorage.getItem('compare') || '[]'));
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);
  useEffect(() => { localStorage.setItem('favorites', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('compare', JSON.stringify(compare)); }, [compare]);
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);

  const isSame = (a: ProductItem, b: ProductItem) => a.name === b.name && a.imageUrl === b.imageUrl;

  const toggleFavorite = (item: ProductItem) => {
    setFavorites(favs => favs.some(f => isSame(f, item)) ? favs.filter(f => !isSame(f, item)) : [...favs, item]);
  };
  const toggleCompare = (item: ProductItem) => {
    setCompare(comps => comps.some(f => isSame(f, item)) ? comps.filter(f => !isSame(f, item)) : [...comps, item]);
  };
  const addToCart = (item: ProductItem) => {
    setCart(c => c.some(f => isSame(f, item)) ? c : [...c, item]);
  };
  const removeFromCart = (item: ProductItem) => {
    setCart(c => c.filter(f => !isSame(f, item)));
  };
  const isFavorite = (item: ProductItem) => favorites.some(f => isSame(f, item));
  const isCompared = (item: ProductItem) => compare.some(f => isSame(f, item));
  const isInCart = (item: ProductItem) => cart.some(f => isSame(f, item));

  return (
    <ProductContext.Provider value={{ favorites, compare, cart, toggleFavorite, toggleCompare, addToCart, removeFromCart, isFavorite, isCompared, isInCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProductContext must be used within ProductProvider');
  return ctx;
} 