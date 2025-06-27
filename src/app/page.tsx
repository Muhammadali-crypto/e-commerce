import Image from 'next/image';
import { Heart, MapPin, Phone, Search, ShoppingCart, Menu } from 'lucide-react';

const HomePage = () => {
  const products = [
    {
      name: 'Шведская стенка Р-19 (Цвет: белый)',
      price: '14 980 ₽',
      image: '/img/image8.jpg',
    },
    {
      name: 'Шведская стенка Р-3 (Цвет: Антик Серебро)',
      price: '7 990 ₽',
      oldPrice: '11 320 ₽',
      image: '/img/kononchern.jpg.600x600-httpssport-dostavka.ru.jpg',
    },
    {
      name: 'Шведская стенка Р-4 (Цвет: Светофор)',
      price: '10 990 ₽',
      image: '/img/300px-NarutoTeam7.jpg',
    },
    {
      name: 'Шведская стенка Р-19 (Цвет: Антик серебро)',
      price: '14 980 ₽',
      image: '/img/truck_451797-13.avif',
    },
  ];

  return (
    <div className="bg-[#F4F5F8]">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm py-2">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-gray-400" />
              <span>Нижний Новгород</span>
            </div>
            <a href="#" className="hover:text-blue-600">Акции</a>
            <a href="#" className="hover:text-blue-600">Как заказать</a>
            <a href="#" className="hover:text-blue-600">О компании</a>
            <a href="#" className="hover:text-blue-600">Доставка и Оплата</a>
            <a href="#" className="hover:text-blue-600">Гарантии</a>
            <a href="#" className="hover:text-blue-600">Контакты</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span className="font-bold">8 800 550-22-16</span>
            </div>
            <button className="text-blue-600 border-b border-blue-600 hover:text-blue-800">Заказать звонок</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="text-3xl font-extrabold text-blue-800">
            SPORTOVA
          </div>
          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Поиск по сайту"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Heart size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
                {/* Placeholder for compare icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </a>
            <div className="flex items-center space-x-2">
              <ShoppingCart size={24} className="text-gray-600"/>
              <div>
                <span className="font-semibold">Корзина (0)</span>
                <div className="text-xs text-gray-500">Пока пустая</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="flex items-center bg-blue-600 px-4 py-3 font-bold hover:bg-blue-700">
                <Menu size={20} className="mr-2" />
                Каталог товаров
              </button>
              <div className="flex items-center space-x-1">
                <a href="#" className="py-3 px-3 hover:bg-blue-700 rounded-md">Шведские стенки</a>
                <a href="#" className="py-3 px-3 hover:bg-blue-700 rounded-md">Уличные комплексы</a>
                <a href="#" className="py-3 px-3 hover:bg-blue-700 rounded-md">Турники</a>
                <a href="#" className="py-3 px-3 hover:bg-blue-700 rounded-md">Тяжелая атлетика</a>
              </div>
            </div>
            <a href="#" className="py-3 px-3 bg-red-600 hover:bg-red-700 rounded-md flex items-center">
              <span className="mr-1">%</span> Товары со скидкой
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex gap-4">
          <div className="w-2/3 bg-white p-8 rounded-lg flex items-center shadow">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl font-bold mb-4 leading-tight">Соберите шведскую стенку по своему желанию!</h1>
              <p className="text-gray-600 mb-6">Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.</p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                Перейти в конструктор
              </button>
            </div>
            <div className="w-1/2 h-full">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
                <Image src="/img/4f5595a8b76ae47e58e8cd680644d41345b798be.png" alt="Hero image" fill className="object-cover" />
                {/* Carousel controls could go here */}
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-lg shadow flex-1">
              <h3 className="font-bold mb-2 text-lg">Собственное швейное производство</h3>
              <p className="text-sm text-gray-600 mb-4">Приглашаем к сотрудничеству</p>
              <a href="#" className="text-blue-600 font-bold text-sm hover:underline">Подробнее &gt;</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex-1">
              <h3 className="font-bold mb-2 text-lg">Посетите наш шоу-рум!</h3>
              <p className="text-sm text-gray-600 mb-4">Н.Новгород, ул.Народная 20<br/>Ежедневно с 9:00 до 19:00</p>
              <a href="#" className="text-blue-600 font-bold text-sm hover:underline">Подробнее &gt;</a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Шведские стенки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-60 mb-4 rounded-md overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
                </div>
                <h3 className="font-semibold h-12">{product.name}</h3>
                <div className="mt-2">
                  {product.oldPrice && <p className="text-gray-500 line-through text-sm">{product.oldPrice}</p>}
                  <p className={`text-xl font-bold ${product.oldPrice ? 'text-red-600' : ''}`}>{product.price}</p>
                </div>
                <button className="mt-4 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto hover:bg-orange-600">
                  <ShoppingCart size={20} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
