import React from 'react';
import TabsForUnits from './TabsForUnits'; // Import the reusable Tabs component

export default function OOP() {
  return (
    <div className="w-full font-sans mt-24">
      {/* Title Section */}
      {/* <div className="bg-blue-300 text-black p-5 ">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Object-Oriented Programming (OOP)</h1>
          <p className="mt-2 text-lg">An In-Depth Exploration of OOP Concepts, Practices, and Resources</p>
        </div>
      </div> */}
      <div className="mt-0"> {/* Adjusted margin to remove space */}
        <TabsForUnits />
      </div>

      {/* Tabs Section */}
    </div>
  );
}
