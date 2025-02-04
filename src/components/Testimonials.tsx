"use client";

import { useState } from "react";
import JohnImg from "@/images/John.jpg";
import JaneImg from "@/images/Jane.jpg";
import AlexImg from "@/images/Alex.jpg";
import MichaelImg from "@/images/Michael.jpg";
import SophiaImg from "@/images/Sophia.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    img: JohnImg,
    feedback:
      "Working with this team was an absolute pleasure. They developed a seamless and intuitive UI/UX for our financial platform, improving user engagement dramatically.",
  },
  {
    name: "Jane Doe",
    role: "Product Manager",
    img: JaneImg,
    feedback:
      "They built a robust and scalable loan calculator for us, handling complex computations effortlessly. Their attention to detail and code quality is outstanding.",
  },
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    img: AlexImg,
    feedback:
      "Our e-commerce website for Rapha was delivered with exceptional performance. The checkout flow and user experience significantly boosted our sales.",
  },
  {
    name: "Michael Lee",
    role: "CTO",
    img: MichaelImg,
    feedback:
      "They transformed our Next platform by optimizing UI and integrating a modern backend. Their expertise in frontend technologies exceeded expectations.",
  },
  {
    name: "Sophia Adams",
    role: "UX Designer",
    img: SophiaImg,
    feedback:
      "Their team created an elegant and user-friendly design for our app, making our platform more intuitive and increasing engagement rates.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1); // Middle item in focus

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? prevIndex : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Here is why people love us</h2>
        <p className="text-gray-600 mt-2">See what our customers are saying</p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative flex justify-center items-center mt-10">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 ml-6 text-2xl font-bold text-gray-700 hover:text-gray-900"
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        {/* Testimonials Wrapper */}
        <div className="overflow-hidden w-full max-w-5xl px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.3}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-1/3 flex-shrink-0 px-4 transform transition-all duration-300 ${
                  index === currentIndex
                    ? "scale-105 opacity-100"
                    : "scale-90 opacity-60"
                }`}
              >
                <div className="bg-[#113162] text-white p-8 rounded-xl shadow-lg h-[280px] flex flex-col justify-between">
                  <p className="text-md leading-relaxed">{testimonial.feedback}</p>
                  <div className="mt-6 flex items-center">
                    <Image
                      src={testimonial.img.src} // Use imported image source
                      alt={testimonial.name}
                      width={35} // Set width explicitly
                      height={35} // Set height explicitly
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 mr-6 text-2xl font-bold text-gray-700 hover:text-gray-900"
          disabled={currentIndex === testimonials.length - 2}
        >
          ❯
        </button>
      </div>
    </section>
  );
}
