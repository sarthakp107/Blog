import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function RightSidebar() {
    return (
        <div className="fixed top-60 right-14 w-72 bg-white p-6  rounded-lg ">
            {/* Bio Card Content */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Sarthak Pradhan</h2>
                <p className="text-gray-600 mt-2 text-sm">Software Developer | Tech Enthusiast | Learning New Things Every Day</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mt-4">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black transition duration-300"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-blue-600 transition duration-300"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>

            <div className="mt-4 text-center">
                <button className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 transition">
                    Follow
                </button>
            </div>
        </div>
    );
}
