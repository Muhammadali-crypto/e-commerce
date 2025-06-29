"use client";

import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Phone, MapPin, Clock, Menu, X, ChevronDown, Scale, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  bgColor: string;
}

const SportovaWebsite = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([2]);

  const navLinks = [
    'Шведские стенки',
    'Уличные комплексы',
    'Турники',
    'Тяжелая атлетика',
    'Товары со скидкой'
  ];

  const products: Product[] = [
    { id: 1, name: 'Шведская стенка Р-19', description: '(Цвет: Белый)', price: 14980, image: 'product1', bgColor: 'bg-gray-200' },
    { id: 2, name: 'Шведская стенка Р-3', description: '(Цвет: Антик Серебро)', price: 7990, oldPrice: 11320, image: 'product2', bgColor: 'bg-gray-200' },
    { id: 3, name: 'Шведская стенка Р-4', description: '(Цвет: Светофор)', price: 10990, oldPrice: 14990, image: 'product3', bgColor: 'bg-gray-200' },
    { id: 4, name: 'Шведская стенка Р-19', description: '(Цвет: Антик серебро)', price: 14980, image: 'product4', bgColor: 'bg-gray-200' },
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Main header */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <div className="flex items-center mr-6">
                 <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-lg mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M2 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.5 5.5L12 10L3.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
                 <div>
                    <h1 className="text-xl font-bold text-gray-800 tracking-wider">SPORTOVA</h1>
                    <p className="text-xs text-gray-500">СПОРТИВНЫЕ КОМПЛЕКСЫ</p>
                 </div>
              </div>
            </div>

            <div className="flex-1 max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск по сайту"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-600 hover:text-red-500 transition-colors" aria-label="Посмотреть избранное">
                <Heart className="w-6 h-6" />
              </button>
              <button className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Посмотреть сравнение">
                <Scale className="w-6 h-6" />
              </button>
              <div className="flex items-center">
                  <button className="text-gray-600 hover:text-green-600 transition-colors relative mr-3">
                    <ShoppingCart className="w-6 h-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>
                  <div className="text-sm">
                      <p className="font-medium text-gray-800">Корзина (0)</p>
                      <p className="text-gray-500">Нет товаров</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
                <button className="flex items-center bg-blue-700/50 px-4 py-3 font-medium hover:bg-blue-700 transition-colors">
                    <Menu className="w-5 h-5 mr-2" />
                    Каталог товаров
                    <ChevronDown className="w-5 h-5 ml-1" />
                </button>
                <div className="hidden md:flex items-center space-x-6 ml-6">
                {navLinks.map(link => (
                    <a href="#" key={link} className="py-3 text-sm font-medium hover:text-blue-200 transition-colors">
                    {link}
                    </a>
                ))}
                </div>
            </div>
            
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Hero Section */}
            <section className="lg:col-span-2 bg-white rounded-lg shadow p-8 flex items-center bg-cover bg-center" style={{backgroundImage: "url('/placeholder-girl.jpg')"}}>
                <div className="bg-white/90 p-8 rounded-lg max-w-md">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-3 leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]">
                    Соберите шведскую стенку по своему желанию!
                    </h2>
                    <p className="text-gray-600 mb-6 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
                    Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.
                    </p>
                    <button className="px-6 py-3 rounded-md font-semibold text-white bg-gradient-to-b from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg transition-all duration-300 transform hover:scale-110">
                    Перейти в конструктор
                    </button>
                </div>
            </section>

            <div className="space-y-8">
                <section className="bg-white rounded-lg shadow p-6">
                  <div className="h-32 bg-gray-200 rounded-md mb-4 bg-cover bg-center" style={{backgroundImage: "url('/placeholder-sewing.jpg')"}}></div>
                  <h3 className="font-bold text-gray-800 mb-1">Собственное швейное производство</h3>
                  <p className="text-sm text-gray-600 mb-3">Приглашаем к сотрудничеству</p>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">Подробнее &rsaquo;</a>
                </section>
                
                <section className="bg-white rounded-lg shadow p-6">
                  <div className="h-32 bg-gray-200 rounded-md mb-4 bg-cover bg-center" style={{backgroundImage: "url('/placeholder-showroom.jpg')"}}></div>
                  <h3 className="font-bold text-gray-800 mb-2">Посетите наш шоу-рум!</h3>
                  <p className="text-sm text-gray-700 flex items-center mb-1"><MapPin className="w-4 h-4 mr-2 text-blue-600"/>Н.Новгород, ул.Народная 20</p>
                  <p className="text-sm text-gray-700 flex items-center mb-3"><Clock className="w-4 h-4 mr-2 text-blue-600"/>Ежедневно с 9:00 до 19:00</p>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">Подробнее &rsaquo;</a>
                </section>
            </div>
        </div>

        {/* Products Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Шведские стенки</h3>
            <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-600 transition" aria-label="Предыдущие товары">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-600 transition" aria-label="Следующие товары">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <div className={`aspect-square w-full ${product.bgColor} flex items-center justify-center`}>
                    {/* Placeholder for product image */}
                    <p className="text-gray-400">Image</p>
                  </div>
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm hover:bg-white transition"
                    aria-label="Добавить в избранное"
                  >
                    <Heart className={`w-5 h-5 transition-colors ${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-500'}`} />
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">{product.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                  
                  <div className="flex items-end justify-between">
                    <div>
                        {product.oldPrice && (
                            <p className="text-sm text-gray-400 line-through">{product.oldPrice.toLocaleString('ru-RU')} P</p>
                        )}
                        <p className="text-xl font-bold text-gray-800">{product.price.toLocaleString('ru-RU')} P</p>
                    </div>
                    <button onClick={addToCart} className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors transform group-hover:scale-110" aria-label="Добавить в корзину">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 SPORTOVA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SportovaWebsite;