// src/pages/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    company: "TechCorp",
    role: "Senior React Developer",
    duration: "2022 - Present",
    details: "Led the redesign of a client dashboard using React and Redux, improving performance and UX."
  },
  {
    company: "InnovateX",
    role: "Frontend Engineer",
    duration: "2020 - 2022",
    details: "Developed UI components and animation systems for data visualization tools."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
        <p className="text-gray-400">My professional journey and contributions</p>
      </div>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-[#1c1c1c] p-6 rounded-xl shadow-neumorphic-dark"
          >
            <h3 className="text-xl font-semibold">{job.role} @ {job.company}</h3>
            <span className="text-sm text-cyan-400">{job.duration}</span>
            <p className="text-gray-400 mt-2">{job.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
