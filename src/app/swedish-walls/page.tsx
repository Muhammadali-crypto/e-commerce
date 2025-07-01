"use client";

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { useProductContext } from '@/components/ProductContext';

// Mock data for the page
const products = [
  { imageUrl: '/carousel1/1.png', name: 'Шведская стенка P-3 (цвет: Белый)', oldPrice: '16 830 Р', newPrice: '14 980 Р' },
  { imageUrl: '/carousel1/2.png', name: 'Шведская стенка P-7 (цвет: черный)', oldPrice: '16 830 Р', newPrice: '7 990 Р' },
  { imageUrl: '/carousel1/3.png', name: 'Шведская стенка P-6 (цвет: Светафор2)', oldPrice: '16 830 Р', newPrice: '7 990 Р' },
  { imageUrl: '/carousel1/4.png', name: 'Шведская стенка P-5 (цвет: юниор)', oldPrice: '16 830 Р', newPrice: '7 990 Р' },
  { imageUrl: '/carousel1/3.png', name: 'Шведская стенка P-4 (цвет: Светофор)', newPrice: '10 990 Р' },
  { imageUrl: '/carousel1/2.png', name: 'Шведская стенка P-19 (цвет: Антик серебро)', newPrice: '14 980 Р' },
  { imageUrl: '/carousel1/3.png', name: 'Шведская стенка "светофор"', newPrice: '9 500 Р' },
  { imageUrl: '/carousel1/4.png', name: 'Шведская стенка "Атлет"', newPrice: '12 200 Р' },
  { imageUrl: '/carousel1/1.png', name: 'Шведская стенка "Профи"', oldPrice: '20 000 Р', newPrice: '18 500 Р' },
  { imageUrl: '/carousel1/2.png', name: 'Шведская стенка "Компакт"', newPrice: '8 990 Р' },
  { imageUrl: '/carousel2/1.png', name: 'Шведская стенка P-8 (цвет: Красный)', oldPrice: '15 000 Р', newPrice: '12 500 Р' },
  { imageUrl: '/carousel2/2.png', name: 'Шведская стенка P-9 (цвет: Синий)', oldPrice: '15 500 Р', newPrice: '13 000 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка P-10 (цвет: Желтый)', oldPrice: '16 000 Р', newPrice: '13 500 Р' },
  { imageUrl: '/carousel2/4.png', name: 'Шведская стенка P-11 (цвет: Зеленый)', oldPrice: '16 500 Р', newPrice: '14 000 Р' },
  { imageUrl: '/carousel3/1.png', name: 'Шведская стенка P-12 (цвет: Оранжевый)', oldPrice: '17 000 Р', newPrice: '14 500 Р' },
  { imageUrl: '/carousel3/2.png', name: 'Шведская стенка P-13 (цвет: Фиолетовый)', oldPrice: '17 500 Р', newPrice: '15 000 Р' },
  { imageUrl: '/carousel3/3.png', name: 'Шведская стенка P-14 (цвет: Серый)', oldPrice: '18 000 Р', newPrice: '15 500 Р' },
  { imageUrl: '/carousel3/4.png', name: 'Шведская стенка P-15 (цвет: Черный)', oldPrice: '18 500 Р', newPrice: '16 000 Р' },
];

const SwedishWallsPage = () => {
  const { isFavorite, isCompared, isInCart, toggleFavorite, toggleCompare, addToCart } = useProductContext();
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-8"
        >
          Шведские стенки
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
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
};

export default SwedishWallsPage; 