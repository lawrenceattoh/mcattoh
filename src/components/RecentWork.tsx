"use client";

import Image from "next/image";
import Mobile_App_Project_Thumbnail from '../images/Mobile_App_Project_Thumbnail.jpg'
// Project List (Using Real URLs)
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
  {
    name: "Next Women's Fashion",
    type: "E-commerce",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.next.co.uk/style/st037829/d57188#d57188",
  },
  {
    name: "Next Main Store",
    type: "E-commerce",
    img: Mobile_App_Project_Thumbnail,
    link: "https://www.next.co.uk/",
  },
];

export default function RecentWork() {
  return (
    <section className="bg-[#E6F0FF] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#113162]">Recent Work</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          From innovative startups to reputable enterprises – we help pioneers plan, design, build, and ship software products worth talking about.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <Image
                src={project.img}
                alt={project.name}
                width={400}
                height={250}
                className="w-full h-60 object-cover rounded-xl"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:bg-opacity-70">
                <h3 className="text-white text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-300 text-sm">{project.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
