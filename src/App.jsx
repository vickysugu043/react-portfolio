// src/App.jsx
import React from "react";
import { Helmet } from "react-helmet";

// Placeholder Components
const Navbar = () => <div className="p-4 shadow-lg">Navbar</div>;
const Home = () => (
  <section id="home" className="min-h-screen flex items-center justify-center">
    Home Section
  </section>
);
const About = () => (
  <section id="about" className="min-h-screen flex items-center justify-center">
    About Section
  </section>
);
const Portfolio = () => (
  <section
    id="portfolio"
    className="min-h-screen flex items-center justify-center"
  >
    Portfolio Section
  </section>
);
const Projects = () => (
  <section
    id="projects"
    className="min-h-screen flex items-center justify-center"
  >
    Projects Section
  </section>
);
const Experience = () => (
  <section
    id="experience"
    className="min-h-screen flex items-center justify-center"
  >
    Experience Section
  </section>
);
const Resume = () => (
  <section
    id="resume"
    className="min-h-screen flex items-center justify-center"
  >
    <a
      href="/resume.pdf"
      download
      className="px-6 py-3 bg-white text-black rounded-lg shadow-md hover:shadow-xl transition"
    >
      Download Resume
    </a>
  </section>
);
const Contact = () => (
  <section
    id="contact"
    className="min-h-screen flex items-center justify-center"
  >
    Contact Section
  </section>
);

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white font-inter">
      <Helmet>
        <title>Bheem | React Developer Portfolio</title>
        <meta
          name="description"
          content="Experienced React JS Developer portfolio..."
        />
        <meta
          name="keywords"
          content="React Developer, JavaScript, Frontend Engineer..."
        />
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
