// import React from "react";
// import { motion } from "framer-motion";

// function AboutSection() {
//   return (
//     <section className="flex flex-col justify-center items-center self-stretch px-16 py-24 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
//       <div className="max-w-full w-[1154px]">
//         <div className="flex flex-col md:flex-row gap-10 items-center">
//           {/* Left Section: Image with animation */}
//           <motion.div
//             className="w-full md:w-6/12"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/updated_image.jpg"
//               alt="TOKAZ illustration"
//               className="object-cover w-full rounded-lg shadow-lg"
//             />
//           </motion.div>

//           {/* Right Section: Text with staggered animations */}
//           <motion.div
//             className="flex flex-col justify-center w-full md:w-6/12"
//             initial="hidden"
//             whileInView="visible"
//             transition={{ staggerChildren: 0.3 }}
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <motion.h2
//               className="text-4xl font-bold leading-tight text-neutral-800"
//               variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             >
//               TOKAZ: Leading IT Skills Platform
//             </motion.h2>
//             <motion.p
//               className="mt-6 text-lg leading-7 text-neutral-600"
//               variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             >
//               TOKAZ empowers individuals and businesses with top IT skills,
//               offering courses in Python, SQL, AI, and more. Our platform, powered
//               by industry experts, helps learners and professionals build career-ready
//               skills with real-world projects and personalized learning paths.
//             </motion.p>
//             <motion.div
//               className="mt-8 flex gap-3"
//               variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             >
//               <a
//                 href="#courses"
//                 className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
//               >
//                 Explore Courses
//               </a>
//               <a
//                 href="#about"
//                 className="px-5 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
//               >
//                 Learn More
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;

import React from "react";
import WomenHoldingBook from "../assets/women-holds-notebook.svg";

const AboutSection = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="relative max-w-screen-xl mx-auto p-4 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            className="w-full lg:w-1/2 max-h-[472px] object-contain"
            alt="Woman holds notebook"
            src={WomenHoldingBook}
          />
          <div className="mt-6 lg:mt-0 lg:ml-8 space-y-4 text-center lg:text-left">
            <div>
              <h1 className="font-bold text-[#212529] text-2xl lg:text-4xl">
                Leading EdTech Platform for
              </h1>
              <h1 className="font-bold text-[#491eff] text-2xl lg:text-4xl">
                Vernacular Upskilling
              </h1>
            </div>
            <p className="text-[#707070] text-sm lg:text-lg">
              Tokaz is a Leading SQL Learning Platform Via Online. At
              TOKAZ, we specialize in fast-tracking your career in IT. Our
              intensive, industry-relevant courses are designed to get you hired
              quickly—without breaking the bank. Learn essential skills like
              SQL, Python, and more from experts in the field.
            </p>
            {/* <div className="bg-[#f6f7f8] rounded-lg p-4 inline-block">
              <span className="font-bold text-[#491eff]">GUVI</span>
              <span className="font-light text-[#707070]">
                {" "}
                - Grab Vernacular Imprint
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
