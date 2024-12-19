import React from "react";
import { motion } from "framer-motion";

const College = () => {
  return (
    <section className="relative bg-gray-100 py-16 overflow-hidden">
      {/* Animated Shapes */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute top-20 right-[-50px] w-32 h-48 bg-gradient-to-tr from-green-400 to-cyan-500 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute bottom-[-40px] left-20 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-yellow-500"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      <div className="container mx-auto px-6">
        <div className="relative z-10 bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Content Section */}
            <motion.div
              className="p-8 flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-extrabold text-gray-800">
                About Our College
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to St. Joseph's Institute of Technology, a premier
                institution committed to excellence in education and innovation.
                Our college offers cutting-edge programs in engineering,
                technology, and management, fostering a culture of learning and
                growth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With state-of-the-art infrastructure, a dedicated faculty, and a
                vibrant campus life, we aim to prepare students for global
                challenges and opportunities. Join us to embark on a journey of
                academic excellence and personal transformation.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Established in 2000</li>
                <li>Affiliated with Anna University</li>
                <li>NAAC Accredited with 'A' Grade</li>
                <li>State-of-the-art Laboratories</li>
                <li>Strong Industry Collaborations</li>
              </ul>
            </motion.div>
            {/* Image Section */}
            <motion.div
              className="h-80 md:h-auto group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://tneacounselling.in/wp-content/uploads/2022/08/St.-Josephs-Institute-of-Technology-Chennai.jpg"
                alt="College Campus"
                className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default College;
