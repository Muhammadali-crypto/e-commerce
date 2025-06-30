import React from "react";

export default function NewNavbar() {
  return (
    <nav className="w-full">
      {/* Top gray bar */}
      <div className="bg-[#f5f5f0] text-xs text-gray-700 flex justify-between items-center px-4 py-1 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-blue-700">✔ Нижний Новгород</span>
          <a href="#" className="text-red-500 font-semibold ml-4">Акции</a>
          <a href="#" className="ml-4 hover:underline">Как заказать</a>
          <a href="#" className="ml-4 hover:underline">О компании</a>
          <a href="#" className="ml-4 hover:underline">Доставка и Оплата</a>
          <a href="#" className="ml-4 hover:underline">Гарантии</a>
          <a href="#" className="ml-4 hover:underline">Контакты</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="mr-2">⏲ 8800 550-22-16</span>
          <a href="#" className="text-blue-500 hover:underline">Заказать звонок</a>
        </div>
      </div>

      {/* Main white bar */}
      <div className="bg-[#f5f5f0] flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Логотип */}
          <img src="/logo.png" alt="Sportova Logo" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-orange-600">SPORTOVA</span>
            <span className="text-xs text-gray-500 -mt-1">СПОРТИВНЫЕ КОМПЛЕКСЫ</span>
          </div>
        </div>
        {/* Поиск */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Поиск по сайту"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Icons and cart */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-blue-500 text-xl">♡</button>
          <button className="text-gray-400 hover:text-blue-500 text-xl">📊</button>
          <div className="flex items-center border border-gray-300 rounded px-3 py-1 ml-2">
            <span className="mr-2">🛒</span>
            <span className="text-xs">Корзина (0)</span>
            <span className="ml-2 text-gray-400 text-xs">Нет товаров</span>
          </div>
        </div>
      </div>

      {/* Blue categories bar */}
      <div className="bg-blue-700 text-white flex items-center px-8 h-10 text-sm font-medium relative z-20">
        <div className="relative group">
          <button className="flex items-center px-4 py-2 bg-blue-800 rounded-l hover:bg-blue-900">
            <span className="mr-2">▮</span> Каталог товаров <span className="ml-1">▼</span>
          </button>
          {/* Здесь можно добавить выпадающее меню */}
        </div>
        {/* Шведские стенки с выпадающим меню */}
        <div className="relative group">
          <a href="#" className="px-4 py-2 hover:bg-blue-800 block">Шведские стенки</a>
          <div className="absolute left-0 top-full mt-1 hidden group-hover:flex bg-white shadow-lg rounded p-4 gap-4 min-w-[320px] z-30">
            {[1,2,3,4].map(num => (
              <img
                key={num}
                src={`/carousel1/${num}.png`}
                alt={`Шведская стенка ${num}`}
                className="w-20 h-20 object-contain rounded border hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
        <a href="#" className="px-4 py-2 hover:bg-blue-800">Уличные комплексы</a>
        <a href="#" className="px-4 py-2 hover:bg-blue-800">Турники</a>
        <a href="#" className="px-4 py-2 hover:bg-blue-800">Тяжелая атлетика</a>
        <a href="#" className="px-4 py-2 text-yellow-300 hover:bg-blue-800 ml-auto">% Товары со скидкой</a>
      </div>
    </nav>
  );
} 