"use client";

import React, { useCallback, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useProductContext } from './ProductContext';

interface Product {
    imageUrl: string;
    name: string;
    oldPrice?: string;
    newPrice: string;
    isNew?: boolean;
    label?: string;
    labelColor?: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const { isFavorite, isCompared, isInCart, toggleFavorite, toggleCompare, addToCart } = useProductContext();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    slidesToScroll: 1,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="relative flex items-center">
          {/* Левая стрелка */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 z-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ top: '50%', transform: 'translateY(-50%) translateX(-50%)' }}
            aria-label="Назад"
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="w-7 h-7 text-gray-600" />
          </button>
          {/* Карусель карточек */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex -ml-4">
              {products.map((product, index) => (
                <div key={index} className="pl-4 flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <ProductCard
                    imageUrl={product.imageUrl}
                    name={product.name}
                    oldPrice={product.oldPrice}
                    newPrice={product.newPrice}
                    label={product.label}
                    labelColor={product.labelColor}
                    isFavorite={isFavorite(product)}
                    isCompared={isCompared(product)}
                    isInCart={isInCart(product)}
                    onToggleFavorite={() => toggleFavorite(product)}
                    onToggleCompare={() => toggleCompare(product)}
                    onAddToCart={() => addToCart(product)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Правая стрелка */}
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 z-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ top: '50%', transform: 'translateY(-50%) translateX(50%)' }}
            aria-label="Вперед"
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="w-7 h-7 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel; 