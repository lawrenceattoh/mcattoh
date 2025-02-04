"use client";

import Image from "next/image";
import SoftwareDevelopmentIcon from '../icons/devops.png';
import DataScienceIcon from '../icons/science.png';
import ProductDesignIcon from '../icons/product-design.png';
import BCIIcon from '../icons/intelligence.png';

const services = [
  {
    title: "Software Development",
    description: "We develop robust software, websites, and mobile applications tailored to your business needs, ensuring scalability, security, and seamless user experience.",
    icon: SoftwareDevelopmentIcon,
  },
  {
    title: "Data Science",
    description: "Empowering businesses with AI-driven analytics, predictive modeling, and data-driven strategies to unlock actionable insights and optimize operations.",
    icon: DataScienceIcon,
  },
  {
    title: "Product Design",
    description: "Designing intuitive and elegant digital experiences through research-driven UX/UI, ensuring seamless interactions and improved user engagement.",
    icon: ProductDesignIcon,
  },
  {
    title: "Brain-Computer Interface (BCI)",
    description: "Pioneering neurotechnology solutions that translate brain activity into actionable data, enabling direct interaction between the brain and digital systems.",
    icon: BCIIcon,
  },
];

const expertise = [
  {
    category: "Product Design",
    items: [
      "Idea Generation",
      "Market Research",
      "Concept Development",
      "Feasibility Analysis",
      "Prototyping",
      "Design Refinement",
      "Final Design Selection",
      "Detailed Engineering & Documentation",
      "Testing & Validation",
      "Post-Launch Evaluation",
    ],
  },
  {
    category: "Software Development",
    items: [
      "Requirements Gathering",
      "Analysis",
      "Implementation (Coding)",
      "Testing",
      "Deployment",
      "Maintenance & Updates",
      "Documentation",
      "Collaboration & Communication",
      "Quality Assurance",
      "Version Control & Security Considerations",
    ],
  },
  {
    category: "QA Testing",
    items: [
      "Understand Requirements",
      "Create Test Plan",
      "Design Test Cases",
      "Set Up Test Environment",
      "Execute Test Cases",
      "Record & Monitor Results",
      "Defect Reporting",
      "Regression & Performance Testing",
      "Security & User Acceptance Testing (UAT)",
      "Test Closure",
    ],
  },
  {
    category: "Development Frameworks/Modules",
    items: [
      "WordPress",
      "Magento",
      "Joomla",
      "Webflow",
      "Drupal",
      "Netlify",
      "Jamstack",
      "LIDAR",
      "Talend",
    ],
  },
  {
    category: "Programming Languages",
    items: [
      "Flutter",
      "ReactJS",
      "AngularJS",
      "Bootstrap",
      "VueJS",
      "CSS3",
      "NodeJS",
      "Python",
      "PHP",
      "React",
      "Laravel",
      "Django",
      "Flask",
    ],
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Apache Cassandra",
      "Apache HBase",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-[#113162] mb-12">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-6 group">
            {/* Service Icon */}
            <div className="flex-shrink-0 transition-transform transform group-hover:scale-110">
              <Image src={service.icon} alt={service.title} width={80} height={80} />
            </div>

            {/* Service Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#113162] transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expertise Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertise.map((card, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-left transition-shadow hover:shadow-xl hover:bg-white border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {card.category}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {card.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
