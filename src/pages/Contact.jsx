// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Interested in working together or have questions? Drop a message below.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-[#1c1c1c] border border-gray-700 rounded-xl text-white" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-[#1c1c1c] border border-gray-700 rounded-xl text-white" />
          <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 bg-[#1c1c1c] border border-gray-700 rounded-xl text-white"></textarea>
          <button type="submit" className="px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
