"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Heart, BarChart3, ShoppingCart, Phone, User, MapPin, Menu, X } from 'lucide-react';

const SportovaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const catalogItems = [
    'Футбол', 'Баскетбол', 'Теннис', 'Плавание', 'Бег', 'Фитнес', 'Волейбол', 'Хоккей'
  ];

  return (
    <div className="w-full bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-8 sm:h-10 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-6">
              <div className="flex items-center text-blue-600">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span>Нижний Новгород</span>
              </div>
              <div className="hidden md:flex space-x-2 sm:space-x-4 text-gray-600">
                <Link href="/promotions" className="hover:text-red-500 transition-colors">Акции</Link>
                <Link href="/how-to-order" className="hover:text-red-500 transition-colors">Как заказать</Link>
                <Link href="/about" className="hover:text-red-500 transition-colors">О компании</Link>
                <Link href="/delivery-and-payment" className="hover:text-red-500 transition-colors">Доставка и Оплата</Link>
                <Link href="/guarantees" className="hover:text-red-500 transition-colors">Гарантии</Link>
                <Link href="/contacts" className="hover:text-red-500 transition-colors">Контакты</Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center text-gray-700">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="font-semibold text-xs sm:text-sm">8800 550-22-16</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 flex items-center justify-center rounded-md mr-2 sm:mr-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-600">SPORTOVA</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">СПОРТИВНЫЕ КОМПЛЕКСЫ</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xs sm:max-w-xl mx-2 sm:mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по сайту"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-2 sm:pl-12 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-xs sm:text-base"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-3 sm:space-x-6">
            <button className="text-gray-600 hover:text-red-500 transition-colors" title="Избранное">
              <Heart className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
            
            <button className="text-gray-600 hover:text-red-500 transition-colors" title="Сравнение">
              <BarChart3 className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
            
            <button className="flex items-center text-left text-xs sm:text-sm text-gray-600 hover:text-red-500 transition-colors">
              <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7 mr-1 sm:mr-2" />
              <div>
                <div className="font-medium">Корзина (0)</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Нет товаров</div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              {/* Catalog Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('catalog')}
                  className="flex items-center space-x-1 px-4 py-2 hover:bg-blue-700 rounded transition-colors h-12"
                >
                  <Menu className="w-4 h-4" />
                  <span>Каталог товаров</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'catalog' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {catalogItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/swedish-walls" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Шведские стенки
              </Link>
              <Link href="/outdoor-complexes" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Уличные комплексы
              </Link>
              <a href="#" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Турники
              </a>
              <a href="#" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Тяжелая атлетика
              </a>
            </div>
            
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-1 px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition-colors">
                <span className="text-sm">%</span>
                <span>Товары со скидкой</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {/* Добавляем ссылки в мобильное меню */}
              <Link href="/promotions" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Акции
              </Link>
              <Link href="/how-to-order" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Как заказать
              </Link>
              <Link href="/about" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                О компании
              </Link>
              <Link href="/delivery-and-payment" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Доставка и Оплата
              </Link>
              <Link href="/guarantees" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Гарантии
              </Link>
              <Link href="/contacts" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Контакты
              </Link>
              
              <button
                onClick={() => toggleDropdown('mobileCatalog')}
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-blue-700 rounded transition-colors"
              >
                <span>Каталог товаров</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'mobileCatalog' && (
                <div className="pl-4 space-y-1">
                  {catalogItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-blue-200 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
              
              <Link href="/swedish-walls" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Шведские стенки
              </Link>
              <Link href="/outdoor-complexes" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Уличные комплексы
              </Link>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Турники
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Тяжелая атлетика
              </a>
              <div className="px-4 py-2 bg-orange-500 rounded mx-4">
                <span>% Товары со скидкой</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SportovaNavbar; 