import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => (
  <section id="portfolio" className="min-h-screen flex items-center justify-center px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
      <p className="text-lg md:text-2xl text-gray-300 mb-8">
        A selection of projects showcasing my skills in React and frontend development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#181818] rounded-xl shadow-neumorphic p-6"
        >
          <h3 className="text-2xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-400 mb-4">
            A brief description of the project goes here. Highlight features and technologies used.
          </p>
          <a
            href="https://github.com/VickySugu043/project-one"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
          >
            View Code
          </a>
        </motion.div>
        {/* Add more project cards as needed */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#181818] rounded-xl shadow-neumorphic p-6"
        >
          <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-400 mb-4">
            Another project description. Mention what makes this project unique or interesting.
          </p>
          <a
            href="https://github.com/VickySugu043/project-two"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
          >
            View Code
          </a>
        </motion.div>
        {/* Example for a live demo link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#181818] rounded-xl shadow-neumorphic p-6"
        >
          <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-400 mb-4">
            Short description for a project with a live demo.
          </p>
          <a
            href="https://your-live-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
            Live Demo
          </a>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Portfolio;