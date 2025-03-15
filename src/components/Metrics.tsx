"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Importing images
import VectorIllustration from "@/images/Vector_Metrics.png"; 
import ProtocolLabs from "@/images/protocol_labs.png";
import ScotchSoda from "@/images/scotch_soda.png";
import Walmart from "@/images/walmart.png";
import BlackrockNeurotech from "@/images/blackrock_neurotech.png";
import EVgo from "@/images/EVgo.png";

// Metrics Data
const metricsData = [
  { number: 2, text: "Years in Business", suffix: "" },
  { number: 25, text: "Successful Projects", suffix: "" },
  { number: 35, text: "Clients", suffix: "+" },
  { number: 4.9, text: "Average Rating from Clients", suffix: "/5" },
  { number: 12, text: "Industries Served", suffix: "+" },
  { number: 48, text: "Coding Technologies Leveraged", suffix: "+" },
];

// Trusted Companies Logos
const trustedCompanies = [
  { src: ProtocolLabs, alt: "Protocol Labs" },
  { src: ScotchSoda, alt: "Scotch & Soda" },
  { src: Walmart, alt: "Walmart" },
  { src: BlackrockNeurotech, alt: "Blackrock Neurotech" },
  { src: EVgo, alt: "EVgo" },
];

export default function Metrics() {
  const [metrics, setMetrics] = useState(
    metricsData.map((metric) => ({ ...metric, value: 0 }))
  );

  // Slower Incremental Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) =>
        prevMetrics.map((metric) => ({
          ...metric,
          value:
            metric.value < metric.number
              ? Math.min(
                  metric.value + Math.ceil(metric.number / 17), // Slower increment
                  metric.number
                )
              : metric.number,
        }))
      );
    }, 80); // Slower interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#E8DCCB] text-[#3D2C19] py-20 px-6">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        
        {/* Left - Metrics Content */}
        <div className="text-left relative z-10">
          <h2 className="text-5xl font-extrabold tracking-tight">Our Metrics</h2>
          <p className="text-xl text-[#5B4736] mt-4 leading-[1.6]">
            From innovative startups to reputable enterprises – we help pioneers
            plan, design, build, and ship software products worth talking about.
          </p>

          {/* Divider Line */}
          <div className="border-t border-[#3D2C19] w-[90%] my-6"></div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-y-8 text-[34px] md:text-[38px] font-bold">
            {metrics.map((metric, index) => (
              <div key={index} className="text-left">
                <p className="text-5xl md:text-6xl font-extrabold leading-none">
                  {metric.value}
                  {metric.suffix}
                </p>
                <p className="text-lg md:text-xl text-[#5B4736] leading-tight">
                  {metric.text}
                </p>
              </div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="border-t border-[#3D2C19] w-[90%] my-8"></div>

          {/* Trusted By Logos */}
          <h3 className="text-lg font-semibold text-[#5B4736] mb-4">Trusted By</h3>
          <div className="flex flex-wrap justify-between items-center gap-4">
            {trustedCompanies.map((company, index) => (
              <Image
                key={index}
                src={company.src}
                alt={company.alt}
                width={90} // Responsive width
                height={40}
                className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] opacity-90 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* Right - Vector Illustration */}
        <div className="hidden md:flex justify-end absolute 
  top-[-5%] md:top-[-9%] lg:top-[-10%] xl:top-[-12%] 2xl:top-[-12%]
  right-[4%] md:right-[-2.9%] lg:right-[2%] xl:right-[-4.50%] 2xl:right-[-15%] z-0">
  
  <Image
    src={VectorIllustration}
    alt="Decorative vector"
    width={600}
    height={400}
  />
</div>


      </div>
    </section>
  );
}
