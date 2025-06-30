"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, Home, Package, Settings, Plane } from 'lucide-react';

const images = [
  '/carousel-about/1.png',
  '/carousel-about/2.png',
  '/carousel-about/3.png',
];

const smallImages = [
  '/carousel-about/1.png',
  '/carousel-about/2.png',
  '/carousel-about/3.png',
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const benefits = [
    { icon: Home, text1: 'Выставочный зал', text2: 'на 450 кв.м' },
    { icon: Package, text1: '90% товара', text2: 'в наличии на складе' },
    { icon: Settings, text1: 'Монтаж', text2: 'опытными специалистами' },
    { icon: Plane, text1: 'Отправляем в регионы', text2: 'с оплатой при получении' },
  ];

  const features = [
    'Узкая специализация. Мы знаем больше нюансов и потребностей клиента, чем магазины, которые продают все подряд. Соответственно, сможем лучше проконсультировать и подобрать необходимый Вам комплекс;',
    '90% ассортимента держим в наличии на складе в Нижнем Новгороде и Москве;',
    'Выставочный зал, где все оборудование надежно закреплено. Вы можете протестировать комплексы еще до покупки;',
    'Если Вам необходима сборка шведской стенки, детской площадки или турника – мы предоставляем такую услугу. В компании работают опытные и аккуратные специалисты. Также мы оказываем услугу по укорачиванию шведской стенки;',
    'Если товар не подошел, Вы можете его обменять или вернуть в течение расширенного срока в 30 дней;',
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">О компании</h2>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Компания «Sportova» специализируется на продаже шведских стенок, детских площадок и тренажеров. Мы являемся официальными дилерами ведущих производителей шведских стенок и детских площадок.
              </p>
            </div>
            <a href="#" className="text-blue-600 font-semibold flex items-center whitespace-nowrap">
              Подробнее <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-4 flex items-center gap-4">
                <benefit.icon className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-sm text-gray-800">{benefit.text1}</p>
                  <p className="text-sm text-gray-600">{benefit.text2}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <Image 
                src={images[currentIndex]} 
                alt="Наш шоу-рум" 
                width={800} 
                height={600} 
                className="rounded-xl object-cover w-full aspect-[4/3]"
                key={currentIndex}
              />
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition" aria-label="Previous slide">
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition" aria-label="Next slide">
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
              <div className="flex gap-2 mt-2">
                {smallImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)} 
                    className={`w-1/4 rounded-lg overflow-hidden border-2 ${currentIndex === idx ? 'border-blue-500' : 'border-transparent'}`}
                    aria-label={`Переключить на изображение ${idx + 1}`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} width={200} height={150} className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-orange-400 rounded-full mr-3 mt-1"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 