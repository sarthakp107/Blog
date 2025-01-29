import React, { useState } from 'react';
import { FaInfoCircle, FaRegStickyNote, FaQuestionCircle, FaRegUser, FaUsers } from 'react-icons/fa';  // Importing icons

import UnitOverview from './UnitOverview';
import Notes from './Notes';
import AssignmentHelp from './AssignmentHelp';
import PastStudents from './PastStudents';
import CurrentStudents from './CurrentStudents';

export default function TabsForUnits() {
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab change
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full font-sans mt-24">
      {/* Tabs Container */}
      <div className="flex justify-around bg-gray-100 py-3 border-b-2 border-gray-300">
        <div
          className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md ${activeTab === 0 ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
          onClick={() => handleTabChange(0)}
        >
          <FaInfoCircle className="text-xl" />
          <span>Unit Overview</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md ${activeTab === 1 ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
          onClick={() => handleTabChange(1)}
        >
          <FaRegStickyNote className="text-xl" />
          <span>Notes</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md ${activeTab === 2 ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
          onClick={() => handleTabChange(2)}
        >
          <FaQuestionCircle className="text-xl" />
          <span>Assignment Help</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md ${activeTab === 3 ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
          onClick={() => handleTabChange(3)}
        >
          <FaRegUser className="text-xl" />
          <span>Past Students</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md ${activeTab === 4 ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
          onClick={() => handleTabChange(4)}
        >
          <FaUsers className="text-xl" />
          <span>Current Students</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {activeTab === 0 && <UnitOverview />}
        {activeTab === 1 && <Notes />}
        {activeTab === 2 && <AssignmentHelp />}
        {activeTab === 3 && <PastStudents />}
        {activeTab === 4 && <CurrentStudents />}
      </div>
    </div>
  );
}
