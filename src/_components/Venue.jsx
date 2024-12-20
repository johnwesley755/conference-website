import React from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const googleMapsLink =
  "https://www.google.com/maps/place/St.Joseph's+Institute+of+Technology/@12.8694473,80.2158793,17z/data=!4m10!1m2!2m1!1sst+josephs+institute+of+technology!3m6!1s0x3a525bbb618d3ea9:0x90b3767be093efaa!8m2!3d12.8698794!4d80.2184296!15sCiJzdCBqb3NlcGhzIGluc3RpdHV0ZSBvZiB0ZWNobm9sb2d5kgEHY29sbGVnZeABAA!16s%2Fm%2F0cr5_zr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";

const Venue = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center py-16 px-6 overflow-hidden">
      {/* Background Gradient Shapes */}
      <motion.div
        className="absolute top-16 left-10 w-60 h-60 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full z-0 opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-lg z-0 opacity-50"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl text-center">
        {/* Title Section */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Venue 🌏✨
        </motion.h1>

        {/* Venue Info Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl font-bold text-blue-800">
              Welcome to St. Joseph's Institute of Technology 🎓
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nestled in the heart of Chennai, our campus offers vibrant
              academic opportunities and a memorable environment. 🌟 Join us and
              experience excellence firsthand! 🏫💡
            </p>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md transition"
            >
              📍 View on Google Maps
            </a>
          </div>

          {/* Right Column (QR Code) */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-300 rounded-3xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Scan to Locate Us
            </h3>
            <QRCode value={googleMapsLink} size={180} />
          </div>
        </motion.div>

        {/* How to Reach Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-6">
            How to Reach Us 🚗🚉
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="flex items-start space-x-4">
              <span className="text-4xl">📍</span>
              <span className="text-lg text-gray-700">
                Conveniently located on OMR, Chennai
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-4xl">🚌</span>
              <span className="text-lg text-gray-700">
                Close to major bus stops and metro stations
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-4xl">🚗</span>
              <span className="text-lg text-gray-700">
                Ample parking for visitors and staff
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Venue;
