import resume from "../assets/resume/resume.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt } from "react-icons/fa";

function Resume() {
  return (
    <section
      id="resume"
      className="bg-[#050d2a] py-10 px-6"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-400 mb-3">
            Resume
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Download my resume to explore my education, technical skills,
            internships, certifications, projects, and achievements in
            Embedded Systems, IoT, and Firmware Development.
          </p>
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#0F172A] border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left Side */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="bg-blue-600/20 p-4 rounded-xl">
                <FaFileAlt className="text-3xl text-blue-400" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Ankush Saroj Resume
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Embedded Systems • IoT • Firmware • VLSI
                </p>
              </div>
            </div>

            {/* Right Side */}
            <a
              href={resume}
              download="Ankush_Saroj_Resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Resume;