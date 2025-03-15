"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import JohnImg from "@/images/John.jpg";
import JaneImg from "@/images/Jane.jpg";
import AlexImg from "@/images/Alex.jpg";
import MichaelImg from "@/images/Michael.jpg";
import SophiaImg from "@/images/Sophia.jpg";
import Image from "next/image";

// Testimonials Data
const testimonials = [
  {
    id: 0,
    name: "John Smith",
    role: "CEO & Founder",
    img: JohnImg,
    feedback:
      "Working with this team was an absolute pleasure. They developed a seamless and intuitive UI/UX for our financial platform, improving user engagement dramatically.",
  },
  {
    id: 1,
    name: "Jane Doe",
    role: "Product Manager",
    img: JaneImg,
    feedback:
      "They built a robust and scalable loan calculator for us, handling complex computations effortlessly. Their attention to detail and code quality is outstanding.",
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Lead Developer",
    img: AlexImg,
    feedback:
      "Our e-commerce website for Rapha was delivered with exceptional performance. The checkout flow and user experience significantly boosted our sales.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "CTO",
    img: MichaelImg,
    feedback:
      "They transformed our Next platform by optimizing UI and integrating a modern backend. Their expertise in frontend technologies exceeded expectations.",
  },
  {
    id: 4,
    name: "Sophia Adams",
    role: "UX Designer",
    img: SophiaImg,
    feedback:
      "Their team created an elegant and user-friendly design for our app, making our platform more intuitive and increasing engagement rates.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Dynamically update number of cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile screens (1 card)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet screens (2 cards)
      } else {
        setCardsPerView(3); // Desktop screens (3 cards)
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Move forward
  const nextTestimonial = () => {
    if (currentIndex + cardsPerView < testimonials.length) {
      setCurrentIndex((prev) => prev + cardsPerView);
    }
  };

  // Move backward (NOW FIXED)
  const prevTestimonial = () => {
    if (currentIndex - cardsPerView >= 0) {
      setCurrentIndex((prev) => prev - cardsPerView);
    } else {
      setCurrentIndex(0); // Reset completely to John Smith on full back
    }
  };

  return (
    <section className="bg-[#F9F9F9] py-16 px-6">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2C19]">
            Here is why people love us
          </h2>

          {/* Single Arrow (Switches Functionality at Last Item) */}
          <motion.button
            onClick={currentIndex + cardsPerView >= testimonials.length ? prevTestimonial : nextTestimonial}
            className="text-black bg-white p-3 rounded-full shadow-md text-lg hover:bg-[#3D2C19] hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <AnimatePresence mode="wait">
              {currentIndex + cardsPerView >= testimonials.length ? (
                <motion.div
                  key="back"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoArrowBack size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="forward"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoArrowForward size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Responsive Testimonials Carousel */}
        <div className="relative overflow-hidden mt-10 max-w-5xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-[#D6C7B2] text-black p-6 md:p-8 rounded-xl shadow-lg min-h-[280px] flex flex-col justify-between transition-all duration-300">
                  <p className="text-md leading-relaxed">{testimonial.feedback}</p>
                  <div className="mt-6 flex items-center">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
