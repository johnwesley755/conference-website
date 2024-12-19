import React from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const googleMapsLink =
  "https://www.google.com/maps/place/St.Joseph's+Institute+of+Technology/@12.8694473,80.2158793,17z/data=!4m10!1m2!2m1!1sst+josephs+institute+of+technology!3m6!1s0x3a525bbb618d3ea9:0x90b3767be093efaa!8m2!3d12.8698794!4d80.2184296!15sCiJzdCBqb3NlcGhzIGluc3RpdHV0ZSBvZiB0ZWNobm9sb2d5kgEHY29sbGVnZeABAA!16s%2Fm%2F0cr5_zr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";

const Venue = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-300 py-16">
      <div className="container mx-auto px-6 z-10">
        {/* Title */}
        <motion.h1
          className="text-6xl font-extrabold mt-16 text-center text-blue-900 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Venue 🌏✨
        </motion.h1>

        {/* Venue Section */}
        <motion.div
          className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Welcome to St. Joseph's Institute of Technology 🎓
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Nestled in the heart of Chennai, our campus offers vibrant academic
            opportunities and a memorable environment. 🌟 Join us and experience
            excellence firsthand! 🏫💡
          </p>
          {/* Google Maps Link */}
          📍
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-lg mb-4 inline-block font-semibold"
          >
            View on Google Maps
          </a>
          {/* QR Code */}
          <div className="flex justify-center mt-6">
            <QRCode value={googleMapsLink} size={200} />
          </div>
        </motion.div>

        {/* How to Reach Section */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-6">
            How to Reach Us 🚗🚉
          </h3>
          <ul className="list-none space-y-6 text-lg text-gray-700">
            <li className="flex items-center space-x-3">
              <span className="text-3xl">📍</span>
              <span>Conveniently located on OMR, Chennai</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-3xl">🚌</span>
              <span>Close to major bus stops and metro stations</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-3xl">🚗</span>
              <span>Ample parking for visitors and staff</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Background Gradient Shapes */}
      <motion.div
        className="absolute top-16 max-md:hidden left-16 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full z-0 shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-16 right-16 w-72 h-72 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-lg z-0 shadow-lg"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Venue;
