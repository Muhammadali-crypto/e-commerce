"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Heart, BarChart3, ShoppingCart, Phone, User, MapPin, Menu, X } from 'lucide-react';
import { useProductContext } from './ProductContext';
import Image from 'next/image';
// import './Login' 
// import './SignUp';


// Тип для элемента каталога
type CatalogLink = {
  name: string;
  href: string;
  image: string;
};

const SportovaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCatalog, setSelectedCatalog] = useState<CatalogLink | null>(null);
  const { favorites, compare, cart } = useProductContext();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const catalogItems = [
    'Футбол', 'Баскетбол', 'Теннис', 'Плавание', 'Бег', 'Фитнес', 'Волейбол', 'Хоккей'
  ];

  const catalogLinks = [
    { name: 'Футбол', href: '/catalog/football', image: '/спорты/футбол.png' },
    { name: 'Баскетбол', href: '/catalog/basketball', image: '/спорты/баскетбол.png' },
    { name: 'Теннис', href: '/catalog/tennis', image: '/спорты/теннис.png' },
    { name: 'Плавание', href: '/catalog/swimming', image: '/спорты/плавание.png' },
    { name: 'Бег', href: '/catalog/running', image: '/спорты/бег.png' },
    { name: 'Фитнес', href: '/catalog/fitness', image: '/спорты/фитнес.png' },
    { name: 'Волейбол', href: '/catalog/volleyball', image: '/спорты/волейбол.png' },
    { name: 'Хоккей', href: '/catalog/hockey', image: '/спорты/хоккей.png' },
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
                <span>г. Самарканд</span>
              </div>
              <div className="hidden md:flex space-x-2 sm:space-x-4 text-gray-600">
                <Link href="/promotions" className="hover:text-red-500 transition-colors">Акции</Link>
                <Link href="/how-to-order" className="hover:text-red-500 transition-colors">Как заказать</Link>
                <Link href="/about" className="hover:text-red-500 transition-colors">О компании</Link>
                <Link href="/delivery-and-payment" className="hover:text-red-500 transition-colors">Доставка и Оплата</Link>
                <Link href="/guarantees" className="hover:text-red-500 transition-colors">Гарантии</Link>
                <Link href="/contacts" className="hover:text-red-500 transition-colors">Контакты</Link>
                {/* <Link href="/products" className="hover:text-red-500 transition-colors">Продукты</Link> */}
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center text-gray-700">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="font-semibold text-xs sm:text-sm">+998-(91)-524-07-55</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm">
                Заказать звонок
              </button>
              {/* Кнопки Войти и Зарегистрироваться */}
              <div className="flex gap-2">
                <Link
                  href="/register"
                  className="px-4 py-1.5 rounded bg-blue-50 text-blue-600 font-medium text-sm shadow-sm hover:bg-blue-100 transition-all duration-300"
                  style={{ boxShadow: "0 2px 8px 0 #e0f0ff" }}
                >
                  Создать аккаунт
                </Link>
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded bg-orange-500 text-white font-medium text-sm hover:bg-orange-600 transition-all duration-300"
                >
                  Войти 
                </Link>
              </div>
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
            <Link href="/favorites" className="relative text-gray-600 hover:text-red-500 transition-colors" title="Избранное">
              <Heart className="w-5 h-5 sm:w-7 sm:h-7" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center animate-pulse">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link href="/compare" className="relative text-gray-600 hover:text-red-500 transition-colors" title="Сравнение">
              <BarChart3 className="w-5 h-5 sm:w-7 sm:h-7" />
              {compare.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center animate-pulse">
                  {compare.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative flex items-center text-left text-xs sm:text-sm text-gray-600 hover:text-red-500 transition-colors">
              <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7 mr-1 sm:mr-2" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center animate-pulse">
                  {cart.length}
                </span>
              )}
              <div>
                <div className="font-medium">Корзина ({cart.length})</div>
                <div className="text-[10px] sm:text-xs text-gray-500">{cart.length === 0 ? 'Нет товаров' : `Товаров: ${cart.length}`}</div>
              </div>
            </Link>
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
                  <>
                    {/* Затемнение фона с анимацией */}
                    <div
                      className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 animate-fadein"
                      onClick={() => { setActiveDropdown(null); setSelectedCatalog(null); }}
                      aria-label="Закрыть модальное окно"
                      style={{animation: 'fadein 0.3s'}}
                    />
                    {/* Drawer справа с анимацией */}
                    <div className="fixed inset-y-0 right-0 z-50 flex items-stretch">
                      <div
                        className="bg-white shadow-2xl w-[90vw] max-w-md h-full p-6 sm:p-10 relative flex flex-col transition-all duration-300 animate-drawer"
                        style={{animation: 'drawer 0.35s'}}
                      >
                        <button
                          onClick={() => { setActiveDropdown(null); setSelectedCatalog(null); }}
                          aria-label="Закрыть меню"
                          className="absolute top-6 right-8 sm:top-8 sm:right-12"
                        >
                          <X className="w-8 h-8 text-gray-400 hover:text-red-500 transition-colors" />
                        </button>
                        {!selectedCatalog ? (
                          <div className="flex flex-col gap-5 mt-2 w-full">
                            {catalogLinks.map((item, index) => (
                              <div
                                key={index}
                                className="text-gray-800 hover:text-blue-600 text-2xl sm:text-3xl transition-colors cursor-pointer px-2 py-3 rounded hover:bg-gray-100 font-medium"
                                onClick={() => setSelectedCatalog(item)}
                              >
                                {item.name}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-6 w-full flex flex-col items-start">
                            <button
                              onClick={() => setSelectedCatalog(null)}
                              className="mb-8 flex items-center text-blue-600 hover:underline text-lg sm:text-xl"
                            >
                              <span className="mr-2 text-2xl">&larr;</span> Назад к списку
                            </button>
                            <div className="w-full flex justify-center mb-6">
                              {selectedCatalog && selectedCatalog.image && (
                                <Image
                                  src={selectedCatalog.image}
                                  alt={selectedCatalog.name || 'Категория'}
                                  width={180}
                                  height={180}
                                  style={{objectFit: 'contain', background: '#f5f5f5', borderRadius: 16}}
                                />
                              )}
                            </div>
                            <div className="text-3xl font-bold mb-4">{selectedCatalog.name}</div>
                            <div className="text-gray-600 text-xl">Раздел "{selectedCatalog.name}" находится в разработке. Скоро здесь появятся товары и полезная информация!</div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Анимации через Tailwind + кастомные keyframes */}
                    <style jsx global>{`
                      @keyframes fadein {
                        from { opacity: 0; }
                        to { opacity: 1; }
                      }
                      @keyframes drawer {
                        from { opacity: 0; transform: translateX(100%); }
                        to { opacity: 1; transform: translateX(0); }
                      }
                    `}</style>
                  </>
                )}
              </div>

              <Link href="/swedish-walls" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Шведские стенки
              </Link>
              <Link href="/outdoor-complexes" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Уличные комплексы
              </Link>
              <Link href="/turniki" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Турники
              </Link>
              <Link href="/tyazhelaya-atletika" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Тяжелая атлетика
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link href="/discounts" className="flex items-center space-x-1 px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition-colors">
                <span className="text-sm">%</span>
                <span>Товары со скидкой</span>
              </Link>
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
                  {catalogLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-blue-200 hover:text-white transition-colors"
                    >
                      {item.name}
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
              <Link href="/turniki" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Турники
              </Link>
              <Link href="/tyazhelaya-atletika" className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors">
                Тяжелая атлетика
              </Link>
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