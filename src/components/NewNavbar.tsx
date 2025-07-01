import React, { useState } from "react";
import Link from "next/link";

export default function NewNavbar() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (modal: string) => setOpenModal(modal);
  const handleCloseModal = () => setOpenModal(null);

  // Модальное окно
  const Modal = ({ children }: { children: React.ReactNode }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-8 min-w-[320px] max-w-[90vw] relative">
        <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">×</button>
        {children}
      </div>
    </div>
  );

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
        </div>
        <Link href="/swedish-walls" className="px-4 py-2 hover:bg-blue-800 block">Шведские стенки</Link>
        <Link href="/outdoor-complexes" className="px-4 py-2 hover:bg-blue-800 block">Уличные комплексы</Link>
        <Link href="/pull-up-bars" className="px-4 py-2 hover:bg-blue-800 block">Турники</Link>
        <Link href="/weightlifting" className="px-4 py-2 hover:bg-blue-800 block">Тяжелая атлетика</Link>
        <Link href="/discounts" className="px-4 py-2 bg-orange-500 text-white rounded ml-auto hover:bg-orange-600 transition-colors">% Товары со скидкой</Link>
      </div>

      {/* Модальные окна */}
      {openModal === 'swedish-walls' && (
        <Modal> <h2 className="text-lg font-bold mb-2">Шведские стенки</h2> <p>Здесь будет информация о шведских стенках или нужный функционал.</p> </Modal>
      )}
      {openModal === 'outdoor-complexes' && (
        <Modal> <h2 className="text-lg font-bold mb-2">Уличные комплексы</h2> <p>Здесь будет информация об уличных комплексах или нужный функционал.</p> </Modal>
      )}
      {openModal === 'pull-up-bars' && (
        <Modal> <h2 className="text-lg font-bold mb-2">Турники</h2> <p>Здесь будет информация о турниках или нужный функционал.</p> </Modal>
      )}
      {openModal === 'weightlifting' && (
        <Modal> <h2 className="text-lg font-bold mb-2">Тяжелая атлетика</h2> <p>Здесь будет информация о тяжелой атлетике или нужный функционал.</p> </Modal>
      )}
      {openModal === 'discounts' && (
        <Modal> <h2 className="text-lg font-bold mb-2">% Товары со скидкой</h2> <p>Здесь будет информация о скидках или нужный функционал.</p> </Modal>
      )}
    </nav>
  );
} 