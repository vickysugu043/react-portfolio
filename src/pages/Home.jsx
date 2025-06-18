import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from '../assets/images/main.jpg';
import "../index.css";

// Array of colors to pick randomly
const colors = [
  "text-green-600",
  "text-blue-600",
  "text-red-500",
  "text-yellow-500",
  "text-pink-500",
  "text-purple-600",
  "text-cyan-500",
  "text-orange-500",
];

const borderColors = [
  "border-green-600",
  "border-blue-600",
  "border-red-500",
  "border-yellow-500",
  "border-pink-500",
  "border-purple-600",
  "border-cyan-500",
  "border-orange-500",
];

const bgColors = [
  "hover:bg-green-600",
  "hover:bg-blue-600",
  "hover:bg-red-500",
  "hover:bg-yellow-500",
  "hover:bg-pink-500",
  "hover:bg-purple-600",
  "hover:bg-cyan-500",
  "hover:bg-orange-500",
];

const typingWords = ["Web Developer", "Developer", "Web Designer"];

const getRandomIndex = () => Math.floor(Math.random() * colors.length);

const Home = () => {
  // Typing effect for the profession
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // For random color
  const [colorIdx, setColorIdx] = useState(getRandomIndex());

  useEffect(() => {
    let timeout;
    const currentWord = typingWords[wordIndex];
    if (!isDeleting && displayed.length < currentWord.length) {
      timeout = setTimeout(
        () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
        100
      );
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(currentWord.slice(0, displayed.length - 1)),
        60
      );
    } else if (!isDeleting && displayed.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => {
          const next = (prev + 1) % typingWords.length;
          setColorIdx(getRandomIndex());
          return next;
        });
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  // For highlight and border color
  const colorClass = colors[colorIdx];
  const borderClass = borderColors[colorIdx];
  const bgHoverClass = bgColors[colorIdx];

  return (
    <section
      id="home"
      className="home flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 min-h-screen bg-black px-4 md:px-8 py-12"
    >
      {/* Image Section - Now above content on mobile */}
      <motion.div
        className="home-img flex-shrink-0 order-1 md:order-none"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={`rounded-full overflow-hidden border-8 ${borderClass} shadow-lg w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center bg-[#1a1a1a]`}
        >
          <img 
            src={profileImage} 
            alt="Bheem's Profile" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/340'; // Fallback image
            }}
          />
        </div>
        <div className={`mt-4 ${colorClass} text-2xl font-bold text-center`}>
          @Mr_Bheem
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="home-content max-w-xl order-2 md:order-none"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
          Hi, It's <span className={colorClass}>Bheem</span>
        </h1>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          I'm a{" "}
          <span className={colorClass}>
            {displayed}
            <span className={`animate-pulse ${colorClass}`}>|</span>
          </span>
        </h3>
        <p className="text-base md:text-lg text-gray-300 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore
          dolores esse. Odit similique doloribus tenetur doloremque, sunt
          commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam
          quaerat neque asperiores ea.
        </p>
        
        {/* Social Icons */}
        <div className="social-icons flex gap-4 mb-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 ${borderClass} ${colorClass} rounded-full w-10 h-10 flex items-center justify-center text-xl ${bgHoverClass} hover:text-black transition`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 ${borderClass} ${colorClass} rounded-full w-10 h-10 flex items-center justify-center text-xl ${bgHoverClass} hover:text-black transition`}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your@email.com"
            className={`border-2 ${borderClass} ${colorClass} rounded-full w-10 h-10 flex items-center justify-center text-xl ${bgHoverClass} hover:text-black transition`}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 ${borderClass} ${colorClass} rounded-full w-10 h-10 flex items-center justify-center text-xl ${bgHoverClass} hover:text-black transition`}
          >
            <FaInstagram />
          </a>
        </div>
        
        {/* Hire Me Button */}
        <a
          href="#contact"
          className={`btn inline-block px-8 py-3 bg-black border-2 ${borderClass} ${colorClass} rounded-full font-semibold text-lg ${bgHoverClass} hover:text-black transition`}
        >
          Hire me
        </a>
      </motion.div>
    </section>
  );
};

export default Home;