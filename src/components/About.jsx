import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaWifi,
  FaRobot,
  FaBolt,
} from "react-icons/fa";

function About() {
  const features = [
    { icon: <FaMicrochip />, title: "Embedded Systems", description: "STM32, ESP32, Embedded C, FreeRTOS, Driver Development, Peripheral Programming." },
    { icon: <FaWifi />, title: "IoT & Connectivity", description: "MQTT, TCP/IP, Wi-Fi, Cloud Integration, Blynk, AWS IoT Solutions." },
    { icon: <FaRobot />, title: "AI & Smart Systems", description: "AI Integration, Edge Intelligence, Voice Assistants, Smart Monitoring Systems." },
    { icon: <FaBolt />, title: "Real-Time Applications", description: "UART, SPI, I2C, CAN Communication, Sensor Interfacing and RTOS-based Systems." },
  ];

  return (
    // Added items-center to ensure vertical centering of the main content
    <section id="about" className="scroll-mt-28 py-12 px-4 md:px-6 bg-[#050d2a] flex justify-center items-center min-h-screen">
      <div className="max-w-6xl w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-white font-semibold tracking-wide text-3xl">About Me</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              Designing the Future with Embedded Systems & AI
            </span>
          </h2>
        </motion.div>

        {/* Main Content Container: Centered using items-center and gap */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left Side - Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left max-w-xl"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
  I am a <strong className="text-white">B.Tech Electronics and Communication Engineering</strong> student at the{" "}
  <strong className="text-white">Central University of Karnataka</strong>, India. My journey in embedded systems started with a fascination for how microcontrollers can sense, process, and respond intelligently to the physical world.

  I specialize in building real-world embedded and IoT-based systems using{" "}
  <strong className="text-white">STM32, ESP32, and FreeRTOS</strong>. From sensor-driven automation projects to real-time embedded prototypes, I enjoy transforming concepts into reliable, working hardware solutions, with a focus on building efficient, scalable, and reliable embedded solutions.
</p>
          </motion.div>

          {/* Right Side Cards - Using grid for balance */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-slate-900/70 border border-blue-500/20 rounded-3xl p-6 backdrop-blur-md hover:border-blue-400 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-6">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;