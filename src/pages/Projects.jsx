// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-[#121212]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2">Some of my personal and freelance projects</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-[#1e1e1e] shadow-neumorphic"
          >
            <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
            <p className="text-gray-400">Brief description about Project {i}. Built using modern tech stack.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
