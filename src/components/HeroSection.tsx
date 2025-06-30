"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-white py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="border-2 border-blue-300 rounded-xl p-0.5">
          <div className="flex flex-col md:flex-row gap-0.5">
            {/* Main Banner */}
            <div className="md:w-2/3 bg-white rounded-l-xl">
              <div className="bg-blue-50/50 rounded-l-xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center h-full relative">
                <div className="w-full sm:w-1/2 z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-2 sm:mb-4 leading-tight">
                    Соберите шведскую стенку по своему желанию!
                  </h2>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-4 sm:px-8 py-2 sm:py-4 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base">
                    Перейти в конструктор
                  </button>
                </div>
                <div className="w-full sm:w-1/2 flex justify-center items-center mt-4 sm:mt-0">
                  <Image 
                    src="/carousel-hero.png" 
                    alt="Шведская стенка" 
                    width={220} 
                    height={220} 
                    className="object-contain w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80"
                  />
                </div>
              </div>
            </div>

            {/* Side Banners */}
            <div className="md:w-1/3 flex flex-col gap-0.5 mt-4 md:mt-0">
              <div className="bg-white p-3 sm:p-6 flex-1 rounded-tr-xl">
                <div className="flex gap-2 sm:gap-4 items-center h-full bg-gray-50/80 rounded-lg p-2 sm:p-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base">Собственное швейное производство</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Приглашаем к сотрудничеству</p>
                    <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold mt-2 sm:mt-4 inline-flex items-center hover:text-blue-800">
                      Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <Image 
                    src="/side-banners/1.jpg" 
                    alt="Собственное швейное производство"
                    width={64}
                    height={64}
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-3 sm:p-6 flex-1 rounded-br-xl mt-2 md:mt-0">
                 <div className="flex gap-2 sm:gap-4 items-center h-full bg-gray-50/80 rounded-lg p-2 sm:p-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base">Посетите наш шоу-рум!</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Н.Новгород, ул.Народная 20</p>
                    <p className="text-xs sm:text-sm text-gray-500">Ежедневно с 9:00 до 19:00</p>
                    <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold mt-2 sm:mt-4 inline-flex items-center hover:text-blue-800">
                      Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <Image
                    src="/side-banners/2.png"
                    alt="Посетите наш шоу-рум!"
                    width={64}
                    height={64}
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 