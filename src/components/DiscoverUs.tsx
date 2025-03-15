"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Frame_DiscoverUS from "@/images/Frame_DiscoverUS.png"; // Ensure correct path

export default function DiscoverUs() {
  // Reference for the Section
  const sectionRef = useRef(null);

  // Scroll Progress - Tracks when section enters viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef, 
    offset: ["start end", "start center"], // Animates as section enters view
  });

  // Image comes from below (start: 150px below, end: normal position)
  const yMovement = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <section ref={sectionRef} className="bg-white flex justify-center py-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#FCFBFA] border border-[#8B6C42] rounded-3xl shadow-md max-w-6xl w-full p-10">
        
        {/* Left Side - Animated Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div 
            style={{ y: yMovement }} // Moves up on scroll
            transition={{ type: "spring", stiffness: 70, damping: 30, duration: 1.5 }}
          >
            <Image
              src={Frame_DiscoverUS}
              alt="Astronaut VR"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-left md:pl-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1B1B] leading-tight">
            Everything You Need to <br /> Power Your Business
          </h2>
          <p className="text-[#4A4A4A] mt-4 text-lg">
            From cutting-edge software to AI-driven solutions, we provide the tools and expertise 
            to help your business thrive in a digital world.
          </p>
          <button className="mt-6 bg-[#8B6C42] text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-[#6E5332] transition-all">
            Discover Our Solutions
          </button>
        </div>

      </div>
    </section>
  );
}
