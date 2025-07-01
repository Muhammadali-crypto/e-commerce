"use client";

import { useProductContext } from '@/components/ProductContext';
import ProductCard from '@/components/ProductCard';

export default function ComparePage() {
  const { compare, isFavorite, isCompared, isInCart, toggleFavorite, toggleCompare, addToCart } = useProductContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Сравнение</h1>
      {compare.length === 0 ? (
        <p className="text-lg text-gray-600">Здесь будут ваши товары для сравнения. Добавьте товары, чтобы сравнить их характеристики.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {compare.map((product, index) => (
            <div key={index} className="relative">
              <ProductCard
                imageUrl={product.imageUrl}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                label={product.label}
                labelColor={product.labelColor}
                isFavorite={isFavorite(product)}
                isCompared={isCompared(product)}
                isInCart={isInCart(product)}
                onToggleFavorite={() => toggleFavorite(product)}
                onToggleCompare={() => toggleCompare(product)}
                onAddToCart={() => addToCart(product)}
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 text-xs hover:bg-red-600 transition"
                onClick={() => toggleCompare(product)}
              >
                Убрать
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 