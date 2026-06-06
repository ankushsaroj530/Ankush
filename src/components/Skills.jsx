import { motion } from "framer-motion";

function Skills() {
  const coreSkills = [
    { title: "Embedded Systems", skills: ["STM32", "ESP32", "Arduino", "FreeRTOS", "Raspberry Pi", "Embedded Linux"] },
    { title: "Programming", skills: ["Embedded C", "C++", "Python", "JavaScript", "HTML & CSS"] },
    { title: "Protocols", skills: ["UART", "SPI", "I2C", "CAN", "MQTT"] },
  ];

  const technologies = {
    "Programming Languages": ["C", "C++", "Python", "Embedded C", "MicroPython", "8051", "HTML", "CSS", "JS"],
    "Tools & Platforms": ["VS Code", "Code::Blocks", "Jupyter", "Vivado", "Arduino IDE", "STM32Cube", "KiCad", "GDB"],
    "Embedded Systems": ["STM32", "ESP32", "Arduino", "Raspberry Pi", "FreeRTOS", "Linux", "FPGA", "PCB"],
    "Communication Protocols": ["UART", "USART", "SPI", "I2C", "MQTT", "HTTP", "TCP/IP", "CAN"],
    "IoT & Cloud": ["IoT", "Cloud", "AWS", "Sensor Int.", "Monitoring", "HW-SW Int."],
    "Core Competencies": ["Firmware", "Debugging", "Validation", "AI/ML", "DSA", "Drones", "Soldering"],
  };

  return (
    <motion.section id="skills" className="py-10 px-6 bg-[#050d2a] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TECHNICAL SKILLS HEADING --- */}
        <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-center text-white mb-16">Technical Skills </h3>
          
          <h2 className="text-4xl font-extrabold text-white"></h2>
        </div>

        {/* --- CORE SKILLS CARDS (Centered, Larger Size) --- */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {coreSkills.map((category, index) => (
            <motion.div
              key={index}
              className="w-[350px] bg-[#1e293b] border border-[#334155] rounded-2xl p-10 flex flex-col items-center shadow-2xl hover:border-blue-500 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-sm text-gray-300 bg-blue-950/30 px-4 py-2 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        

        {/* --- TECHNOLOGIES & TOOLS SECTION --- */}
        <div className="border-t border-blue-900/30 pt-12">
          <h3 className="text-3xl font-bold text-center text-white mb-16">Technologies & Tools</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {Object.entries(technologies).map(([category, items]) => (
              <div 
                key={category} 
                className="w-[350px] bg-[#0d1b47]/40 p-5 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <h4 className="text-lg font-bold mb-5 text-blue-400">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-blue-950/40 border border-blue-900/50 text-blue-100 text-xs rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;