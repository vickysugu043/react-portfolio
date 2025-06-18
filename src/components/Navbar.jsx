// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "About", "Portfolio", "Projects", "Experience", "Resume", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">Bheem.dev</div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="hover:text-cyan-400 transition"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-[#1a1a1a] overflow-hidden"
        >
          {links.map((link) => (
            <div
              key={link}
              onClick={() => scrollToSection(link)}
              className="px-4 py-3 border-b border-gray-700 hover:bg-cyan-500 hover:text-white"
            >
              {link}
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;