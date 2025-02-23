import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-opacity-90 bg-gray-900 shadow-md p-4 flex justify-center space-x-6 text-lg font-semibold">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">About</Link>
        <Link to="interests" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Interests</Link>
        <Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Resume</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Contact</Link>
      </nav>

      {/* Sections */}
      <div className="pt-20">
        <motion.section id="about" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img src="/profile.jpg" alt="Profile" className="w-40 h-40 rounded-full mb-4 border-4 border-white" />
          <h1 className="text-5xl font-extrabold">Smd Almas</h1>
          <p className="mt-4 text-lg">Age: 20</p>
          <p className="text-lg">Education: Bachelor’s Degree in [Computer Science Engineering] from [Vel Tech Rangarajan Dr. Sagunthala R&D Ins tute of Science and Technology,Chennai.]</p>
          <p className="mt-2 text-lg italic">Always curious, sometimes nerdy, and occasionally lost in debugging for hours!</p>
        </motion.section>

        <motion.section id="interests" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-400 to-blue-600 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <h2 className="text-4xl font-bold text-yellow-300">My Interests</h2>
          <p className="mt-4 max-w-2xl text-lg">Networking, Cloud Computing, Kubernetes, DevOps, AI, and Open Source Contributions.</p>
          <p className="mt-2 max-w-2xl text-lg">Building scalable applications and experimenting with automation tools.</p>
          <p className="mt-2 max-w-2xl text-lg">Exploring AI-driven solutions and enhancing system performance.</p>
          <p className="mt-2 max-w-2xl text-lg">Contributing to open-source projects and collaborating with tech communities.</p>
        </motion.section>

        <motion.section id="resume" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-orange-400 to-red-500 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
          <h2 className="text-4xl font-bold">Resume</h2>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-lg text-gray-900 w-3/4 max-w-2xl">
            <iframe src="/resume.pdf" className="w-full h-96" title="Resume"></iframe>
          </div>
          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition text-lg font-semibold"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </motion.section>

        <motion.section id="contact" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
          <h2 className="text-4xl font-bold text-yellow-300">Contact Me</h2>
          <p className="mt-4 text-lg">Feel free to reach out through the following platforms:</p>
          <div className="flex space-x-6 mt-4 text-3xl">
            <a href="https://github.com/smd-almas" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaGithub />
            </a>
            <a href="mailto:smdkalmas@gmail.com" className="hover:text-yellow-300">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/almas-smd-203a9927a/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaLinkedin />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default App;