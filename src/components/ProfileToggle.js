// src/components/Avatar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';
import { FaUser, FaQuestionCircle, FaPhoneAlt, FaSignOutAlt, FaExchangeAlt, FaCog } from 'react-icons/fa';


const ProfileToggle = () => {
    const { logout, error, isPending } = useLogout();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user } = useAuthContext();
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };

        // Adding the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="relative">
            {/* Avatar Section */}
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400"
            >
                <Avatar displayName={user.displayName} />
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
                    <ul className="space-y-2">
                        {/* User Information Section */}
                        <li className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                {/* Avatar */}
                                <Avatar displayName={user.displayName} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">{user.displayName}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                        </li>

                        <div className="border-t border-gray-200 pt-4">
                            <ul>
                                {/* Menu Items */}
                                <li>
                                    <Link
                                        to="/profile"
                                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        <FaUser className="mr-2" /> Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/help"
                                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        <FaQuestionCircle className="mr-2" /> Help
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        <FaPhoneAlt className="mr-2" /> Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/settings"
                                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        <FaCog className="mr-2" /> Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/switch-account"
                                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        <FaExchangeAlt className="mr-2" /> Switch Account
                                    </Link>
                                </li>

                                {/* Logout */}
                                <li className="flex">
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                        disabled={isPending}
                                    >
                                        <FaSignOutAlt className="mr-2" />
                                        <div className="flex-1">
                                            {isPending ? 'Logging out...' : 'Logout'}
                                        </div>
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </ul>
                </div>

            )}
        </div>
    );
};

export default ProfileToggle;
