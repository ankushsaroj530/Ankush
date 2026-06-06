import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "Embedded C",
      issuer: "NIELIT Calicut",
      link: "https://www.linkedin.com/posts/ankush-saroj-1b1a291b1_embeddedc-servomotor-ultrasonicsensor-activity-7353702922234351616-jItP",
    },
    {
      title: "Embedded Systems Using Arduino",
      issuer: "GeeksforGeeks",
      link: "https://www.linkedin.com/posts/ankush-saroj-1b1a291b1_embeddedsystems-arduino-c-activity-7337528552495423488-r3UR",
    },
    {
      title: "Wireless Sensor Network with IoT",
      issuer: "MeitY",
      link: "https://www.linkedin.com/posts/ankush-saroj-1b1a291b1_wirelesssensornetwork-iot-embeddedsystems-share-7420687054658920448-vu3q",
    },
    {
      title: "Drone Hardware Integration",
      issuer: "NIT Patna",
      link: "https://www.linkedin.com/posts/ankush-saroj-1b1a291b1_dronetech-agriinnovation-embeddedsystems-activity-7346088370860658688-D9t7",
    },
    {
      title: "Embedded System & IoT Internship",
      issuer: "Maincrafts Technology",
      link: "https://www.linkedin.com/posts/ankush-saroj-1b1a291b1_embeddedsystems-iot-communicationprotocols-ugcPost-7429081384360591360--Ds9",
    },
    {
      title: "Summer Internship on 6G",
      issuer: "NIT Patna",
      link: "https://www.linkedin.com/posts/ankush-saroj-1b1a291b1_wirelesstech-ai-localization-activity-7354412917078810624-3m9V",
    },
    {
      title: "Front-End VLSI Design",
      issuer: "Internshala",
      link: "https://www.linkedin.com/posts/ankush-saroj-1b1a291b1_from-end-vlsi-design-course-completion-activity-7354338691135262720-45p_",
    },
  ];

  return (
    <section
      id="certifications"
      className="scroll-mt-20 py-12 bg-[#050d2a]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Professional certifications and technical training in Embedded
            Systems, IoT, Wireless Communication, VLSI Design, and Firmware
            Development.
          </p>
        </div>

        {/* Achievement Wall */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">

          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
              className="group flex items-center justify-between py-5 border-b border-blue-500/20"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">🏆</span>

                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <span className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                View →
              </span>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;