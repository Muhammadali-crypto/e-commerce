"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Heart, BarChart3, ShoppingCart, MapPin, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useProductContext } from './ProductContext';

const SportovaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  
  const { favorites, compare, cart } = useProductContext();

  // Товары со скидкой
  const discountProducts = [
    {
      name: 'Шведская стенка Premium',
      oldPrice: '150,000',
      newPrice: '120,000',
      discount: '20%',
      image: '/carousel1/1.png'
    },
    {
      name: 'Турник многоуровневый',
      oldPrice: '85,000',
      newPrice: '68,000',
      discount: '20%',
      image: '/carousel2/1.png'
    },
    {
      name: 'Уличный комплекс "Спорт"',
      oldPrice: '200,000',
      newPrice: '160,000',
      discount: '20%',
      image: '/carousel3/1.png'
    },
    {
      name: 'Гантели набор 20кг',
      oldPrice: '45,000',
      newPrice: '36,000',
      discount: '20%',
      image: '/carousel1/2.png'
    }
  ];

  const catalogLinks = [
    { 
      name: 'Футбол', 
      href: '/catalog/football', 
      image: '/спорты/футбол.png',
      description: 'Командная игра с мячом, развивает выносливость и координацию'
    },
    { 
      name: 'Баскетбол', 
      href: '/catalog/basketball', 
      image: '/спорты/баскетбол.png',
      description: 'Динамичная игра, улучшает прыгучесть и точность бросков'
    },
    { 
      name: 'Теннис', 
      href: '/catalog/tennis', 
      image: '/спорты/теннис.png',
      description: 'Индивидуальный спорт, развивает реакцию и стратегическое мышление'
    },
    { 
      name: 'Плавание', 
      href: '/catalog/swimming', 
      image: '/спорты/плавание.png',
      description: 'Отличная кардиотренировка, укрепляет все группы мышц'
    },
    { 
      name: 'Бег', 
      href: '/catalog/running', 
      image: '/спорты/бег.png',
      description: 'Естественное движение, улучшает сердечно-сосудистую систему'
    },
    { 
      name: 'Фитнес', 
      href: '/catalog/fitness', 
      image: '/спорты/фитнес.png',
      description: 'Комплексные тренировки для поддержания формы и здоровья'
    },
    { 
      name: 'Волейбол', 
      href: '/catalog/volleyball', 
      image: '/спорты/волейбол.png',
      description: 'Командная игра, развивает прыгучесть и командную работу'
    },
    { 
      name: 'Хоккей', 
      href: '/catalog/hockey', 
      image: '/спорты/хоккей.png',
      description: 'Быстрая игра на льду, улучшает скорость и координацию'
    },
  ];

  return (
    <>
      <div className="w-full bg-white shadow-lg">
        {/* Top Bar */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex items-center justify-between h-12 text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-blue-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>г. Самарканд</span>
                </div>
                <div className="hidden md:flex space-x-4 text-gray-600">
                  <Link href="/promotions" className="hover:text-red-500 transition-colors">Акции</Link>
                  <Link href="/how-to-order" className="hover:text-red-500 transition-colors">Как заказать</Link>
                  <Link href="/about" className="hover:text-red-500 transition-colors">О компании</Link>
                  <Link href="/delivery-and-payment" className="hover:text-red-500 transition-colors">Доставка и Оплата</Link>
                  <Link href="/guarantees" className="hover:text-red-500 transition-colors">Гарантии</Link>
                  <Link href="/contacts" className="hover:text-red-500 transition-colors">Контакты</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 rounded text-blue-600 font-medium shadow-sm hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                  Заказать звонок
                </button>
                <Link href="/products" className="px-4 py-2 rounded bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition-all duration-300">
                  Продукты
                </Link>
                <div className="flex items-center space-x-3">
                  <button className="px-3 py-1.5 rounded text-blue-600 font-medium text-sm shadow-sm hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                    <Link href="/register">
                    Создать аккаунт
                    </Link>
                  </button>
                  <button className="px-3 py-1.5 rounded bg-orange-500 text-white font-medium text-sm shadow-sm hover:bg-orange-600 transition-all duration-300">
                    <Link href="/login">
                    Войти
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-blue-600">SPORTOVA</span>
                  <span className="text-xs text-blue-500">СПОРТИВНЫЕ КОМПЛЕКСЫ</span>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Поиск по сайту"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <Link href="/favorites" className="relative p-2 text-gray-900 hover:text-red-500 transition-colors">
                <Heart className="w-6 h-6" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {favorites.length}
                  </span>
                )}
              </Link>
              
              <Link href="/compare" className="relative p-2 text-gray-900 hover:text-blue-500 transition-colors">
                <BarChart3 className="w-6 h-6" />
                {compare.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {compare.length}
                  </span>
                )}
              </Link>
              
              <Link href="/cart" className="relative p-2 text-gray-900 hover:text-green-500 transition-colors flex items-center space-x-2">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {cart.length}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-900">Корзина ({cart.length})</span>
                  <span className="text-xs text-gray-500">
                    {cart.length === 0 ? 'Нет товаров' : `${cart.length} товар${cart.length === 1 ? '' : cart.length < 5 ? 'а' : 'ов'}`}
                  </span>
                </div>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Main Categories Navigation - Blue Bar */}
        <div className="bg-blue-600 relative">
          <div className="max-w-screen-xl mx-auto px-4">
            <nav className="flex items-center justify-between h-12">
              <div className="flex items-center gap-20">
                <button 
                  onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                  className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors cursor-pointer"
                >
                  <Menu className="w-5 h-5" />
                  <span className="font-medium">Каталог товаров</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className="flex items-center gap-16">
                  <Link href="/swedish-walls" className="text-white hover:text-blue-200 transition-colors font-medium">
                    Шведские стенки
                  </Link>
                  <Link href="/outdoor-complexes" className="text-white hover:text-blue-200 transition-colors font-medium">
                    Уличные комплексы
                  </Link>
                  <Link href="/turniki" className="text-white hover:text-blue-200 transition-colors font-medium">
                    Турники
                  </Link>
                  <Link href="/tyazhelaya-atletika" className="text-white hover:text-blue-200 transition-colors font-medium">
                    Тяжелая атлетика
                  </Link>
                </div>
              </div>
              
              <div>
                <button 
                  onClick={() => setIsDiscountOpen(!isDiscountOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors cursor-pointer"
                >
                  <span>%</span>
                  <span>Товары со скидкой</span>
                </button>
              </div>
            </nav>
          </div>

          {/* Catalog Dropdown */}
          {isCatalogOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
              <div className="max-w-screen-xl mx-auto px-4 py-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Спортивные категории</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {catalogLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 group border border-gray-200 hover:border-blue-300 hover:shadow-md"
                      onClick={() => setIsCatalogOpen(false)}
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mb-3 group-hover:bg-blue-100 transition-colors">
                        <Image 
                          src={link.image} 
                          alt={link.name} 
                          width={48} 
                          height={48} 
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors text-center mb-2">
                        {link.name}
                      </span>
                      <p className="text-xs text-gray-500 text-center leading-relaxed group-hover:text-gray-700 transition-colors">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Discount Products Dropdown */}
          {isDiscountOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
              <div className="max-w-screen-xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-red-600">🔥 Товары со скидкой</h3>
                  <button 
                    onClick={() => setIsDiscountOpen(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Закрыть товары со скидкой"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {discountProducts.map((product, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                      <div className="relative">
                        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            width={200} 
                            height={200} 
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                          {product.discount}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {product.name}
                        </h4>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-gray-500 line-through text-sm">
                            {product.oldPrice} сум
                          </span>
                          <span className="text-red-600 font-bold text-lg">
                            {product.newPrice} сум
                          </span>
                        </div>
                        
                        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium">
                          Добавить в корзину
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по сайту"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            
            {/* Mobile Catalog */}
            <div className="pt-4">
              <h3 className="font-medium text-gray-900 mb-3">Каталог товаров</h3>
              <div className="grid grid-cols-2 gap-2">
                {catalogLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image src={link.image} alt={link.name} width={24} height={24} className="rounded" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SportovaNavbar; 