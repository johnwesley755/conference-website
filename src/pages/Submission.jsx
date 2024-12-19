// src/components/Submission.jsx

import React from "react";
import { motion } from "framer-motion";
import submissionDetails from "../data/submission";

const Submission = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-violet-200 py-16">
      <div className="container mx-auto px-6 z-10">
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold mt-16 text-center text-indigo-800 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {submissionDetails.title} 📄
        </motion.h1>

        {/* Content Sections */}
        <div className="space-y-12 flex flex-col items-center z-10">
          {submissionDetails.sections.map((section, index) => (
            <motion.div
              key={index}
              className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-bold text-black mb-4">
                {section.title} ✍️
              </h2>
              <ul className="list-disc list-inside space-y-4">
                {section.content.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-lg">
                    {/* Add mailto link for email */}
                    {item === "mailto:icsmdi.contact@gmail.com" ? (
                      <a
                        href={item}
                        className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                      >
                        ✉️ icsmdi.contact@gmail.com
                      </a>
                    ) : item === "Download Springer Paper Template (MsWord)" ? (
                      <a
                        href="https://example.com/msword-template"
                        download
                        className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                      >
                        📥 Download Springer Paper Template (MsWord)
                      </a>
                    ) : item === "Download Springer Paper Template (LaTex)" ? (
                      <a
                        href="https://example.com/latex-template"
                        download
                        className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                      >
                        📥 Download Springer Paper Template (LaTex)
                      </a>
                    ) : (
                      <>
                        <span className="text-black text-left"> {item}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient Shapes */}
      <motion.div
        className="absolute top-16 left-16 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-lg z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Submission;
