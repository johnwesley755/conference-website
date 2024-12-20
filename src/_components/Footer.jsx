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
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Conference 2025</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Join us at the 6<sup>th</sup> International Conference on Mobile
              Computing and Sustainable Informatics.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://stjosephstechnology.ac.in/home/wp-content/uploads/2023/07/footer-logo.png"
                alt="College Logo"
                className="h-16 object-contain"
              />
              <img
                src={conferenceImg}
                alt="IEEE Logo"
                className="h-8 object-contain"
              />
            </div>
          </div>

          {/* Spacer for Responsiveness */}
          <div className="hidden md:block"></div>

          {/* Quick Links */}
          <div className="space-y-6 md:col-span-1">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/committee"
                  className="hover:text-yellow-400 transition"
                >
                  Committee
                </a>
              </li>
              <li>
                <a href="/call" className="hover:text-yellow-400 transition">
                  Call for Articles
                </a>
              </li>
              <li>
                <a
                  href="/submission"
                  className="hover:text-yellow-400 transition"
                >
                  Submission
                </a>
              </li>
              <li>
                <a
                  href="/registration"
                  className="hover:text-yellow-400 transition"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="hover:text-yellow-400 transition"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 St. Joseph’s Institute of Technology</li>
              <li>📞 +91-123-456-7890</li>
              <li>📧 contact@conference2025.org</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
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
        <div className="text-center text-sm text-gray-500 space-y-3">
          <p>&copy; 2025 Conference | All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://linkedin.com/in/john-wesley-6707ab258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 transition"
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
