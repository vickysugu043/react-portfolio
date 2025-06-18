import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./index.css";
import StarsBackground from "./components/StarBackground";

function App() {
  return (
    <HelmetProvider>
    <div className="bg-[#0f0f0f] text-white font-inter">
      <StarsBackground />
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
    </HelmetProvider>
  );
}

export default App;