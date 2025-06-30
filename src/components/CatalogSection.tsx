import React from 'react';
import { Anchor, Dumbbell, Heart, Home, List, Minus, Shield, Users } from 'lucide-react';

const categories = [
  { name: 'Шведские стенки', icon: Home, href: '/swedish-walls' },
  { name: 'Турники', icon: Minus, href: '#' },
  { name: 'Уличные комплексы', icon: Users, href: '/outdoor-complexes' },
  { name: 'Тяжелая атлетика', icon: Dumbbell, href: '#', isHighlighted: true },
  { name: 'Стойки под штангу', icon: Anchor, href: '#' },
  { name: 'Единоборства', icon: Shield, href: '#' },
  { name: 'Фитнес', icon: Heart, href: '#' },
  { name: 'Весь каталог', icon: List, href: '#' },
];

const CatalogSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Каталог товаров</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a key={category.name} href={category.href} className="group block text-center">
                <div className={`bg-white rounded-2xl p-6 flex flex-col items-center justify-center h-full aspect-square transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${category.isHighlighted ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                  <div className="mb-4">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className={`font-semibold ${category.isHighlighted ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-600'}`}>
                    {category.name}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogSection; 