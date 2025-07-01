"use client";

import { useProductContext } from '@/components/ProductContext';
import ProductCard from '@/components/ProductCard';

export default function FavoritesPage() {
  const { favorites, isFavorite, isCompared, isInCart, toggleFavorite, toggleCompare, addToCart } = useProductContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Избранное</h1>
      {favorites.length === 0 ? (
        <p className="text-lg text-gray-600">Здесь будут ваши избранные товары. Добавьте товары в избранное, нажав на сердечко.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {favorites.map((product, index) => (
            <ProductCard
              key={index}
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
          ))}
        </div>
      )}
    </div>
  );
} 