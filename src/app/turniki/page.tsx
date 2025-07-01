"use client";

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { useProductContext } from '@/components/ProductContext';

const products = [
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка P-3 (цвет: Белый)', oldPrice: '16 830 Р', newPrice: '14 980 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка P-7 (цвет: черный)', oldPrice: '16 830 Р', newPrice: '7 990 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка P-6 (цвет: Светафор2)', oldPrice: '16 830 Р', newPrice: '7 990 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка P-5 (цвет: юниор)', oldPrice: '16 830 Р', newPrice: '7 990 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка P-4 (цвет: Светофор)', newPrice: '10 990 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка P-19 (цвет: Антик серебро)', newPrice: '14 980 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка "светофор"', newPrice: '9 500 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка "Атлет"', newPrice: '12 200 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка "Профи"', oldPrice: '20 000 Р', newPrice: '18 500 Р' },
  { imageUrl: '/carousel2/3.png', name: 'Шведская стенка "Компакт"', newPrice: '8 990 Р' },
];

const TurnikiPage = () => {
  const { isFavorite, isCompared, isInCart, toggleFavorite, toggleCompare, addToCart } = useProductContext();
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Турники
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src="/carousel2/3.png" alt="Турник" className="w-60 h-60 object-contain rounded-xl shadow bg-white" />
          <div className="text-lg text-gray-700 max-w-2xl">
            <b>Турники</b> — это универсальный спортивный снаряд для дома и улицы. Они позволяют развивать силу, выносливость, гибкость и поддерживать отличную физическую форму. На турнике можно выполнять подтягивания, упражнения на пресс, различные виды висов и многое другое. В нашем каталоге вы найдете турники для любого возраста и уровня подготовки!
          </div>
        </div>
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

export default TurnikiPage; 