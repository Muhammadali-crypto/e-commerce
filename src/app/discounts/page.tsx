"use client";

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { useProductContext } from '@/components/ProductContext';

const discountProducts = [
  { imageUrl: '/carousel1/2.png', name: 'Шведская стенка P-3 (Цвет: Антик Серебро)', oldPrice: '11 320 ₽', newPrice: '7 990 ₽' },
  { imageUrl: '/carousel1/3.png', name: 'Шведская стенка P-4 (Цвет: Светофор)', oldPrice: '14 990 ₽', newPrice: '10 990 ₽' },
  { imageUrl: '/carousel2/2.png', name: 'Комплекс "Геркулес"', oldPrice: '28 000 ₽', newPrice: '22 000 ₽' },
  { imageUrl: '/carousel3/2.png', name: 'Гантель разборная (гриф + блины) 24,1 кг', oldPrice: '6 200 ₽', newPrice: '4 260 ₽' },
  { imageUrl: '/carousel3/3.png', name: 'Гантель разборная (гриф + блины) 26,6 кг', oldPrice: '5 500 ₽', newPrice: '4 260 ₽' },
  { imageUrl: '/carousel2/3.png', name: 'Комплекс "Атлет"', oldPrice: '21 500 ₽', newPrice: '17 000 ₽' },
  { imageUrl: '/carousel1/4.png', name: 'Шведская стенка P-19 (Цвет: Антик серебро)', oldPrice: '16 830 ₽', newPrice: '14 980 ₽' },
  { imageUrl: '/carousel2/4.png', name: 'Комплекс "Профи"', oldPrice: '29 990 ₽', newPrice: '24 990 ₽' },
];

export default function DiscountsPage() {
  const { isFavorite, isCompared, isInCart, toggleFavorite, toggleCompare, addToCart } = useProductContext();
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          Товары со скидкой
        </motion.h1>
        <div className="text-lg text-gray-700 mb-10 max-w-2xl">
          Здесь вы найдете лучшие предложения и товары по сниженным ценам! Успейте купить выгодно — количество товаров ограничено.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {discountProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                imageUrl={product.imageUrl}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                isFavorite={isFavorite(product)}
                isCompared={isCompared(product)}
                isInCart={isInCart(product)}
                onToggleFavorite={() => toggleFavorite(product)}
                onToggleCompare={() => toggleCompare(product)}
                onAddToCart={() => addToCart(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 