"use client";

import { useState, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import LogoBlack from '../logo/PNG/Black.png';
// import LogoWhite from '../logo/PNG/White.png';
import LogoColored from '../logo/PNG/Colored.png';
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
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#" className="hover:text-gray-500">About</a></li>
          <li><a href="#" className="hover:text-gray-500">Work</a></li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-500 flex items-center">
              Solutions <FaChevronDown className="ml-1" />
            </a>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-2 p-3 shadow-lg rounded-lg">
              <a href="#" className="block hover:text-gray-700 py-1">AI</a>
              <a href="#" className="block hover:text-gray-700 py-1">BCI</a>
              <a href="#" className="block hover:text-gray-700 py-1">Cloud</a>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-500 flex items-center">
              Resources <FaChevronDown className="ml-1" />
            </a>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-2 p-3 shadow-lg rounded-lg">
              <a href="#" className="block hover:text-gray-700 py-1">Blog</a>
              <a href="#" className="block hover:text-gray-700 py-1">Case Studies</a>
              <a href="#" className="block hover:text-gray-700 py-1">Whitepapers</a>
            </div>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#" className="hidden md:block px-4 py-2 rounded-full text-sm font-semibold shadow-lg bg-[#113162] text-white hover:bg-gray-800 transition-all">
          GET IN TOUCH
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="p-6 space-y-6">
          <button className="absolute top-4 right-4 text-2xl" onClick={() => setMenuOpen(false)}>
            <IoMdClose />
          </button>
          <a href="#" className="block py-2 text-lg">About</a>
          <a href="#" className="block py-2 text-lg">Work</a>
          <a href="#" className="block py-2 text-lg">Solutions</a>
          <a href="#" className="block py-2 text-lg">Resources</a>
          <a href="#" className="block bg-[#113162] text-white text-center py-2 mt-2 rounded-md">GET IN TOUCH</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
