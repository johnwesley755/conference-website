import React from "react";
import { motion } from "framer-motion";
import committee from "../data/committee";

const Committee = () => {
  return (
    <section
      className="relative bg-gradient-to-t from-gray-200 via-gray-100 to-white py-16"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148824101.jpg?t=st=1734613389~exp=1734616989~hmac=b0a154d0a8f6b438f727c0741e026d14e42c9e7d616519a79afb452247ca1a21&w=1060')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 max-md:hidden mt-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg opacity-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500 via-teal-400 to-green-400 rounded-lg opacity-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        {/* Page Title */}
        <motion.h2
          className="text-4xl mt-10 md:text-5xl font-extrabold text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Conference Committee
        </motion.h2>

        {/* Chief Patron */}
        <h3 className="text-4xl font-extrabold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-800">
          Chief Patron
        </h3>
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={committee.chiefPatron.image}
            alt={committee.chiefPatron.name}
            className="w-64 h-64 rounded-lg shadow-xl mb-4"
          />
          <h3 className="text-2xl font-extrabold text-gray-800">
            {committee.chiefPatron.name}
          </h3>
          <p className="text-gray-600 font-bold text-center">
            {committee.chiefPatron.title}
          </p>
        </motion.div>

        {/* Patrons */}
        <h3 className="text-4xl font-extrabold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-800">
          Patrons
        </h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          {committee.patrons.map((patron, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={patron.image}
                alt={patron.name}
                className="w-64 h-64 rounded-lg shadow-xl mb-4"
              />
              <h4 className="text-lg font-extrabold text-gray-800">
                {patron.name}
              </h4>
              <p className="text-gray-600 font-semibold">{patron.title}</p>
            </div>
          ))}
        </motion.div>

        {/* Other Committees */}
        <h3 className="text-4xl font-extrabold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500">
          Technical Program Chairs
        </h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          {committee.technicalProgramChairs.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </motion.ul>

        <h3 className="text-4xl font-extrabold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
          International Advisory Committee
        </h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          {committee.internationalAdvisoryCommittee.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Committee;
