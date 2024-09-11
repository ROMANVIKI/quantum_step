import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="flex flex-col justify-center items-center self-stretch px-16 py-24 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
      <div className="max-w-full w-[1154px]">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Section: Image with animation */}
          <motion.div
            className="w-full md:w-6/12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/updated_image.jpg"
              alt="QuantumStep illustration"
              className="object-cover w-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Section: Text with staggered animations */}
          <motion.div
            className="flex flex-col justify-center w-full md:w-6/12"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.h2
              className="text-4xl font-bold leading-tight text-neutral-800"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              QuantumStep: Leading IT Skills Platform
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-7 text-neutral-600"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              QuantumStep empowers individuals and businesses with top IT skills,
              offering courses in Python, SQL, AI, and more. Our platform, powered
              by industry experts, helps learners and professionals build career-ready
              skills with real-world projects and personalized learning paths.
            </motion.p>
            <motion.div
              className="mt-8 flex gap-3"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <a
                href="#courses"
                className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Explore Courses
              </a>
              <a
                href="#about"
                className="px-5 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
