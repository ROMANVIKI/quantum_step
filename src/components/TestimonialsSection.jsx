import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const TestimonialsSection = () => {
  return (
    <section className="mt-10 mb-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold leading-tight text-center text-indigo-800 mb-4">
        Discover What Sets Us Apart!
      </h2>
      <div className="text-lg font-semibold leading-none text-center text-gray-700 mb-8">
        (Our Strengths and Achievements)
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Key Offerings */}
        <div className="flex flex-col w-full md:w-2/3 gap-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Comprehensive IT Training
            </h3>
            <p className="text-gray-600">
              We offer a wide range of IT training programs tailored to various skill levels and career stages. Our courses cover essential topics such as Python, SQL, Data Science, and more.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Expert Instructors
            </h3>
            <p className="text-gray-600">
              Our instructors are industry professionals with years of experience. They provide hands-on training and practical insights to help students succeed in their careers.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Placement Assistance
            </h3>
            <p className="text-gray-600">
              We offer dedicated placement assistance to help our students land their dream jobs. Our network of industry connections and career support ensures that students are well-prepared for job interviews.
            </p>
          </motion.div>
        </div>
        {/* Statistics */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center"
          >
            <div className="text-4xl font-bold text-indigo-800 mt-8">4.8</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45774a1bc172ab65f4c9e0251a94f9d093b53fcbc22bd6d6bc01b4d138a958bc?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
              alt="Rating stars"
              className="mt-4 w-full h-auto object-contain"
            />
            <div className="mt-4 text-lg text-gray-700">Average Rating</div>
            <div className="mt-4 text-lg text-gray-700">
              <span className="font-semibold text-indigo-600">500+</span> Successful Placements
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <motion.button
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="px-6 py-3 text-base text-center text-white bg-indigo-600 rounded-lg shadow-md border border-indigo-700 hover:bg-indigo-700 transition-colors duration-300"
        >
          Explore Our Programs
        </motion.button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
