import React from 'react';
import TabsForUnits from './TabsForUnits'; // Import the reusable Tabs component

export default function OOP() {
  return (
    <div className="w-full font-sans mt-16 ">
      {/* Title Section */}
      <div className="text-center  bg-blue-50 py-9">
        <h1 className="text-3xl font-bold text-gray-800">Object-Oriented Programming (OOP) Overview</h1>
        <p className="text-gray-600 text-sm mt-2">
          Explore detailed information, notes, and resources for OOP. Use the tabs to navigate.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="mt-0"> {/* Adjusted margin to remove space */}
        <TabsForUnits />

      </div>
    </div>
  );
}
