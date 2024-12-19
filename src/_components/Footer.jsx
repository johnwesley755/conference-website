import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import conferenceImg from "../assets/ieee.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center text-center md:text-left gap-8">
          {/* Logo & Description */}
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl font-bold mb-4">Conference 2025</h1>
            <p className="text-gray-400 text-md">
              Join us at the 6<sup>th</sup> International Conference on Mobile
              Computing and Sustainable Informatics.
            </p>
            {/* College & IEEE Logos */}
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
              <img
                src="https://stjosephstechnology.ac.in/home/wp-content/uploads/2023/07/footer-logo.png"
                alt="College Logo"
                className="h-16 object-contain"
              />
              <img
                src={conferenceImg}
                alt="IEEE Logo"
                className="h-10 object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/committee" className="hover:text-yellow-400">
                  Committee
                </a>
              </li>
              <li>
                <a href="/call" className="hover:text-yellow-400">
                  Call for Articles
                </a>
              </li>
              <li>
                <a href="/submission" className="hover:text-yellow-400">
                  Submission
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:text-yellow-400">
                  Registration
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-yellow-400">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-200"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-200"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition duration-200"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition duration-200"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2025 Conference | All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://linkedin.com/in/john-wesley-6707ab258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 transition duration-200"
            >
              John Wesley
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
