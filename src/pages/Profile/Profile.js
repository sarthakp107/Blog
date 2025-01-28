import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from '../../components/Avatar';
import { projectFirestore } from '../../firebase/config';

export default function Profile() {
    const { user } = useAuthContext();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            const fetchUserData = async () => {
                try {
                    const userDoc = await projectFirestore.collection('users').doc(user.uid).get();
                    if (userDoc.exists) {
                        setUserData(userDoc.data());
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

            fetchUserData();
        }
    }, [user]);

    if (!userData) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="text-center text-xl font-semibold text-gray-500">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="flex items-center  h-[70vh] w-[70vh] bg-blue-500 ">
                <div className=' mb-52 ml-44'>

                    <div className='flex mb-10'>


                        <div className=' w-24 mr-7 '>
                            <Avatar displayName={user.displayName} />
                        </div>
                        <div className='flex flex-col '>

                        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white">{user.displayName}</h1>
                        {userData.responses.course && (
                            <span className="p-2 bg-red-700 text-white rounded-full text-lg">{userData.responses.course}</span>
                        )}
                        </div>
                    </div>
                    {/* Profile Information Below Display Name (as tags) */}
                    <div className="flex flex-wrap justify-center gap-3">
                        
                        {userData.responses.major && (
                            <span className="px-4 py-2 bg-teal-500 text-white rounded-full text-lg">{userData.responses.major}</span>
                        )}
                        {userData.responses.year && (
                            <span className="px-4 py-2 bg-green-500 text-white rounded-full text-lg">{userData.responses.year} Year</span>
                        )}
                        {userData.responses.units && userData.responses.units.length > 0 && (
                            <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-lg">
                                {userData.responses.units.join(', ')}
                            </span>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}
