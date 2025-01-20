import React, { useState } from 'react';
import { useCollection } from '../hooks/useCollection';
import Avatar from './Avatar';

export default function OnlineUsers() {
    const { documents, error } = useCollection('users');
    const [showAllUsers, setShowAllUsers] = useState(false);

    if (error) return <div className="text-red-500">{error}</div>;
    if (!documents) return <div>Loading...</div>;

    const visibleUsers = documents.slice(0, 5);
    const extraUsers = documents.length - 5;

    const handleModalClose = () => {
        setShowAllUsers(false);
    };

    return (
        <div className="fixed left-4 top-20">
            <div className="flex items-center">
                {/* Display up to 5 avatars */}
                {visibleUsers.map((user, index) => (
                    <div
                        key={user.id}
                        className="relative w-10 h-10 -mr-2 last:mr-0" // Changed spacing approach
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
                            <Avatar displayName={user.displayName} />
                        </div>
                        {user.online && (
                            <div className="absolute bottom-0 right-0">
                                <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                        )}
                    </div>
                ))}

                {/* +X for extra users */}
                {extraUsers > 0 && (
                    <div
                        className="relative w-10 h-10 flex items-center justify-center bg-gray-300 text-gray-800 text-sm font-bold rounded-full cursor-pointer hover:bg-gray-400 -ml-2"
                        onClick={() => setShowAllUsers(true)}
                    >
                        +{extraUsers}
                    </div>
                )}
            </div>

            {/* Modal to display all users */}
            {showAllUsers && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
                        <div className=' flex justify-center items-center'>

                        <button
                            onClick={handleModalClose}
                            className="  top-4 right-4 ml-60 mb-4 text-gray-500 hover:text-gray-800"
                        >
                            Close
                        </button>
                        <h2 className="absolute text-lg font-bold mb-4">Our Community</h2>
                        </div>
                        <div className="space-y-2">
                            {documents.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100"
                                >
                                    <div className="relative w-10 h-10">
                                        <div className="w-full h-full rounded-full overflow-hidden border border-gray-300">
                                            <Avatar displayName={user.displayName} />
                                        </div>
                                        {user.online && (
                                            <div className="absolute bottom-0 right-0">
                                                <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-sm">{user.displayName}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}