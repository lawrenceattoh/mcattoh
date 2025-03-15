"use client";

import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineWork, MdOutlineContactMail } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import Image from "next/image";
import LogoBlack from "../logo/PNG/Black.png";
import LogoColored from "../logo/PNG/Colored.png";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white bg-opacity-85 shadow-md text-black" : "bg-white bg-opacity-85 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center font-bold text-xl">
          <Image src={scrolling ? LogoBlack : LogoColored} alt="Logo" className="w-44" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-12 font-medium">
          <Link href="/services" className="hover:text-gray-500 transition">
            Services
          </Link>
          <Link href="/work" className="hover:text-gray-500 transition">
            Work
          </Link>
          <Link href="/about" className="hover:text-gray-500 transition">
            About
          </Link>
        </ul>

        {/* CTA Button */}
        <Link href="/contact" className="hidden md:block px-4 py-2 rounded-full text-sm font-semibold shadow-lg bg-[#113162] text-white hover:bg-gray-800 transition-all">
  GET IN TOUCH
</Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button className="absolute top-5 right-6 text-white text-3xl" onClick={() => setMenuOpen(false)}>
          <IoMdClose />
        </button>

        {/* Mobile Menu Content */}
        <div className="flex flex-col items-center space-y-6">
          {/* Logo Centered */}
          <Image src={LogoColored} alt="Logo" className="w-40 mb-8" />

          {/* Menu Links */}
          <Link href="/services" className="text-white text-xl flex items-center space-x-2 hover:text-gray-300 transition">
            <AiOutlineHome size={24} />
            <span>Services</span>
          </Link>
          <Link href="/work" className="text-white text-xl flex items-center space-x-2 hover:text-gray-300 transition">
            <MdOutlineWork size={24} />
            <span>Work</span>
          </Link>
          <Link href="/about" className="text-white text-xl flex items-center space-x-2 hover:text-gray-300 transition">
            <MdOutlineContactMail size={24} />
            <span>About</span>
          </Link>

          {/* CTA Button - Get in Touch */}
          <a
            href="/contact"
            className="mt-6 px-6 py-3 rounded-full text-lg font-semibold shadow-lg bg-[#113162] text-white hover:bg-gray-700 transition"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
