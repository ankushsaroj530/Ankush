import { motion } from "framer-motion";
import { FaMicrochip } from "react-icons/fa";

function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Resume",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#050d2a]/80
        backdrop-blur-xl
        border-b border-cyan-500/10
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div
              className="
                w-10 h-10
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                flex items-center
                justify-center
                text-white
              "
            >
              <FaMicrochip />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Ankush Saroj
              </h1>

              <p className="text-xs text-cyan-400">
                Embedded Engineer
              </p>
            </div>
          </motion.a>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    relative
                    text-gray-300
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    font-medium
                  "
                >
                  {item}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[2px]
                      bg-cyan-400
                      transition-all
                      duration-300
                      hover:w-full
                    "
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;