"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import InteractiveLearningImage from "@/images/Interactive_learning_experience_1_.png";
import HeroImage from "@/images/20365674_Logistics_19_1.png";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

// Services Data
const services = [
  {
    id: "01",
    title: "Software Development",
    desc: "We build scalable and secure software solutions tailored to meet modern business needs. Our solutions enhance performance, security, and adaptability in a dynamic digital world.",
  },
  {
    id: "02",
    title: "Data Science",
    desc: "Leverage AI-driven insights to make smarter decisions, optimize business processes, and uncover hidden patterns in data. We provide end-to-end AI solutions for real-world challenges.",
  },
  {
    id: "03",
    title: "Product Design",
    desc: "User-centric designs blending aesthetics with functionality to create seamless and engaging digital experiences. Our approach ensures innovation, usability, and a strong brand presence.",
  },
  {
    id: "04",
    title: "Brain-Computer Interface Solutions",
    desc: "Bridging brain and technology to unlock new possibilities in healthcare, gaming, and accessibility. Our innovative BCI solutions empower seamless human-computer interaction.",
  },
];


// Services Data
const servicesDetails = [
  {
    id: "01",
    title: "Software Development",
    subtitle:
      "Empowering Businesses with Scalable and Secure Software Solutions",
    content: `In today’s fast-paced digital landscape, businesses need software solutions that are not only robust and scalable but also adaptable to evolving market needs. Our team of expert developers specializes in building high-performance applications that drive business efficiency and innovation.
    
    Our development process follows best practices in agile methodology, ensuring transparency, collaboration, and timely delivery. We leverage the latest technologies and frameworks to build software that stands the test of time.`,
    features: [
      "Custom Web & Mobile Applications – Tailored solutions designed for optimal performance.",
      "Cloud & SaaS Solutions – Scalable cloud-based applications that enhance operational efficiency.",
      "API Development & Integrations – Seamless system integrations to optimize workflows.",
      "Enterprise Software Solutions – End-to-end business applications that automate operations.",
    ],
  },
  {
    id: "02",
    title: "Data Science",
    subtitle: "Harnessing the Power of Data for Smarter Decision-Making",
    content: `Data is the backbone of modern innovation. We leverage advanced data science techniques to transform raw data into actionable insights, empowering businesses to make informed decisions, enhance customer experiences, and automate operations through AI-driven solutions.
    
    From healthcare and finance to retail and beyond, our data science solutions help organizations gain a competitive edge by turning complex data into meaningful intelligence.`,
    features: [
      "Machine Learning & AI Solutions – Custom AI models designed to automate tasks.",
      "Predictive Analytics – Leveraging historical data to forecast future outcomes.",
      "Natural Language Processing (NLP) – AI-powered solutions for text analysis.",
      "Computer Vision & Image Recognition – AI-driven image processing for facial recognition.",
    ],
  },
  {
    id: "03",
    title: "Product Design",
    subtitle:
      "Creating Stunning, Intuitive, and High-Impact Digital Experiences",
    content: `A well-designed product isn’t just about aesthetics—it’s about usability, functionality, and creating an emotional connection with users. Our design process is rooted in research, innovation, and user-centric methodologies to ensure seamless interactions across digital platforms.
    
    We work closely with businesses to ensure that every product we design not only meets industry standards but also exceeds user expectations, driving engagement and conversions.`,
    features: [
      "UI/UX Design – Crafting visually compelling and user-friendly interfaces.",
      "Prototyping & Wireframing – Transforming ideas into tangible, testable prototypes.",
      "Design Systems & Branding – Creating cohesive brand identities.",
      "User Research & Testing – Data-driven design decisions based on in-depth user behavior analysis.",
    ],
  },
  {
    id: "04",
    title: "Brain-Computer Interface (BCI) Solutions",
    subtitle:
      "Revolutionizing Human-Computer Interaction Through Neurotechnology",
    content: `Brain-Computer Interfaces (BCIs) are transforming the way humans interact with technology, unlocking new possibilities in healthcare, gaming, and accessibility solutions. Our team specializes in cutting-edge neurotechnology solutions that harness the power of the human brain to control and interact with digital systems.
    
    Our BCI research and development focus on enhancing cognitive capabilities, improving accessibility, and driving the future of human-computer synergy.`,
    features: [
      "Neurotechnology & Signal Processing – Advanced algorithms that decode brain signals.",
      "EEG-Based BCI Applications – Brain-controlled interfaces for hands-free interaction.",
      "Assistive & Augmentative Technologies – Empowering individuals with disabilities.",
      "Brain-Controlled Interfaces for Healthcare & Gaming – Enabling new levels of interaction.",
    ],
  },
];

