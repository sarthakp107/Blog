import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 fixed top-0 left-0 right-0 z-10 ">
      {/* Logo Section */}
      <div>
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}        >
          Dev Diaries
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex gap-8 text-lg text-gray-700">
          <li>
            <Link to="/home" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link to="/author" className="hover:text-gray-900">
              Author
            </Link>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/signup" className="text-gray-700 hover:text-gray-900">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/subscribe"
              className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition"
            >
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
