"use client";

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

// Mock data for the page
const products = [
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка P-3 (цвет: Белый)', oldPrice: '16 830 Р', newPrice: '14 980 Р' },
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка P-3 (цвет: Антик Серебро)', oldPrice: '16 830 Р', newPrice: '7 990 Р' },
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка P-4 (цвет: Светофор)', newPrice: '10 990 Р' },
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка P-19 (цвет: Антик серебро)', newPrice: '14 980 Р' },
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка "Юниор"', newPrice: '9 500 Р' },
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка "Атлет"', newPrice: '12 200 Р' },
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка "Профи"', oldPrice: '20 000 Р', newPrice: '18 500 Р' },
  { imageUrl: '/placeholder.svg', name: 'Шведская стенка "Компакт"', newPrice: '8 990 Р' },
];

const SwedishWallsPage = () => {
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
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwedishWallsPage; 