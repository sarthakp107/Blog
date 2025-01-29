import React, { useState } from 'react';
import { FaInfoCircle, FaRegStickyNote, FaQuestionCircle, FaRegUser, FaUsers } from 'react-icons/fa';

import UnitOverview from './UnitOverview';
import Notes from './Notes';
import AssignmentHelp from './AssignmentHelp';
import PastStudents from './PastStudents';
import CurrentStudents from './CurrentStudents';
import OnlineUsers from '../../components/OnlineUsers';

const tabs = [
  { label: 'Unit Overview', icon: <FaInfoCircle />, component: <UnitOverview /> },
  { label: 'Notes', icon: <FaRegStickyNote />, component: <Notes /> },
  { label: 'Assignment Help', icon: <FaQuestionCircle />, component: <AssignmentHelp /> },
  { label: 'Past Students', icon: <FaRegUser />, component: <PastStudents /> },
  { label: 'Current Students', icon: <FaUsers />, component: <CurrentStudents /> },
];

export default function TabsForUnits() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex  ">
      {/* Sidebar */}
      <div className=" bg-blue-50  mt-0 w-64 gap-5    border-r-2 border-gray-300 flex flex-col min-h-[120vh] max-h-[80vh] overflow-y-auto">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 px-4 py-3 cursor-pointer ${
              activeTab === index ? 'bg-indigo-600 text-white' : 'text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-4  mr-64">{tabs[activeTab].component}</div>

    </div>
  );
}
