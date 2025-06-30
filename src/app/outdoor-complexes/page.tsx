"use client";

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

const products = [
    { imageUrl: '/placeholder.svg', name: 'УСК Веселый дворик', newPrice: '27 590 Р' },
    { imageUrl: '/placeholder.svg', name: 'Спортивный детский комплекс "Юниор Плюс"', oldPrice: '18 500 Р', newPrice: '15 990 Р' },
    { imageUrl: '/placeholder.svg', name: 'Детский уличный спортивный комплекс «Юнга»', oldPrice: '23 800 Р', newPrice: '19 490 Р' },
    { imageUrl: '/placeholder.svg', name: 'Уличный спортивный турник Романа', newPrice: '22 990 Р' },
    { imageUrl: '/placeholder.svg', name: 'Комплекс "Workout"', newPrice: '35 000 Р' },
    { imageUrl: '/placeholder.svg', name: 'Комплекс "Силач"', newPrice: '29 990 Р' },
];

const OutdoorComplexesPage = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-gray-800 mb-8"
                >
                    Уличные комплексы
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

export default OutdoorComplexesPage; 