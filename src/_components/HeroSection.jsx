import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Shadcn Button component
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center max-md:py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://scontent.fmaa5-1.fna.fbcdn.net/v/t39.30808-6/416886710_873679661426307_3233931091248134322_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=HvoXmNVOsE8Q7kNvgFIELEN&_nc_zt=23&_nc_ht=scontent.fmaa5-1.fna&_nc_gid=AU4u-hnHHbtbKYSB5DFlu-X&oh=00_AYBK5IkWYYOgMg98riRzpkaQF1KR7MqmmV5UV91UWzhoCA&oe=676990E3')`,
      }}
    >
      {/* Gradient Overlays */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-40 h-40 md:w-[300px] md:h-[300px] bg-gradient-to-br from-blue-500 via-teal-400 to-green-400 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8 }}
        whileHover={{ scale: 1.1 }}
      ></motion.div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full max-sm:mt-10 text-center space-y-6 px-4 md:px-6">
        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-8 mb-4">
          <img
            src="https://stjosephstechnology.ac.in/home/wp-content/uploads/2023/07/footer-logo.png"
            alt="College Logo"
            className="h-20 md:h-20 object-contain max-[360px]:h-10"
            aria-label="College Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png"
            alt="Conference Logo"
            className="h-20 md:h-20 object-contain max-[360px]:h-8"
            aria-label="Conference Logo"
          />
        </div>

        {/* Title */}
        <motion.h1
          className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-[360px]:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          6<sup>th</sup> International Conference on <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200">
            Mobile Computing and Sustainable Informatics
          </span>
        </motion.h1>

        {/* Subheading */}
        <p className="text-white font-bold text-base md:text-lg lg:text-xl max-[360px]:text-sm">
          7-8, January 2025
        </p>

        {/* Important Dates */}
        <div className="bg-white shadow-lg p-6 md:p-8 rounded-xl border border-gray-200 w-full max-w-md mx-auto max-[360px]:p-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 max-[360px]:text-lg">
            Important Dates
          </h3>
          <p className="text-sm md:text-md text-gray-700 mb-2 max-[360px]:text-xs">
            Registration Deadline:{" "}
            <span className="font-semibold">15 December, 2024</span>
          </p>
          <p className="text-sm md:text-md text-gray-700 max-[360px]:text-xs">
            Conference Dates:{" "}
            <span className="font-semibold">7-8 January, 2025</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link to="/schedule">
            <Button
              variant="default"
              className="text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white hover:from-yellow-500 hover:to-pink-600 shadow-lg max-[360px]:text-xs max-[360px]:px-3 max-[360px]:py-2"
            >
              Schedule
            </Button>
          </Link>
          <Button
            variant="outline"
            className="text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 border-white text-black max-[360px]:text-xs max-[360px]:px-3 max-[360px]:py-2"
          >
            More Info
          </Button>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-pink-800 border p-6 rounded-xl mt-8 max-md:hidden text-center text-white w-full max-w-2xl mx-auto shadow-lg max-[360px]:p-4">
          <h4 className="text-lg md:text-xl font-bold mb-4 max-[360px]:text-md">
            Contact Information
          </h4>
          <p className="max-[360px]:text-sm">Email: conference@sjit.ac.in</p>
          <p className="max-[360px]:text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
