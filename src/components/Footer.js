// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex  bg-gray-800 text-white py-7 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Sarthak Pradhan. All rights reserved.</p>

        <div className="mt-4">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white mx-3"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white mx-3"
          >
            Terms of Service
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-3"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-3"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-3"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
