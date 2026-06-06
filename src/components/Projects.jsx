import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI-Powered IoT-Based Smart Health Monitoring (NEXA)",
      description:
        "AI-powered IoT system for real-time health monitoring with cloud analytics and intelligent diagnostics.",
      tech: ["ESP32", "IoT", "MQTT", "AI", "Cloud"],
      github:
        "https://github.com/ankushsaroj530/AI-Powered-IoT-Based-Smart-Health-Monitoring-and-Diagnostic-System-NEXA-/tree/main",
    },
    {
      title: "Smart Home Automation using ESP32",
      description:
        "Remote control of home appliances using ESP32 and Blynk application with wireless connectivity.",
      tech: ["ESP32", "Blynk", "IoT", "WiFi"],
      github:
        "https://github.com/ankushsaroj530/IoT-Smart-Home-Automation",
    },
    {
      title: "AI Voice Assistant (ESP32 + LLM)",
      description:
        "Voice assistant integrating ESP32 with AI-based speech processing and natural language interaction.",
      tech: ["ESP32", "LLM", "AI", "Python"],
      github:
        "https://github.com/ankushsaroj530/AI-Voice-Assistant-using-ESP32/tree/main",
    },
    {
      title: "RFID Attendance System",
      description:
        "Automated attendance tracking system using RFID technology and STM32 microcontroller.",
      tech: ["STM32", "RFID", "Embedded C"],
      github:
        "https://github.com/ankushsaroj530/RFID-Based-Attendance-System",
    },
    {
      title: "Waste Segregation System",
      description:
        "Smart waste classification system using embedded sensors for efficient recycling and automation.",
      tech: ["IoT", "Embedded C", "Sensors"],
      github:
        "https://github.com/ankushsaroj530/Automated-Waste-Segregation-System-for-Efficient-Recycling/tree/main",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-12 px-6 bg-[#050d2a] w-full"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A collection of Embedded Systems, IoT, AI, and Firmware projects
            focused on solving real-world engineering challenges.
          </p>
        </div>

        {/* Zig-Zag Projects */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500/20 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-full md:w-[45%] relative">

                  {/* Dot on Timeline */}
                  <div className="hidden md:block absolute top-5 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#050d2a]
                    left-auto right-[-52px]"
                    style={
                      index % 2 === 0
                        ? { right: "-52px" }
                        : { left: "-52px" }
                    }
                  ></div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2">

                    {/* Project Number */}
                    <span className="text-5xl font-bold text-blue-500/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
                      {project.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition"
                    >
                      <FaGithub />
                      View Project →
                    </a>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;