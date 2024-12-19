import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Define links separately
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Committee", path: "/committee" },
    { name: "Call for Articles", path: "/call" },
    { name: "Submission", path: "/submission" },
    { name: "Schedule", path: "/schedule" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md text-black z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-black text-3xl font-extrabold tracking-wide"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="hover:text-yellow-600 transition duration-300"
          >
            Conf<span className="text-yellow-400">X</span>
          </Link>
        </motion.div>

        {/* Menu (Desktop View) */}
        <div className="hidden md:flex space-x-8 text-black font-bold">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <Link
                to={link.path}
                className="hover:text-yellow-600 transition duration-300"
              >
                {link.name}
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-600 transition-all group-hover:w-full"
                layoutId="underline"
              />
            </motion.div>
          ))}
        </div>

        {/* Menu Icon (Mobile View) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-black text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay (Mobile View) */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={toggleSidebar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}

      {/* Sidebar (Mobile View) */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-3/4 bg-gradient-to-b from-white to-gray-100 shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col items-center mt-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-xl font-semibold text-gray-800 hover:text-purple-500 my-3 transition duration-300"
              onClick={toggleSidebar}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
