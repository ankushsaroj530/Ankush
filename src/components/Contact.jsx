import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ankushsaroj530@gmail.com",
      link: "mailto:ankushsaroj530@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 7518805084",
      link: "tel:+917518805084",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/ankush-saroj-1b1a291b1",
      link: "https://www.linkedin.com/in/ankush-saroj-1b1a291b1/",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/ankushsaroj530",
      link: "https://github.com/ankushsaroj530",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 pt-4 pb-10 px-6 md:px-12 bg-[#050d2a] w-full"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Interested in Embedded Systems, IoT, Firmware Development,
            or collaboration opportunities? Feel free to reach out.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between min-h-[160px] w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div>
                  <div className="text-2xl text-blue-600 mb-3">
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 break-all text-sm font-medium mt-auto">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Smaller Contact Form */}
          <motion.div
            className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 w-full max-w-[430px] mx-auto"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Send Message
            </h3>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2.5 border border-gray-200 text-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2.5 border border-gray-200 text-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2.5 border border-gray-200 text-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />

              <textarea
                rows="3"
                placeholder="Your Message"
                className="w-full p-2.5 border border-gray-200 text-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;