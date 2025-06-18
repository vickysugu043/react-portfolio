// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate React developer with a strong background in JavaScript, UI/UX design, and creating elegant interfaces.
          I love crafting responsive, performant, and accessible web applications with modern tools and clean design principles.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
