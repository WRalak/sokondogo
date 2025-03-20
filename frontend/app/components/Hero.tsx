

"use client";


import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Welcome to SokoNdogo",
    description: "A marketplace for everyone. Buy, sell, and explore a variety of products from different vendors.",
    image: "/shine.png",
  },
  {
    title: "Open Your Own Shop",
    description: "Join our platform and start selling your products to a wide audience.",
    image: "/shop.jpg",
  },
  {
    title: "Quality Products",
    description: "Find high-quality products from verified sellers at competitive prices.",
    image: "/for.jpg",
  },
  {
    title: "Secure Transactions",
    description: "Your safety is our priority. We ensure secure and seamless transactions.",
    image: "/transaction.jpg",
  },
  {
    title: "Fast and Reliable Delivery",
    description: "Get your orders delivered quickly and efficiently to your doorstep.",
    image: "/del.jpg",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000); // Change slide every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full md:w-1/2 p-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-orange-500">{slide.title}</h1>
            <p className="text-lg text-gray-700 mt-4">{slide.description}</p>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-full relative">
            <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

