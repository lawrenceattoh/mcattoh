"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LeftIcon from "@/images/Interactive_learning_experience_1_.png";
import RightIcon from "@/images/Interactive_learning_experience_2_.png";

// Services Data
const services = [
  {
    title: "Software Development",
    description:
      "We build high-performance, scalable, and secure software solutions tailored to your unique needs. From web and mobile applications to enterprise-grade platforms, our expert developers ensure seamless functionality and exceptional user experience.",
    points: [
      "Custom Web & Mobile Applications",
      "Cloud & SaaS Solutions",
      "API Development & Integrations",
      "Enterprise Software Solutions",
    ],
    icon: LeftIcon,
    align: "left",
  },
  {
    title: "Data Science",
    description:
      "Unlock the power of data with our AI-driven insights and predictive analytics. We help businesses make data-informed decisions, automate processes, and optimize performance through advanced machine learning models and AI algorithms.",
    points: [
      "Machine Learning & AI Solutions",
      "Predictive Analytics",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
    ],
    icon: RightIcon,
    align: "right",
  },
  {
    title: "Product Design",
    description:
      "We create stunning, user-centric designs that blend aesthetics with functionality. Our design process ensures intuitive interfaces and seamless user experiences that drive engagement and business growth.",
    points: [
      "UI/UX Design",
      "Prototyping & Wireframing",
      "Design Systems & Branding",
      "User Research & Testing",
    ],
    icon: LeftIcon,
    align: "left",
  },
  // {
  //   title: "Brain-Computer Interface (BCI) Solutions",
  //   description:
  //     "Pioneering the future of human-computer interaction, we develop innovative BCI solutions that bridge the gap between the brain and technology. Our solutions empower industries ranging from healthcare to gaming and beyond.",
  //   points: [
  //     "Neurotechnology & Signal Processing",
  //     "EEG-Based BCI Applications",
  //     "Assistive & Augmentative Technologies",
  //     "Brain-Controlled Interfaces for Healthcare & Gaming",
  //   ],
  //   icon: RightIcon,
  //   align: "right",
  // },
  {
    title: "AI for Healthcare",
    description:
      "We apply machine learning and AI to transform healthcare delivery, focusing on early detection, diagnostics, and decision support. Our solutions empower healthcare providers with timely insights and predictive intelligence.",
    points: [
      "AI/ML Models for Early Disease Detection",
      "Cancer & Diabetes Prediction Systems",
      "Clinical Decision Support Tools",
      "Medical Image & Data Analysis",
    ],
    icon: RightIcon, // You can swap with a more medical-themed illustration if available
    align: "right",
  }
  
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Image moves slightly based on scroll position
  const imageOffset = useTransform(scrollYProgress, [0, 1], [-10, 10]); // ✅ Reduced range

  return (
    <section ref={containerRef} className="py-16 px-6 bg-white overflow-hidden relative">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-[#113162] mb-6">
        Our Services
      </h2>

      {/* "What we do" with Horizontal Line */}
      <div className="max-w-screen-xl mx-auto flex items-center mb-12">
        <p className="text-lg text-gray-600">What we do</p>
        <div className="border-b border-gray-300 flex-grow ml-4"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
        {services.map((service, index) => (
          <div key={index}>
            <div
              className={`flex flex-col md:flex-row items-center md:gap-16 xl:gap-20 ${
                service.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image/Icon with Scroll-Based Animation */}
              <motion.div
                initial={{ opacity: 0, translateX: service.align === "left" ? -50 : 20 }} // ✅ Reduced offset
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }} // ✅ Reduced duration
                style={{ y: imageOffset }} // Moves with scroll
                viewport={{ once: false, amount: 0.3 }} // Works on scroll up and down
                className="w-full md:w-1/3 flex justify-center relative" // ✅ Added relative to prevent cut-off
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={320}
                  height={320}
                  className="object-contain w-full h-auto max-w-[280px] md:max-w-[320px]" // ✅ Image scales properly
                />
              </motion.div>

              {/* Service Details */}
              <div className="w-full md:w-2/3 text-left">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-3">{service.description}</p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-4 inline-block text-[#113162] font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Separator Line Between Sections */}
            {index < services.length - 1 && (
              <div className="border-t border-gray-300 my-16"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
