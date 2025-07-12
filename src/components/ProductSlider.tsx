'use client';
import React, { useState, useEffect, useRef } from 'react';

const product = [
  { image: "/assets/product-slide/shoe-1.png" },
  { image: "/assets/product-slide/shoe-2.png" },
  { image: "/assets/product-slide/shoe-3.png" },
  { image: "/assets/product-slide/shoe-4.png" },
  { image: "/assets/product-slide/shoe-5.png" },
  { image: "/assets/product-slide/shoe-6.png" },
  { image: "/assets/product-slide/shoe-7.png" },
  { image: "/assets/product-slide/shoe-8.png" }
];

const ProductSlider = () => {
 const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkCenterImage = () => {
      if (!marqueeRef.current) return;

      const container = marqueeRef.current;
      const containerCenter = container.offsetWidth / 2;
      const items = Array.from(container.querySelectorAll('.marquee-item')) as HTMLElement[];

      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenteredIndex(closestIndex);
    };

    const interval = setInterval(checkCenterImage, 100); // Check every 100ms
    return () => clearInterval(interval);
  }, []);

  // Duplicate items for infinite scroll illusion
  const extendedList = [...product, ...product];
  return (
    <div
      className="relative overflow-hidden w-full bg-white py-6"
      ref={marqueeRef}
    >
      <div
        className="flex w-max animate-[scroll-horizontal_10s_linear_infinite]"
        style={{ animationDuration: '18s' }}
      >
        {extendedList.map((item, index) => (
          <div
            key={index}
            className={`marquee-item flex-shrink-0 px-6 transition-all duration-300 ${
              centeredIndex === index ? 'scale-140 opacity-100 z-10' : 'scale-70 '
            }`}
          >
            <img
              src={item.image}
              alt={`shoe-${index}`}
              className="h-[170px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
