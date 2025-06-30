"use client";

import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import {
  FaVk,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#232427] text-gray-200 pt-12 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-light mb-6">Контакты</h3>
            <p className="mb-2 text-[#FFD600]">г. Нижний Новгород,<br/>ул.Народная, 20</p>
            <p className="mb-2">8 (800) 550-22-16</p>
            <p className="mb-2">info@sportova.ru</p>
            <p className="mb-2">Sportova на связи:</p>
            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="VK"><FaVk className="w-7 h-7 text-[#2787F5] hover:opacity-80" /></a>
              <a href="#" aria-label="Telegram"><FaTelegramPlane className="w-7 h-7 text-[#2AABEE] hover:opacity-80" /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp className="w-7 h-7 text-[#25D366] hover:opacity-80" /></a>
              <a href="#" aria-label="Viber"><FaViber className="w-7 h-7 text-[#7360F2] hover:opacity-80" /></a>
            </div>
          </div>
          {/* Каталог */}
          <div>
            <h3 className="text-lg font-light mb-6">Каталог</h3>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-2">
                <li>Шведские стенки</li>
                <li>Турники</li>
                <li>Уличные комплексы</li>
                <li>Тяжелая атлетика</li>
                <li>Единоборства</li>
                <li>Тюбинги</li>
              </ul>
              <ul className="space-y-2">
                <li>Игровые домики</li>
                <li>Фитнес</li>
                <li>Скамьи и стойки под штангу</li>
                <li>Сухие бассейны</li>
                <li>Батуты</li>
                <li>Новогодние елки</li>
              </ul>
            </div>
          </div>
          {/* Полезное */}
          <div>
            <h3 className="text-lg font-light mb-6">Полезное</h3>
            <ul className="space-y-2">
              <li>Обратная связь</li>
              <li>Акции и скидки</li>
              <li>Доставка и оплата</li>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Политика сайта</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo.svg" alt="Sportova" className="h-8 mr-3" />
            <span className="font-bold text-lg tracking-wide">SPORTOVA</span>
            <span className="ml-2 text-xs text-gray-400">СПОРТИВНЫЕ КОМПЛЕКСЫ</span>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            &copy; ООО «Спортова», {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 