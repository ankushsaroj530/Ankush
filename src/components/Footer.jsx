import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#0F172A] border-t border-blue-500/20 py-6 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-400">
              Ankush Saroj
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Embedded Systems Engineer • IoT Developer • Firmware Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <motion.a
              href="https://github.com/ankushsaroj530"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="text-gray-400 hover:text-blue-400 text-2xl transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ankush-saroj-1b1a291b1/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="text-gray-400 hover:text-blue-400 text-2xl transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="mailto:ankushsaroj530@gmail.com"
              whileHover={{ scale: 1.15, y: -3 }}
              className="text-gray-400 hover:text-blue-400 text-2xl transition"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-6 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ankush Saroj. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-xs mt-1">
            Built with React • Vite • Tailwind CSS • Framer Motion
          </p>
        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;