// Function for Smooth Scrolling with Centered Focus
const scrollToSection = (id: string) => {
  setTimeout(() => {
    const element = document.getElementById(`service-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });

      // Optional fine-tuning: Adjust scroll slightly after the smooth scrolling completes
      setTimeout(() => {
        window.scrollBy(0, -30); // Adjust this value if needed
      }, 500); // Small delay ensures it adjusts after scrolling completes
    }
  }, 100); // Small delay ensures DOM updates before scrolling
};



export default function ServicesNav() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);

  // Dynamically adjust number of cards per view based on screen width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: Show 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: Show 2 cards
      } else {
        setCardsPerView(4); // Desktop: Show 4 cards
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Update Arrow Disable State
  useEffect(() => {
    setDisableRightArrow(currentIndex + cardsPerView >= services.length);
    setDisableLeftArrow(currentIndex === 0);
  }, [currentIndex, cardsPerView]);

  // Move forward or reset to first item if at the last one
  const nextSlide = () => {
    if (disableRightArrow) {
      setCurrentIndex(0); // Reset to first item when at last
    } else {
      setCurrentIndex((prev) => prev + cardsPerView);
    }
  };

  // Move backward
  const prevSlide = () => {
    if (!disableLeftArrow) {
      setCurrentIndex((prev) => prev - cardsPerView);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Innovative Solutions for a Smarter Future
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              We craft cutting-edge software, AI, design, and BCI solutions,
              turning ideas into seamless digital experiences.
            </p>
            <button className="mt-6 px-6 py-3 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition-all duration-300">
              Book A Consultation
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={HeroImage}
              alt="Hero Illustration"
              width={550}
              height={488}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#FCFBFA] w-full">
        <section className="py-16 px-6 max-w-7xl mx-auto ">
          <div className="text-center md:flex md:items-center md:justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              We Offer The Following Services
            </h2>
          </div>

          {/* Arrows Below Title with Space Between on Large Screens */}
          <div className="flex justify-center md:justify-end mt-4 gap-x-8">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className={`bg-blue-900 text-white p-3 rounded-full shadow-md transition-all text-lg ${
                disableLeftArrow
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-800"
              }`}
              disabled={disableLeftArrow}
            >
              <IoArrowBack size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className={`bg-blue-900 text-white p-3 rounded-full shadow-md transition-all text-lg ${
                disableRightArrow
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-800"
              }`}
              disabled={disableRightArrow}
            >
              {disableRightArrow ? (
                <IoArrowForward size={20} />
              ) : (
                <IoArrowForward size={20} />
              )}
            </button>
          </div>

          {/* Services Grid - Carousel */}
          <div className="relative overflow-hidden mt-6 max-w-8xl mx-auto ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-4 transition-all duration-300"
                >
                  <div className="bg-white text-black p-6 border rounded-lg shadow-md flex flex-col justify-between transition-all duration-300 min-h-[400px] w-full max-w-[320px]">
                    {/* Number */}
                    <p className="text-lg font-bold text-gray-600">
                      {service.id}
                    </p>

                    {/* Image */}
                    <Image
                      src={InteractiveLearningImage}
                      alt={service.title}
                      width={120}
                      height={120}
                      className="mx-auto"
                    />

                    {/* Title */}
                    <h3 className="text-xl font-semibold mt-4 text-gray-900">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mt-3">{service.desc}</p>

                    {/* Learn More Button - Scrolls to the Section */}
<button onClick={() => scrollToSection(service.id)} className="mt-4 text-blue-900 font-medium flex items-center gap-2">
  Learn More <IoArrowForward size={14} />
</button>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* New Detailed Services Section */}
      <section className="py-20 px-6 max-w-[85%] mx-auto ">
        {servicesDetails.map((service) => (
  <div key={service.id} id={`service-${service.id}`} className="border-b border-gray-300 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column (Title, Subtitle, Content) */}
              <div className="relative -top-6">
                <p className="text-gray-900 text-lg font-semibold">
                  {service.id}
                </p>
                <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mt-2">
                  {service.title}
                </h2>
                <h4 className="text-lg font-semibold text-gray-700 mt-3">
                  {service.subtitle}
                </h4>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  {service.content}
                </p>
              </div>

              {/* Right Column (Features List) */}
              <div className="flex flex-col space-y-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <TiTick className="text-[#563B11] text-2xl flex-shrink-0" />
                    <p className="text-[#563B11] text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
