"use client";

import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import DeliveryPaymentInfo from "@/components/DeliveryPaymentInfo";
import { motion } from "framer-motion";

const swedishWallsProducts = [
  { imageUrl: '/carousel2/1.png', name: 'УСК Богатырь Romana, качели гнездо Romana', newPrice: '27 590 ₽', label: 'R', labelColor: '#fde047' },
  { imageUrl: '/carousel2/2.png', name: 'Спортивный детский комплекс "Юниор-Плюс"...', oldPrice: '18 500 ₽', newPrice: '15 990 ₽' },
  { imageUrl: '/carousel2/3.png', name: 'Детский уличный спортивный комплекс «Юниор» (с сеткой)...', oldPrice: '23 800 ₽', newPrice: '19 490 ₽' },
  { imageUrl: '/carousel2/4.png', name: 'Уличный спортивный турник Романа', newPrice: '22 990 ₽' },
];

const outdoorComplexesProducts = [
    { imageUrl: '/carousel3/1.png', name: 'Гантель разборная стальная (гриф + блины) 15 кг', newPrice: '1 920 ₽' },
    { imageUrl: '/carousel3/2.png', name: 'Гантель разборная (гриф + блины) 24,1 кг', oldPrice: '6 200 ₽', newPrice: '4 260 ₽' },
    { imageUrl: '/carousel3/3.png', name: 'Гантель разборная (гриф + блины) 26,6 кг', oldPrice: '5 500 ₽', newPrice: '4 260 ₽' },
    { imageUrl: '/carousel3/4.png', name: 'Гиря «Горилла» 16,0 кг', newPrice: '5 990 ₽' },
];

const carousel1Products = [
  { imageUrl: '/carousel1/1.png', name: 'Шведская стенка P-19 (Цвет: Белый)', newPrice: '14 980 ₽' },
  { imageUrl: '/carousel1/2.png', name: 'Шведская стенка P-3 (Цвет: Антик Серебро)', oldPrice: '11 320 ₽', newPrice: '7 990 ₽' },
  { imageUrl: '/carousel1/3.png', name: 'Шведская стенка P-4 (Цвет: Светофор)', oldPrice: '14 990 ₽', newPrice: '10 990 ₽' },
  { imageUrl: '/carousel1/4.png', name: 'Шведская стенка P-19 (Цвет: Антик серебро)', newPrice: '14 980 ₽' },
];

export default function Page() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div>
          <ProductCarousel title="Шведские стенки" products={carousel1Products} />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div>
          <ProductCarousel title="Уличные спортивные комплексы" products={swedishWallsProducts} />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div>
          <ProductCarousel title="Тяжелая атлетика" products={outdoorComplexesProducts} />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <CatalogSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <DeliveryPaymentInfo />
      </motion.div>
    </main>
  );
}