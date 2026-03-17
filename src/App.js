import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function App() {

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col overflow-hidden">

      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          background: { color: "#000000" },
          particles: {
            number: { value: 120 },
            color: { value: "#00ffff" },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              distance: 150,
              color: "#00ffff",
              opacity: 0.3
            }
          }
        }}
      />

      {/* NAVBAR */}
      <div className="absolute top-6 w-full flex justify-center z-20">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-8 py-3 rounded-full flex gap-8 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#achievements" className="hover:text-blue-400 transition">Achievements</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-20 blur-[150px] rounded-full top-[-200px] left-[-200px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[150px] rounded-full bottom-[-200px] right-[-200px] animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-400 opacity-20 blur-[120px] rounded-full top-[20%] right-[10%] animate-pulse"></div>

<div className="absolute w-[250px] h-[250px] bg-cyan-300 opacity-20 blur-[120px] rounded-full bottom-[30%] left-[10%] animate-pulse"></div>

<div className="absolute w-[200px] h-[200px] bg-cyan-500 opacity-20 blur-[120px] rounded-full top-[60%] right-[25%] animate-pulse"></div>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center">

        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-5xl font-bold mb-4">
            Hello, This is Manasa Praveen 🥤
          </h1>

          <p className="text-xl text-gray-400 mb-6">
            <ReactTyped
              strings={[
                "Developer",
                "Tech Enthusiast",
                "Content Creator",
                "Classical Dancer"
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </p>

          <div className="flex justify-center gap-6 text-3xl mb-6">

            <a href="https://www.linkedin.com/in/manasa-kurapati" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-500 cursor-pointer"/>
            </a>

            <a href="https://github.com/ManasaPraveen-03" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-400 cursor-pointer"/>
            </a>

            <a href="https://www.instagram.com/_manasapraveen_/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 cursor-pointer"/>
            </a>

          </div>

          <div className="flex justify-center gap-4">

            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Resume
            </button>

            <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
              Let's Talk
            </button>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex items-center justify-center px-10">

        <div className="max-w-4xl text-center">

          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I'm Manasa Praveen, a B.Tech student passionate about technology,
            creativity, and building impactful solutions. I maintain a strong
            academic record with a CGPA of 9.81 and actively explore software
            development, data-driven technologies, and innovative digital ideas.
          </p>

          <p className="text-gray-400 text-lg mt-4 leading-relaxed">
            Beyond academics, I am a district-level badminton player, a classical
            dancer who has completed my Arangetram, and a content creator who enjoys
            sharing ideas and creativity online.
          </p>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-10">

        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">UniConnect</h3>
            <p className="text-gray-400 mb-4">
              University event management platform built with modern web technologies.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">Number Guessing Game</h3>
            <p className="text-gray-400 mb-4">
              Interactive JavaScript game where users guess a randomly generated number.
            </p>
          </motion.div>
          <motion.div 
  whileHover={{ scale: 1.05 }} 
  className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl"
>
  <h3 className="text-2xl font-semibold mb-3">Personal Portfolio Website</h3>

  <p className="text-gray-400 mb-4">
    Designed and developed a responsive personal portfolio using React, Tailwind CSS, and modern UI animations to showcase projects, achievements, and contact information.
  </p>

  <p className="text-sm text-gray-500">
    Tech Stack: React, Tailwind CSS, Framer Motion
  </p>
</motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">FlashPop – AI Study Companion</h3>
            <p className="text-gray-400">
              AI tool that generates smart flashcards automatically from study material.
            </p>
          </motion.div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
<section id="achievements" className="min-h-screen flex flex-col items-center justify-center px-10">

  <h2 className="text-4xl font-bold mb-12">Achievements</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

    <motion.div whileHover={{ scale: 1.07 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-2">Academic Excellence</h3>
      <p className="text-gray-400 text-sm">
        Maintaining a CGPA of <span className="text-white font-semibold">9.81</span> and consistently performing among the top students in my B.Tech program.
      </p>
    </motion.div>

    <motion.div whileHover={{ scale: 1.07 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-2">District Badminton Player</h3>
      <p className="text-gray-400 text-sm">
        Represented at the district level in badminton, demonstrating discipline, focus, and competitive spirit.
      </p>
    </motion.div>

    <motion.div whileHover={{ scale: 1.07 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-2">Classical Dance</h3>
      <p className="text-gray-400 text-sm">
        Successfully completed Arangetram in classical dance after years of training and stage performances.
      </p>
    </motion.div>

    <motion.div whileHover={{ scale: 1.07 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-2">MUN & Public Speaking</h3>
      <p className="text-gray-400 text-sm">
        Actively participated in Model United Nations and served as a lead emcee in school events.
      </p>
    </motion.div>

    <motion.div whileHover={{ scale: 1.07 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-2">Content Creation</h3>
      <p className="text-gray-400 text-sm">
        Built an online presence through creative content, with a reel reaching over 11.3M views.
      </p>
    </motion.div>

    <motion.div whileHover={{ scale: 1.07 }} className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-2">Merit Scholarship</h3>
      <p className="text-gray-400 text-sm">
        Received a merit-based scholarship in recognition of consistent academic excellence.
      </p>
    </motion.div>

  </div>

</section>

     {/* CONTACT */}
<section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-6">

  <h2 className="text-4xl font-bold mb-8">Contact</h2>

  <p className="text-gray-400 mb-8 max-w-xl">
    Feel free to reach out through any of the platforms below.
  </p>

  <div className="space-y-4 text-lg">

    <p>
      <span className="text-gray-400">Email:</span>{" "}
      <a 
        href="mailto:manasa.lpm@gmail.com" 
        className="text-blue-400 hover:underline"
      >
        manasa.lpm@gmail.com
      </a>
    </p>

    <p>
      <span className="text-gray-400">LinkedIn:</span>{" "}
      <a 
        href="https://www.linkedin.com/in/manasa-kurapati" 
        target="_blank" 
        rel="noreferrer"
        className="text-blue-400 hover:underline"
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
        className="text-blue-400 hover:underline"
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
        className="text-blue-400 hover:underline"
      >
        @_manasapraveen_
      </a>
    </p>

  </div>

</section>

    </div>
  );
}

export default App;