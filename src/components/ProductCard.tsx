"use client";

import React from 'react';
import Image from 'next/image';
import { Heart, BarChart3, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  oldPrice?: string;
  newPrice: string;
  label?: string;
  labelColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, oldPrice, newPrice, label, labelColor }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-blue-300">
      <div className="relative p-4">
        <Image src={imageUrl} alt={name} width={300} height={300} className="w-full h-60 object-contain transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow hover:text-red-500 transition-colors" aria-label="Добавить в избранное">
            <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:text-blue-500 transition-colors" aria-label="Сравнить">
            <BarChart3 className="w-5 h-5 text-gray-500 hover:text-blue-500" />
          </button>
        </div>
        {label && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: labelColor }}>
            {label}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-700 flex-grow mb-2 transition-colors group-hover:text-blue-600">{name}</h3>
        <div className="flex items-end justify-between mt-auto">
            <div>
                {oldPrice && <p className="text-xs text-gray-400 line-through">{oldPrice}</p>}
                <p className={`text-lg font-bold transition-colors ${oldPrice ? 'text-red-500' : 'text-gray-800'}`}>{newPrice}</p>
            </div>
            <button className="border border-gray-300 text-gray-600 p-2.5 rounded-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors" aria-label="Добавить в корзину">
                <ShoppingCart className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 