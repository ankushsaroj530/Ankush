import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "2+", label: "Internships" },
    { number: "10+", label: "Technologies" },
    { number: "8.22", label: "Current CGPA" },
    { number: "7+", label: "Certifications" },
  ];

  return (
    <section id="stats" className="pt-4 pb-10 w-full bg-slate-900">
      {/* Added px-4 and mx-auto to ensure the inner container 
         never touches the screen edges. 
      */}
      <div className="px-10 md:px-4 mx-auto max-w-7xl">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="!text-white text-1xl md:text-3xl font-bold text-center mb-5"
        >
          Achievements
        </motion.h2>

        {/* - flex-wrap allows them to stack on very small screens if needed.
           - justify-center ensures they stay centered horizontally.
        */}
        <div className="flex flex-wrap justify-center gap-9">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              // Added a responsive basis so they behave well in one line
              className="flex-[1_1_150px] max-w-[200px] bg-slate-800 rounded-3xl p-6 md:p-10 min-h-[180px] flex flex-col justify-center items-center text-center border border-slate-700 transition-all duration-300 hover:border-blue-400 hover:shadow-xl"
            >
              <h3 className="text-3xl lg:text-5xl font-bold text-blue-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;