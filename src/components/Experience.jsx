import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "Embedded Systems & IoT Intern",
      company: "Maincrafts Technology",
      description:
        "Developed Embedded C firmware, integrated UART, SPI, I2C, MQTT, HTTP, and TCP/IP protocols, and performed hardware debugging, firmware validation, and system-level testing.",
    },
    {
      year: "2025",
      title: "Research Intern – 6G Wireless Communication & Localization",
      company: "NIT Patna",
      description:
        "Worked on URLLC+, 6G communication technologies, localization systems, sensor fusion, drone-based applications, and AI-driven wireless communication research.",
    },
    {
      year: "2025",
      title: "IoT & Embedded Systems Projects",
      company: "Academic & Personal Projects",
      description:
        "Built AI-powered Health Monitoring System (NEXA), Smart Home Automation using ESP32 & Blynk, RFID Attendance System, AI Voice Assistant, and Automated Waste Segregation System.",
    },
    {
      year: "2023",
      title: "Started Embedded Systems Journey",
      company: "Self Learning",
      description:
        "Started learning Embedded C, microcontrollers, Arduino development, electronics fundamentals, sensor interfacing, and hardware-software integration.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-6 bg-[#050d2a] w-full min-h-screen relative z-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & Journey
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative mb-20 z-10">

          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform md:-translate-x-1/2 z-0"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center justify-between w-full relative z-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* EMPTY SIDE */}
              <div className="w-full md:w-5/12"></div>

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-20">
                {index + 1}
              </div>

              {/* CARD */}
              <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-lg z-10">
                <span className="text-blue-600 font-bold text-sm">
                  {exp.year}
                </span>
                <h3 className="text-lg font-bold mt-2 text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-gray-500 font-medium mt-1 text-sm">
                  {exp.company}
                </p>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GITHUB SECTION */}
        <div className="pt-10 mt-10 border-t border-gray-800/40 relative z-10">
          
          {/* HEADING */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              GitHub Activity
            </h2>
          </div>

          <div className="flex justify-center w-full">
            <motion.div
              className="w-full max-w-4xl bg-[#111936] border border-gray-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center text-2xl">
                  <FaGithub className="text-blue-400" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    ankushsaroj530
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Embedded Systems & IoT Developer
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/ankushsaroj530"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
              >
                Visit GitHub Profile
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;