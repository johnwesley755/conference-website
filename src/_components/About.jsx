import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* New Animated Shapes */}
      <motion.div
        className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-lg opacity-80"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-150px] right-[-120px] w-[600px] h-[300px] max-md:hidden bg-gradient-to-tr from-blue-400 to-purple-400 rounded-xl opacity-80"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        whileHover={{ scale: 1.1 }}
      ></motion.div>
      <motion.div
        className="absolute top-[120px] right-[-60px] w-32 h-32 bg-gradient-to-r from-green-300 to-teal-300 rotate-45 opacity-70"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
        whileHover={{ rotate: 360 }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 px-6">
        {/* Event Image - Larger */}
        <motion.div
          className="relative w-full lg:w-3/4 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://www.investopedia.com/thmb/-OuJ86DYvNTz75DGI4lId_vkPTI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-use-zoom-the-12-best-tips-for-successful-video-conferencing-480126315-0d8eb52a1ee246809d2d37f2e1014d4f.jpg"
            alt="Event"
            className="rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Event Details */}
        <motion.div
          className="text-gray-800 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            About the Event
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            The{" "}
            <strong>
              6<sup>th</sup> International Conference on Mobile Computing and
              Sustainable Informatics
            </strong>{" "}
            is a premier forum for discussing cutting-edge technology and
            sustainability. Hosted by{" "}
            <strong>St. Joseph's Institute of Technology</strong>, this event
            bridges innovation, research, and collaboration.
          </p>
          <p className="text-md lg:text-xl mb-8">
            The conference will feature keynote addresses by renowned
            researchers, panel discussions with industry leaders, and technical
            paper presentations on the latest trends in mobile computing,
            artificial intelligence, and sustainable development.
          </p>
          <p className="text-md lg:text-xl mb-8">
            Attendees will have the opportunity to network with experts,
            collaborate on innovative ideas, and explore solutions that address
            global challenges through technology.
          </p>
          <Link to='/submission'>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r  from-yellow-400 via-red-500 to-pink-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:from-pink-600 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
       
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
