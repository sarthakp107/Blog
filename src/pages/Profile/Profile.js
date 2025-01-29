import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from '../../components/Avatar';
import { projectFirestore } from '../../firebase/config';
import { Mail, Star, Award, ChevronRight, ThumbsUp } from 'lucide-react';


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
        <div className="max-w-4xl mx-auto mt-10 p-8 h-[70vh]" >
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0 w-32 h-32 rounded-full border-4 border-gray-200">
          <Avatar displayName={user.displayName} />
              
          </div>
          
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }} >{user.displayName}</h1>
                <p className="text-black bg-red-400 p-1.5 rounded-full mt-2 mb-2 inline-block">{userData.responses.course}</p><br></br>
                <p className="text-black bg-green-400 p-1.5 rounded-full inline-block">{userData.responses.major}</p>
                <p className="text-black bg-yellow-500 p-1.5 rounded-full inline-block ml-3">{userData.responses.year} Year</p>
              </div>
              
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                {/* <Mail className="w-4 h-4" /> */}
                <span>Message</span>
              </button>
            </div>

            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-600">
                <ThumbsUp className="w-4 h-4" />
                <span>{userData.votes || 0} votes</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Award className="w-4 h-4" />
                <span>{userData.badges?.length || 0} badges</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strong Units Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Units Taken
        </h2>
        <div className="space-y-3">
          {userData.responses.units && userData.responses.units.map((unit, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100"
            >
              <span className="text-gray-700">{unit}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Badges Section */}
      {/* <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-blue-500" />
          Badges
        </h2>
        
      </div> */}
    </div>
    );
}
