import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-2 py-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-[#f5f7fa] rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Sidebar */}
        <div className="bg-[#2d3642] text-white w-full md:w-1/3 p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-4">
            <img
              src="/profile.jpg"
              alt="Vigneshwaran Theerthagiri"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-bold text-center mb-1">VIGNESHWARAN<br />THEERTHAGIRI</h2>
          <div className="text-xs text-center mb-4">SOFTWARE DEVELOPER</div>
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-1">CONTACT</h3>
            <div className="text-xs">📞 8124791232</div>
            <div className="text-xs">✉️ vickysugu043@gmail.com</div>
            <div className="text-xs">🌐 https://github.com/vickysugu043</div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-1">TECHNICAL SKILLS</h3>
            <ul className="text-xs list-disc list-inside">
              <li>HTML &amp; CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-1">CORE SKILLS</h3>
            <ul className="text-xs list-disc list-inside">
              <li>Project Leadership</li>
              <li>Critical Thinking</li>
              <li>Team Management</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-1">EDUCATION</h3>
            <div className="text-xs">BE(ECE), Anna University<br />2015 - 2019</div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-1">LANGUAGES</h3>
            <div className="text-xs">English</div>
            <div className="text-xs">Tamil</div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">CERTIFICATION</h3>
            <div className="text-xs">
              <div>ReactJS Certification</div>
              <div>Full Stack Developer Certification</div>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-[#222] flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <h3 className="font-bold text-base border-b-2 border-[#2d3642] pb-1 mb-2">PROFILE</h3>
              <p className="text-xs mb-2">
                Result-oriented software developer with 3 years of experience in delivering scalable web applications. Proficient in React, Node.js, and modern JavaScript frameworks. Adept at collaborating with cross-functional teams to deliver high-quality solutions.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-base border-b-2 border-[#2d3642] pb-1 mb-2">WORK EXPERIENCE</h3>
              <div className="mb-2">
                <div className="font-semibold text-sm">Senior Software Developer</div>
                <div className="text-xs text-gray-600 mb-1">Dawn Technologies Solutions | Oct 2021 - Present</div>
                <ul className="text-xs list-disc list-inside mb-2">
                  <li>Lead a team of 5 developers for managing application tasks and client requirements.</li>
                  <li>Developed scalable React applications and REST APIs for multiple clients.</li>
                  <li>Collaborated with UI/UX teams to enhance user experience and interface design.</li>
                  <li>Mentored junior developers and conducted code reviews.</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-sm">Software Developer</div>
                <div className="text-xs text-gray-600 mb-1">Augmented Child Connect | Jun 2020 - Sep 2021</div>
                <ul className="text-xs list-disc list-inside">
                  <li>Developed and maintained web applications using React and Node.js.</li>
                  <li>Worked closely with clients to gather requirements and deliver solutions on time.</li>
                  <li>Implemented best practices for code quality and performance.</li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-base border-b-2 border-[#2d3642] pb-1 mb-2">PROFESSIONAL STRENGTHS</h3>
              <ul className="text-xs list-disc list-inside">
                <li>Strong skills in debugging, testing, and troubleshooting web applications.</li>
                <li>Excellent communication and collaboration abilities.</li>
                <li>Quick learner and adaptable to new technologies.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-base border-b-2 border-[#2d3642] pb-1 mb-2">CAREER GOAL</h3>
              <p className="text-xs">
                To work in a challenging environment, learn, and contribute towards organizational growth while enhancing my technical and personal skills.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base border-b-2 border-[#2d3642] pb-1 mb-2">SUMMARY</h3>
              <p className="text-xs">
                Passionate developer, skilled in JavaScript with 3 years of hands-on experience in building modern web applications. Always eager to learn and implement new technologies to solve real-world problems.
              </p>
            </div>
          </div>
          {/* Download button */}
          <div className="flex justify-center mt-8">
            <a
              href="/public/Mr.Vicky.pdf"
              download
              className="inline-block px-8 py-3 bg-cyan-500 text-white rounded-full shadow-md hover:bg-cyan-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
