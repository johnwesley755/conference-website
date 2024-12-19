// src/pages/Call.jsx
import React from "react";
import callData from "../data/call";
import { motion } from "framer-motion";

const Call = () => {
  const triangleVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: { duration: 2, repeat: Infinity },
    },
    bounce: {
      y: [0, -20, 0],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 mt-16 py-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-8">
          Call for Articles
        </h1>
        <div className="space-y-12">
          {callData.map((track, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-xl rounded-lg border-t-4 border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-purple-700 mb-4">
                {track.track} - {track.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {track.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Triangle Animations */}
      <motion.div
        className="absolute max-md:hidden top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-500 z-0"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        variants={triangleVariants}
        animate="pulse"
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-yellow-500 z-0"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        variants={triangleVariants}
        animate="bounce"
      ></motion.div>
    </div>
  );
};

export default Call;
