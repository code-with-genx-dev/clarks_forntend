'use client'
import { useEffect, useState } from 'react'

const Carousel = () => {
  const images = [
    "/assets/slide/slide-1.png",
    "/assets/slide/slide-2.png",
    "/assets/slide/slide-5.png",
    "/assets/slide/slide-4.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full h-[500px] mx-auto overflow-hidden ">
      {/* Sliding container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `100%`,
          transform: `translateX(-${currentIndex * (400 / images.length)}%)`,
        }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
