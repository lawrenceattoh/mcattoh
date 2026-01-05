import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Social Icons
import LogoWhite from "../logo/PNG/White.png";

const Footer = () => {
  return (
    <footer className="bg-[#33230A] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - Logo & Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4">
            <Image src={LogoWhite} alt="Logo" className="w-56 cursor-pointer" />
          </Link>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Empowering AI-driven solutions for the future.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/mcattoh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Center Section - Navigation Links (Same as Navbar) */}
        <nav className="flex flex-col items-center space-y-2 md:items-start">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-white transition"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="text-gray-300 hover:text-white transition"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section - Contact & Address */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-gray-400 text-sm">104 Dickens Avenue, Uxbridge</p>
          <p className="text-gray-400 text-sm">United Kingdom, UB8 3DN</p>
          {/* <p className="text-gray-400 text-sm mt-2">Email: support@mcattoh.com</p> */}
          <p className="text-gray-400 text-sm mt-2">
            Email: <a href="mailto:support@mcattoh.com">support@mcattoh.com</a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-center text-gray-500 text-sm mt-10">
        © 2026 MCATTOH AI | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
