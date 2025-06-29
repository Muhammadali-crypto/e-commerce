"use client";

import React, { useState } from 'react';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-blue-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Нижний Новгород</span>
              </div>
              <div className="hidden md:flex space-x-4 text-gray-600">
                <a href="#" className="hover:text-red-500 transition-colors">Акции</a>
                <a href="#" className="hover:text-red-500 transition-colors">Как заказать</a>
                <a href="#" className="hover:text-red-500 transition-colors">О компании</a>
                <a href="#" className="hover:text-red-500 transition-colors">Доставка и Оплата</a>
                <a href="#" className="hover:text-red-500 transition-colors">Гарантии</a>
                <a href="#" className="hover:text-red-500 transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 mr-1" />
                <span className="font-semibold">8800 550-22-16</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-red-500">SPORTOVA</h1>
                  <p className="text-xs text-gray-500">спортивные комплексы</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по сайту"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors relative">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
            
            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors relative" title="Сравнение">
              <BarChart3 className="w-6 h-6" />
            </button>
            
            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
              <div className="text-xs text-gray-500 mt-1">0 товаров</div>
            </button>

            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors" title="Профиль">
              <User className="w-6 h-6" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center space-x-8 h-12">
            {/* Catalog Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('catalog')}
                className="flex items-center space-x-1 px-4 py-2 hover:bg-blue-700 rounded transition-colors"
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

            <a href="#" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
              Шведские стенки
            </a>
            <a href="#" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
              Уличные комплексы
            </a>
            <a href="#" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
              Турники
            </a>
            <a href="#" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
              Тяжелая атлетика
            </a>
            
            <div className="flex items-center space-x-1 px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition-colors">
              <span className="text-sm">%</span>
              <span>Товары со скидкой</span>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
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
              
              <a href="#" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Шведские стенки
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Уличные комплексы
              </a>
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