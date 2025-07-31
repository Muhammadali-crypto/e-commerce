"use client";

import { useProductContext } from '@/components/ProductContext';
import ProductCard from '@/components/ProductCard';

export default function CartPage() {
  const { cart, isFavorite, isCompared, isInCart, toggleFavorite, toggleCompare, removeFromCart } = useProductContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Корзина</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Ваша корзина пуста. Добавьте товары, чтобы оформить заказ.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {cart.map((product, index) => (
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
                onAddToCart={() => {}}
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 text-xs hover:bg-red-600 transition"
                onClick={() => removeFromCart(product)}
              >
                Удалить❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 