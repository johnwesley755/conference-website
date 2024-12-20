import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaHome,
  FaUsers,
  FaBook,
  FaFileAlt,
  FaRegEdit,
  FaCalendarAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Committee", path: "/committee", icon: <FaUsers /> },
    { name: "Call for Articles", path: "/call", icon: <FaBook /> },
    { name: "Submission", path: "/submission", icon: <FaFileAlt /> },
    { name: "Registration", path: "/registration", icon: <FaRegEdit /> },
    { name: "Schedule", path: "/schedule", icon: <FaCalendarAlt /> },
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
                className={`hover:text-yellow-600 transition duration-300 ${
                  location.pathname === link.path ? "text-yellow-600" : ""
                }`}
                aria-label={`Go to ${link.name}`}
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
          <button
            onClick={toggleSidebar}
            className="text-black text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay (Mobile View) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={toggleSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar (Mobile View) */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-3/4 bg-gradient-to-b from-yellow-50 to-gray-200 shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col items-center mt-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`flex items-center text-lg font-semibold px-4 py-2 w-full hover:bg-yellow-100 rounded-md transition duration-300 ${
                location.pathname === link.path
                  ? "bg-yellow-100 text-yellow-600"
                  : "text-gray-800"
              }`}
              onClick={toggleSidebar}
              aria-label={`Go to ${link.name}`}
            >
              <span className="text-xl mr-3">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
