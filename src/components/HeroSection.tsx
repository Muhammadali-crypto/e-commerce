"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const heroImages = [
  '/carousel-hero.png',
  '/carousel1/1.png',
  '/carousel1/2.png',
  '/carousel1/3.png',
  '/carousel2/1.png',
  '/carousel2/2.png',
  '/carousel2/3.png',
  '/carousel2/4.png',
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const total = heroImages.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="bg-white py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="border-2 border-blue-300 rounded-xl p-0.5">
          <div className="flex flex-col md:flex-row gap-0.5">
            {/* Main Banner с фоновым слайдером */}
            <div className="md:w-2/3 bg-white rounded-l-xl relative overflow-hidden flex flex-col justify-between min-h-[340px]">
              {/* Фоновое изображение слайдера */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={heroImages[current]}
                  alt="Шведская стенка"
                  fill
                  className="object-cover w-full h-full opacity-70"
                  style={{zIndex: 0}}
                />
                <div className="absolute inset-0 bg-white/60" />
              </div>
              {/* Стрелки и счетчик поверх */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow p-2 hover:bg-blue-100 z-20"
                aria-label="Предыдущий слайд"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow p-2 hover:bg-blue-100 z-20"
                aria-label="Следующий слайд"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="absolute right-8 bottom-6 bg-white/80 rounded px-3 py-1 text-gray-700 text-sm font-semibold shadow z-20">
                {current + 1} / {total}
              </div>
              {/* Контент поверх фона */}
              <div className="relative z-10 bg-transparent p-4 sm:p-6 md:p-8 flex flex-col h-full justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-2 sm:mb-4 leading-tight drop-shadow-md">
                  Соберите шведскую стенку по своему желанию!
                </h2>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base drop-shadow">
                  Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.
                </p>
                <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-4 sm:px-8 py-2 sm:py-4 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base w-fit">
                  Перейти в конструктор
                </button>
              </div>
            </div>
            {/* Side Banners справа */}
            <div className="md:w-1/3 flex flex-col gap-0.5 mt-4 md:mt-0">
              <div className="bg-white p-3 flex-1 rounded-xl">
                <div className="flex gap-2 items-center h-full bg-gray-50/80 rounded-lg p-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm">Собственное швейное производство</h3>
                    <p className="text-xs text-gray-500 mt-1">Приглашаем к сотрудничеству</p>
                    <a href="#" className="text-blue-600 text-xs font-semibold mt-2 inline-flex items-center hover:text-blue-800">
                      Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <Image src="/side-banners/1.jpg" alt="Собственное швейное производство" width={64} height={64} className="w-16 h-16 rounded-lg object-cover" />
                </div>
              </div>
              <div className="bg-white p-3 flex-1 rounded-xl mt-2">
                <div className="flex gap-2 items-center h-full bg-gray-50/80 rounded-lg p-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm">Посетите наш шоу-рум!</h3>
                    <p className="text-xs text-gray-500 mt-1">Н.Новгород, ул.Народная 20</p>
                    <p className="text-xs text-gray-500">Ежедневно с 9:00 до 19:00</p>
                    <a href="#" className="text-blue-600 text-xs font-semibold mt-2 inline-flex items-center hover:text-blue-800">
                      Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <Image src="/side-banners/2.png" alt="Посетите наш шоу-рум!" width={64} height={64} className="w-16 h-16 rounded-lg object-cover" />
                </div>
              </div>
            </div>
          </div>
          {/* Side Banners на мобильных */}
          <div className="md:hidden flex flex-col gap-2 mt-4 w-full">
            <div className="bg-white p-3 flex-1 rounded-xl">
              <div className="flex gap-2 items-center h-full bg-gray-50/80 rounded-lg p-2">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm">Собственное швейное производство</h3>
                  <p className="text-xs text-gray-500 mt-1">Приглашаем к сотрудничеству</p>
                  <a href="#" className="text-blue-600 text-xs font-semibold mt-2 inline-flex items-center hover:text-blue-800">
                    Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <Image src="/side-banners/1.jpg" alt="Собственное швейное производство" width={64} height={64} className="w-16 h-16 rounded-lg object-cover" />
              </div>
            </div>
            <div className="bg-white p-3 flex-1 rounded-xl mt-2">
              <div className="flex gap-2 items-center h-full bg-gray-50/80 rounded-lg p-2">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm">Посетите наш шоу-рум!</h3>
                  <p className="text-xs text-gray-500 mt-1">Н.Новгород, ул.Народная 20</p>
                  <p className="text-xs text-gray-500">Ежедневно с 9:00 до 19:00</p>
                  <a href="#" className="text-blue-600 text-xs font-semibold mt-2 inline-flex items-center hover:text-blue-800">
                    Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <Image src="/side-banners/2.png" alt="Посетите наш шоу-рум!" width={64} height={64} className="w-16 h-16 rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 