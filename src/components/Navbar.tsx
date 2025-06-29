import { MapPin, Phone, Heart, BarChart, ShoppingCart, Menu, Percent, Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white text-gray-800">
      {/* Top bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm py-2">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1 text-gray-500" />
            <a href="#" className="hover:text-orange-500">Нижний Новгород</a>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href="#" className="hover:text-orange-500 text-orange-500 font-bold">Акции</a>
              <a href="#" className="hover:text-orange-500">Как заказать</a>
              <a href="#" className="hover:text-orange-500">О компании</a>
              <a href="#" className="hover:text-orange-500">Доставка и Оплата</a>
              <a href="#" className="hover:text-orange-500">Гарантии</a>
              <a href="#" className="hover:text-orange-500">Контакты</a>
            </nav>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span className="font-bold">8 800 550-22-16</span>
            </div>
            <a href="#" className="text-blue-600 underline hover:no-underline">Заказать звонок</a>
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          {/* This would be the logo */}
          <div className="text-3xl font-bold">
            <span className="text-blue-600">SPORT</span>
            <span className="text-orange-500">OVA</span>
          </div>
          <div className="text-xs text-gray-500 ml-2">
            СПОРТИВНЫЕ<br/>КОМПЛЕКСЫ
          </div>
        </div>

        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Поиск по сайту" 
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button aria-label="Избранное" className="p-2 hover:bg-gray-100 rounded-full">
            <Heart size={24} className="text-gray-600"/>
          </button>
          <button aria-label="Сравнение" className="p-2 hover:bg-gray-100 rounded-full">
            <BarChart size={24} className="text-gray-600 -rotate-90"/>
          </button>
          <button className="flex items-center space-x-2 border rounded-md px-4 py-2 hover:bg-gray-50">
            <ShoppingCart size={24} className="text-gray-600"/>
            <div>
              <div>Корзина (0)</div>
              <div className="text-xs text-gray-500">Нет товаров</div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <nav className="flex items-center space-x-8 h-full">
            <button className="bg-blue-700 px-4 py-4 flex items-center space-x-2 h-full">
              <Menu size={20} />
              <span>Каталог товаров</span>
              <ChevronDown size={20} />
            </button>
            <a href="#" className="hover:bg-blue-700 px-3 py-4">Шведские стенки</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-4">Уличные комплексы</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-4">Турники</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-4">Тяжелая атлетика</a>
          </nav>
          <a href="#" className="flex items-center space-x-2 text-orange-400">
            <Percent size={20} />
            <span>Товары со скидкой</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;   