import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Groups() {
  const groups = [
    { name: 'Group 1', description: 'A description for Group 1' },
    { name: 'Group 2', description: 'A description for Group 2' },
    { name: 'Group 3', description: 'A description for Group 3' },

  ];

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/group')
  }

  return (
    <div className="fixed top-16 left-3 h-[calc(100%-4rem)] w-64 p-4 rounded-lg shadow-lg z-20">
      <h2 className="text-black text-xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Available Groups</h2>
      <div className="space-y-4">
        {groups.map((group, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all"
          >
            <h3 className="text-white text-lg font-semibold">{group.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{group.description}</p>
            <button onClick={handleClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition" 
            
            > 
              Enter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
