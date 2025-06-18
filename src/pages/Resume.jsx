// src/pages/Resume.jsx
import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-[#1c1c1c] p-10 rounded-xl shadow-neumorphic"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Resume</h2>
        <a
          href="/Mr.Vicky.pdf"
          download
          className="inline-block px-8 py-3 bg-cyan-500 text-white rounded-full shadow-md hover:bg-cyan-600 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
