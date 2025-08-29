"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import DeliveryPaymentInfo from "@/components/DeliveryPaymentInfo";
import { motion, Variants, easeOut } from "framer-motion"; // ✅ добавил easeOut
import { FC } from "react";

type Product = {
  imageUrl: string;
  name: string;
  newPrice: string;
  oldPrice?: string;
  label?: string;
  labelColor?: string;
};

const swedishWallsProducts: Product[] = [
  { imageUrl: '/carousel2/1.png', name: 'УСК Богатырь Romana, качели гнездо Romana', newPrice: '27 590 ₽', label: 'R', labelColor: '#fde047' },
  { imageUrl: '/carousel2/2.png', name: 'Спортивный детский комплекс "Юниор-Плюс"...', oldPrice: '18 500 ₽', newPrice: '15 990 ₽' },
  { imageUrl: '/carousel2/3.png', name: 'Детский уличный спортивный комплекс «Юниор» (с сеткой)...', oldPrice: '23 800 ₽', newPrice: '19 490 ₽' },
  { imageUrl: '/carousel2/4.png', name: 'Уличный спортивный турник Романа', newPrice: '22 990 ₽' },
  { imageUrl: '/carousel2/1.png', name: 'Комплекс "Силач"', newPrice: '25 000 ₽' },
  { imageUrl: '/carousel2/2.png', name: 'Комплекс "Геркулес"', newPrice: '28 000 ₽' },
  { imageUrl: '/carousel2/3.png', name: 'Комплекс "Атлет"', newPrice: '21 500 ₽' },
  { imageUrl: '/carousel2/4.png', name: 'Комплекс "Профи"', newPrice: '29 990 ₽' },
];

const outdoorComplexesProducts: Product[] = [
  { imageUrl: '/carousel3/1.png', name: 'Гантель разборная стальная (гриф + блины) 15 кг', newPrice: '1 920 ₽' },
  { imageUrl: '/carousel3/2.png', name: 'Гантель разборная (гриф + блины) 24,1 кг', oldPrice: '6 200 ₽', newPrice: '4 260 ₽' },
  { imageUrl: '/carousel3/3.png', name: 'Гантель разборная (гриф + блины) 26,6 кг', oldPrice: '5 500 ₽', newPrice: '4 260 ₽' },
  { imageUrl: '/carousel3/4.png', name: 'Гиря «Горилла» 16,0 кг', newPrice: '5 990 ₽' },
  { imageUrl: '/carousel3/1.png', name: 'Гантель разборная 10 кг', newPrice: '1 500 ₽' },
  { imageUrl: '/carousel3/2.png', name: 'Гантель разборная 20 кг', newPrice: '2 500 ₽' },
  { imageUrl: '/carousel3/3.png', name: 'Гантель разборная 30 кг', newPrice: '3 500 ₽' },
  { imageUrl: '/carousel3/4.png', name: 'Гиря 24 кг', newPrice: '7 990 ₽' },
];

const carousel1Products: Product[] = [
  { imageUrl: '/carousel1/1.png', name: 'Шведская стенка P-19 (Цвет: Белый)', newPrice: '14 980 ₽' },
  { imageUrl: '/carousel1/2.png', name: 'Шведская стенка P-3 (Цвет: Антик Серебро)', oldPrice: '11 320 ₽', newPrice: '7 990 ₽' },
  { imageUrl: '/carousel1/3.png', name: 'Шведская стенка P-4 (Цвет: Светофор)', oldPrice: '14 990 ₽', newPrice: '10 990 ₽' },
  { imageUrl: '/carousel1/4.png', name: 'Шведская стенка P-19 (Цвет: Антик серебро)', newPrice: '14 980 ₽' },
  { imageUrl: '/carousel1/1.png', name: 'Шведская стенка P-5 (Цвет: Юниор)', newPrice: '8 990 ₽' },
  { imageUrl: '/carousel1/2.png', name: 'Шведская стенка P-6 (Цвет: Светофор2)', newPrice: '9 990 ₽' },
  { imageUrl: '/carousel1/3.png', name: 'Шведская стенка P-7 (Цвет: Черный)', newPrice: '12 990 ₽' },
  { imageUrl: '/carousel1/4.png', name: 'Шведская стенка P-8 (Цвет: Красный)', newPrice: '13 990 ₽' },
];

const Page: FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: easeOut } // ✅ заменил "easeOut" на easeOut
    },
  };

  return (
    <main>
      {/* Hero Section с кнопкой Продукты */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Добро пожаловать в SPORTOVA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Ваш надежный партнер в мире спортивного оборудования
          </p>
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Перейти к продуктам
          </Link>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <ProductCarousel title="Шведские стенки" products={carousel1Products} />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <ProductCarousel title="Уличные спортивные комплексы" products={swedishWallsProducts} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <ProductCarousel title="Тяжелая атлетика" products={outdoorComplexesProducts} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <CatalogSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <AboutSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <DeliveryPaymentInfo />
      </motion.div>
    </main>
  );
};

export default Page;    