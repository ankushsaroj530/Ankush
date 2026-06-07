import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "Embedded Systems & IoT Intern",
      company: "Maincrafts Technology",
      description:
        "Developed Embedded C firmware, integrated UART, SPI, I2C, MQTT, HTTP, and TCP/IP protocols, and performed hardware debugging and testing.",
    },
    {
      year: "2025",
      title: "Research Intern – 6G Communication",
      company: "NIT Patna",
      description:
        "Worked on 6G, URLLC+, localization systems, sensor fusion, and AI-driven wireless communication research.",
    },
    {
      year: "2025",
      title: "IoT & Embedded Projects",
      company: "Academic & Personal",
      description:
        "Built NEXA Health System, Smart Home Automation, RFID Attendance, AI Voice Assistant, and Waste Segregation System.",
    },
    {
      year: "2023",
      title: "Started Embedded Journey",
      company: "Self Learning",
      description:
        "Learned Embedded C, Arduino, microcontrollers, sensors, and hardware-software integration.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-8 px-4 bg-[#050d2a] w-full min-h-screen"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience & Journey
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-6 flex flex-col md:flex-row items-center justify-between w-full relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {/* EMPTY SIDE */}
              <div className="w-full md:w-5/12"></div>

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {index + 1}
              </div>

              {/* CARD */}
              <div className="w-full md:w-5/12 bg-white p-3 rounded-lg shadow-md">
                <span className="text-blue-600 font-bold text-xs">
                  {exp.year}
                </span>

                <h3 className="text-sm font-semibold mt-1 text-gray-900">
                  {exp.title}
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  {exp.company}
                </p>

                <p className="text-gray-600 mt-2 text-xs leading-snug">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GITHUB SECTION */}
        <div className="pt-6 mt-8 border-t border-gray-800/40">

          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              GitHub Activity
            </h2>
          </div>

          <div className="flex justify-center">
            <motion.div
              className="w-full max-w-3xl bg-[#111936] border border-gray-700 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-xl">
                  <FaGithub className="text-blue-400" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">
                    ankushsaroj530
                  </h4>
                  <p className="text-gray-400 text-xs">
                    Embedded Systems & IoT Developer
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/ankushsaroj530"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition"
              >
                Visit Profile
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;