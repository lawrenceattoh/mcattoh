"use client";

import { useState, useEffect } from "react";
// Metrics Data with Animated Number
const metricsData = [
  { number: 2, text: "Years in Business", suffix: "" },
  { number: 25, text: "Successful Projects", suffix: "" },
  { number: 35, text: "Clients", suffix: "+" },
  { number: 4.9, text: "Average Rating from Clients", suffix: "/5" },
  { number: 12, text: "Industries Served", suffix: "+" },
  { number: 48, text: "Coding Technologies Leveraged", suffix: "+" },
];

// Trusted Companies Logos (stored in `/public/logos/`)
// const trustedCompanies = [
//   { src: ProtocolLabsIcon, alt: "Protocol Labs" },
//   { src: "/logos/scotch-soda.png", alt: "Scotch & Soda" },
//   { src: "/logos/walmart.png", alt: "Walmart" },
//   { src: "/logos/blackrock-neurotech.png", alt: "Blackrock Neurotech" },
//   { src: "/logos/evgo.png", alt: "EVgo" },
// ];

export default function Metrics() {
  const [metrics, setMetrics] = useState(
    metricsData.map((metric) => ({ ...metric, value: 0 }))
  );

  // Incremental Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) =>
        prevMetrics.map((metric) => ({
          ...metric,
          value:
            metric.value < metric.number
              ? Math.min(metric.value + Math.ceil(metric.number / 20), metric.number)
              : metric.number,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#113162] text-white py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold tracking-tight">Our Metrics</h2>
        <p className="text-lg text-gray-300 mt-4">
          From innovative startups to reputable enterprises – we help pioneers plan, design, build, and ship software products worth talking about.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-10">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-5xl font-extrabold text-[#FFD700]">
                {metric.value}
                {metric.suffix}
              </p>
              <p className="text-gray-300 text-lg">{metric.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Section with Auto-Scroll */}
      {/* <div className="mt-12 border-t border-gray-500 pt-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Trusted By</h3>
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="flex gap-10 animate-scroll">
            {trustedCompanies.map((company, index) => (
              <Image
                key={index}
                src={company.src}
                alt={company.alt}
                width={150}
                height={50}
                className="grayscale opacity-75 hover:opacity-100 transition-all duration-300"
              />
            ))}

            {trustedCompanies.map((company, index) => (
              <Image
                key={index + trustedCompanies.length}
                src={company.src}
                alt={company.alt}
                width={150}
                height={50}
                className="grayscale opacity-75 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* Tailwind animation for scrolling */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
