"use client";

import Image from "next/image";
import { useState } from "react";
import Mobile_App_Project_Thumbnail from "../images/Mobile_App_Project_Thumbnail.jpg";

// Projects Data (Grouped into Categories)
const projects = [
  {
    name: "Benefits Calculator",
    category: "Software Development",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.moneyhelper.org.uk/en/benefits/use-our-benefits-calculator",
  },
  {
    name: "Universal Credit Money Manager",
    category: "Software Development",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.moneyhelper.org.uk/en/benefits/universal-credit/use-our-money-manager",
  },
  {
    name: "Loan Calculator",
    category: "Software Development",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.moneyhelper.org.uk/en/everyday-money/credit/use-our-loan-calculator",
  },
  {
    name: "Rapha Men's Sale",
    category: "Product Design",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.rapha.cc/gb/en/sale/category/sale?q=gender:Mens&",
  },
  {
    name: "Rapha Pro Team Gilet",
    category: "Product Design",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.rapha.cc/gb/en/shop/mens-pro-team-lightweight-gilet/product/PLW06XXMSG",
  },
  {
    name: "Next Men's Jacket",
    category: "Product Design",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.next.co.uk/g294803s1/738649#738649",
  },
];

// Categories
const categories = ["All", "Software Development", "Product Design", "Data Science", "BCI"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on category selection
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Building Innovation, <br /> One Project at a Time
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We take pride in crafting cutting-edge solutions that drive impact.
            Explore our portfolio to see how we’ve helped clients bring their ideas to life.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-lg font-medium px-3 pb-2 border-b-2 transition ${
                activeFilter === category
                  ? "border-black text-black"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300">
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={500}
                    height={400}
                    className="w-full h-[280px] object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.category}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-800">
              🚀 We are currently working on exciting projects in this category.
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Stay tuned! Our latest innovations will be showcased here soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
