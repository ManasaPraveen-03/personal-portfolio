import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";

function App() {
  const [projectSlide, setProjectSlide] = useState(0);
  
  const [currentPage, setCurrentPage] = useState(0);

  const pages = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: 120 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -120 },
  };

  const sharedCardClass =
    "bg-white/5 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_18px_#22d3ee] backdrop-blur-lg p-6 rounded-xl transition-all duration-300";

  return (
    <div className="app-shell">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          particles: {
            number: { value: 90 },
            color: { value: "#00ffff" },
            size: { value: 2.5 },
            move: { enable: true, speed: 0.8 },
            links: {
              enable: true,
              distance: 140,
              color: "#00ffff",
              opacity: 0.22,
            },
          },
        }}
      />

      <div className="glow-ball glow-purple one"></div>
      <div className="glow-ball glow-blue two"></div>
      <div className="glow-ball glow-cyan three"></div>
      <div className="glow-ball glow-cyan four"></div>
      <div className="glow-ball glow-cyan five"></div>
      <div className="glow-ball glow-cyan six"></div>
      <div className="glow-ball glow-blue seven"></div>
      <div className="glow-ball glow-cyan eight"></div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 w-fit">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-8 py-3 rounded-full flex gap-6 text-sm shadow-[0_0_20px_rgba(34,211,238,0.08)]">
          {pages.map((page, index) => (
            <button
              key={page}
              onClick={() => setCurrentPage(index)}
              className={`transition ${
                currentPage === index ? "text-cyan-400" : "text-white hover:text-cyan-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={prevPage}
        disabled={currentPage === 0}
        className={`nav-arrow left-arrow ${
          currentPage === 0 ? "opacity-30 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextPage}
        disabled={currentPage === pages.length - 1}
        className={`nav-arrow right-arrow ${
          currentPage === pages.length - 1 ? "opacity-30 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronRight />
      </button>

      <div className={`page-wrapper ${currentPage === 3 ? "projects-wrapper" : "default-wrapper"}`}>
        <AnimatePresence mode="wait">
          {currentPage === 0 && (
            <motion.section
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="page-section"
            >
              <div className="text-center z-10 max-w-4xl px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                  Hello, This is Manasa Praveen 🥤
                </h1>

                <p className="text-xl text-white mb-6">
                  <ReactTyped
                    strings={[
                      "Developer",
                      "Tech Enthusiast",
                      "Content Creator",
                      "Classical Dancer",
                    ]}
                    typeSpeed={70}
                    backSpeed={40}
                    loop
                  />
                </p>

                <div className="flex justify-center gap-6 text-3xl mb-8 text-white">
                  <a
                    href="https://www.linkedin.com/in/manasa-kurapati"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="hover:text-blue-500 cursor-pointer transition" />
                  </a>

                  <a
                    href="https://github.com/ManasaPraveen-03"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="hover:text-gray-400 cursor-pointer transition" />
                  </a>

                  <a
                    href="https://www.instagram.com/_manasapraveen_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
                  </a>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1LVanUqjIcozeMUMQ9cRpwXaGj2PEBt18/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 text-black px-6 py-2 rounded-lg hover:bg-cyan-400 transition font-medium"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.section>
          )}

          {currentPage === 1 && (
            <motion.section
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="page-section"
            >
              <div className="max-w-4xl text-center px-8 z-10">
                <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                  I&apos;m Manasa Praveen, a B.Tech student passionate about technology,
                  creativity, and building impactful solutions. I maintain a strong
                  academic record with a CGPA of 9.81 and actively explore software
                  development, data-driven technologies, and innovative digital ideas.
                </p>

                <p className="text-gray-400 text-lg mt-5 leading-relaxed">
                  Beyond academics, I am a district-level badminton player, a classical
                  dancer who has completed my Arangetram, and a content creator who enjoys
                  sharing ideas and creativity online.
                </p>
              </div>
            </motion.section>
          )}

          {currentPage === 2 && (
            <motion.section
              key="skills"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="page-section"
            >
              <div className="max-w-5xl w-full px-8 z-10">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Tech Stack</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    "C",
                    "C++",
                    "Java",
                    "Python",
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Express.js",
                    "HTML",
                    "CSS",
                    "Tailwind CSS",
                    "REST APIs",
                    "Git",
                    "GitHub",
                  ].map((skill) => (
                    <div key={skill} className={sharedCardClass}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {currentPage === 3 && (
  <motion.section
    key="projects"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.6 }}
    className="page-section"
  >
    <div className="max-w-6xl w-full px-8 z-10">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">
        Projects
      </h2>

      {/* SLIDE NAV */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setProjectSlide((prev) => Math.max(prev - 1, 0))}
          className="text-white text-2xl opacity-70 hover:opacity-100"
        >
          ⬅️
        </button>

        <p className="text-gray-400 text-sm">
          {projectSlide + 1} / 2
        </p>

        <button
          onClick={() => setProjectSlide((prev) => Math.min(prev + 1, 1))}
          className="text-white text-2xl opacity-70 hover:opacity-100"
        >
          ➡️
        </button>
      </div>

      {/* SLIDES */}
      {projectSlide === 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className={sharedCardClass}>
            <h3 className="text-2xl font-semibold mb-3">UniConnect</h3>
            <p className="text-gray-400">
              University event management platform built with modern web technologies.
            </p>
          </div>

          <div className={sharedCardClass}>
            <h3 className="text-2xl font-semibold mb-3">Personal Portfolio Website</h3>
            <p className="text-gray-400">
              Built using React and Tailwind CSS with animations and modern UI.
            </p>
          </div>

          <div className={sharedCardClass}>
            <h3 className="text-2xl font-semibold mb-3">SmartRoute AI</h3>
            <p className="text-gray-400">
              AI-based ride optimization system minimizing time, cost, and cancellation risk.
            </p>
          </div>

          <div className={sharedCardClass}>
            <h3 className="text-2xl font-semibold mb-3">Gestify</h3>
            <p className="text-gray-400">
              Real-time sign language translator using computer vision.
            </p>
          </div>
        </div>
      )}

      {projectSlide === 1 && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className={sharedCardClass}>
            <h3 className="text-2xl font-semibold mb-3">
              Ride Cancellation Prediction (NUS)
            </h3>
            <p className="text-gray-400">
              Built ML models using XGBoost and Transformers for prediction.
            </p>
          </div>

          <div className={sharedCardClass}>
            <h3 className="text-2xl font-semibold mb-3">FlashPop</h3>
            <p className="text-gray-400">
              AI-powered flashcard generator for smart revision.
            </p>
          </div>

          <div className={sharedCardClass}>
            <h3 className="text-2xl font-semibold mb-3">
              AWS Hosting Project
            </h3>
            <p className="text-gray-400">
              Deployed static website using S3 and EC2 with CLI setup.
            </p>
          </div>
        </div>
      )}
    </div>
  </motion.section>
)}

          {currentPage === 4 && (
            <motion.section
              key="achievements"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="page-section"
            >
              <div className="max-w-6xl w-full px-8 z-10">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Achievements</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className={sharedCardClass}>
                    <h3 className="text-2xl font-semibold mb-2">Academic Excellence</h3>
                    <p className="text-gray-400 text-sm">
                      Maintaining a CGPA of <span className="text-white font-semibold">9.81</span> and
                      consistently performing among the top students in my B.Tech program.
                    </p>
                  </div>

                  <div className={sharedCardClass}>
                    <h3 className="text-2xl font-semibold mb-2">District Badminton Player</h3>
                    <p className="text-gray-400 text-sm">
                      Represented at the district level in badminton, demonstrating discipline, focus,
                      and competitive spirit.
                    </p>
                  </div>

                  <div className={sharedCardClass}>
                    <h3 className="text-2xl font-semibold mb-2">Classical Dance</h3>
                    <p className="text-gray-400 text-sm">
                      Successfully completed Arangetram in classical dance after years of training and
                      stage performances.
                    </p>
                  </div>

                  <div className={sharedCardClass}>
                    <h3 className="text-2xl font-semibold mb-2">MUN & Public Speaking</h3>
                    <p className="text-gray-400 text-sm">
                      Actively participated in Model United Nations and served as a lead emcee in school events.
                    </p>
                  </div>

                  <div className={sharedCardClass}>
                    <h3 className="text-2xl font-semibold mb-2">Content Creation</h3>
                    <p className="text-gray-400 text-sm">
                      Built an online presence through creative content, with a reel reaching over 11.3M views.
                    </p>
                  </div>

                  <div className={sharedCardClass}>
                    <h3 className="text-2xl font-semibold mb-2">Merit Scholarship</h3>
                    <p className="text-gray-400 text-sm">
                      Received a merit-based scholarship in recognition of consistent academic excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {currentPage === 5 && (
            <motion.section
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="page-section"
            >
              <div className="text-center px-8 z-10">
                <h2 className="text-4xl font-bold mb-8">Contact</h2>

                <p className="text-gray-400 mb-8 max-w-xl">
                  Feel free to reach out through any of the platforms below.
                </p>

                <div className="space-y-4 text-lg">
                  <p>
                    <span className="text-gray-400">Email:</span>{" "}
                    <a href="mailto:manasa.lpm@gmail.com" className="text-cyan-400 hover:underline">
                      manasa.lpm@gmail.com
                    </a>
                  </p>

                  <p>
                    <span className="text-gray-400">LinkedIn:</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/manasa-kurapati"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      linkedin.com/in/manasa-kurapati
                    </a>
                  </p>

                  <p>
                    <span className="text-gray-400">GitHub:</span>{" "}
                    <a
                      href="https://github.com/ManasaPraveen-03"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      github.com/ManasaPraveen-03
                    </a>
                  </p>

                  <p>
                    <span className="text-gray-400">Instagram:</span>{" "}
                    <a
                      href="https://www.instagram.com/_manasapraveen_/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      @_manasapraveen_
                    </a>
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;