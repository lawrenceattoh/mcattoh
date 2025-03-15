"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Mobile_App_Project_Thumbnail from "../images/Mobile_App_Project_Thumbnail.jpg";

// Project List
const projects = [
  {
    name: "Benefits Calculator",
    type: "Web Development",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.moneyhelper.org.uk/en/benefits/use-our-benefits-calculator",
  },
  {
    name: "Universal Credit Money Manager",
    type: "Web Development",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.moneyhelper.org.uk/en/benefits/universal-credit/use-our-money-manager",
  },
  {
    name: "Loan Calculator",
    type: "Web Development",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.moneyhelper.org.uk/en/everyday-money/credit/use-our-loan-calculator",
  },
  {
    name: "Rapha Men's Sale",
    type: "E-commerce",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.rapha.cc/gb/en/sale/category/sale?q=gender:Mens&",
  },
  {
    name: "Rapha Pro Team Gilet",
    type: "E-commerce",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.rapha.cc/gb/en/shop/mens-pro-team-lightweight-gilet/product/PLW06XXMSG",
  },
  {
    name: "Next Men's Jacket",
    type: "E-commerce",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.next.co.uk/g294803s1/738649#738649",
  },
];

export default function RecentWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(3);

  // Dynamically update number of projects per view based on screen size
  useEffect(() => {
    const updateProjectsPerView = () => {
      if (window.innerWidth < 640) {
        setProjectsPerView(1); // Mobile screens (1 project)
      } else if (window.innerWidth < 1024) {
        setProjectsPerView(2); // Tablet screens (2 projects)
      } else {
        setProjectsPerView(3); // Desktop screens (3 projects)
      }
    };

    updateProjectsPerView();
    window.addEventListener("resize", updateProjectsPerView);
    return () => window.removeEventListener("resize", updateProjectsPerView);
  }, []);

  const nextSlide = () => {
    if (currentIndex + projectsPerView < projects.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-[#E8DCCB] py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Title & Description Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          {/* Title on Left */}
          <h2 className="text-4xl font-bold text-[#3D2C19] w-full md:w-1/2">
            Recent Work
          </h2>
          {/* Description on Right */}
          <p className="text-lg text-[#5B4736] w-full md:w-1/2">
            From innovative startups to reputable enterprises – we help pioneers
            plan, design, build, and ship software products worth talking about.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center">
          {/* Left Arrow (Proper Spacing) */}
          {currentIndex > 0 && (
           <button
           onClick={prevSlide}
           className="absolute left-[-10px] md:left-[-40px] lg:left-[-50px] text-3xl text-gray-700 hover:text-gray-900 bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110 z-50"
         >
           ❮
         </button>
          )}

          {/* Scrollable Projects */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)`,
              }}
            >
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 transform transition-all duration-300`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden group relative h-[380px] w-full sm:w-[300px] lg:w-[320px]">
                    {/* Project Image */}
                    <Image
                      src={project.img}
                      alt={project.name}
                      width={400}
                      height={250}
                      className="w-full h-[280px] object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:bg-opacity-70">
                      <h3 className="text-white text-lg font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{project.type}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Arrow (Proper Spacing) */}
          {currentIndex + projectsPerView < projects.length && (
          <button
          onClick={nextSlide}
          className="absolute right-[-10px] md:right-[-40px] lg:right-[-50px] text-3xl text-gray-700 hover:text-gray-900 bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
        >
          ❯
        </button>
          )}
        </div>
      </div>
    </section>
  );
}
