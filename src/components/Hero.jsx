import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-[#050d2a] relative overflow-hidden text-white pt-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center w-full relative z-20">
        
        {/* Left Content Column - Now Centered */}
        <div className="flex flex-col items-center text-center space-y-6 md:w-1/2">
          <div>
            <motion.p
              className="text-slate-400 text-lg font-medium tracking-wide mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight block py-2"
              style={{ color: "#ffffff" }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Ankush Saroj
            </motion.h1>
          </div>

          <div className="text-xl md:text-2xl text-cyan-400 font-semibold tracking-wide h-8">
            <TypeAnimation
              sequence={[
                "Embedded Firmware Engineer",
                2000,
                "IoT Developer",
                2000,
                "STM32 & ESP32 Enthusiast",
                2000,
                "Embedded Systems Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            className="text-slate-400 leading-relaxed max-w-xl text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Passionate Embedded Systems Engineer focused on building reliable embedded solutions. 
            Experienced in microcontroller peripheral architectures, real-time firmware development, 
            and scalable IoT system integrations.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-6 py-3.5 rounded-xl text-white font-medium shadow-lg shadow-indigo-600/20 transition duration-300"
            >
              <FaArrowRight className="text-sm" />
              <span>View Projects</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 border border-slate-800 bg-slate-900/30 backdrop-blur-sm px-6 py-3.5 rounded-xl font-medium hover:bg-slate-800/50 transition duration-300"
            >
              <FaEnvelope className="text-sm" />
              <span>Get In Touch</span>
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="https://github.com/ankushsaroj530" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-xl text-slate-400 hover:text-white hover:border-slate-600 transition duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ankush-saroj-1b1a291b1/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-xl text-slate-400 hover:text-white hover:border-slate-600 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="#contact" className="w-11 h-11 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-xl text-slate-400 hover:text-white hover:border-slate-600 transition duration-300">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="md:w-1/2 flex justify-center relative">
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full transform scale-110"></div>
            <div className="relative p-1 border border-slate-800 rounded-full bg-slate-900/20 backdrop-blur-sm shadow-2xl">
              <img
                src={profile}
                alt="Ankush Saroj"
                className="w-62 h-62 md:w-96 md:h-96 rounded-full object-cover grayscale-[10%] contrast-[105%]"
              />
            </div>
            <div className="absolute bottom-6 right-0 md:right-4 z-30">
              <div className="flex items-center gap-2 bg-[#091230]/90 border border-slate-800 text-slate-200 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-xl text-sm font-medium">
                <span className="text-indigo-400">🤖</span>
                <span>Embedded Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
        <div className="w-5 h-9 rounded-full border-2 border-slate-500 flex justify-center p-1">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
        </div>
        <span className="text-[10px] tracking-widest uppercase text-slate-500 font-bold">Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;