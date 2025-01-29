import React, { useState } from 'react';

const UnitOverview = () => {
  const [isLearningOutcomesOpen, setLearningOutcomesOpen] = useState(false);
  const [isPrerequisitesOpen, setPrerequisitesOpen] = useState(false);
  const [isDatesOpen, setDatesOpen] = useState(false);

  const toggleLearningOutcomes = () => setLearningOutcomesOpen(!isLearningOutcomesOpen);
  const togglePrerequisites = () => setPrerequisitesOpen(!isPrerequisitesOpen);
  const toggleDates = () => setDatesOpen(!isDatesOpen);

  return (
    <div className="flex flex-col h-screen bg-white p-4 overflow-auto">
      {/* Learning Outcomes Section */}
      <div className="mb-8">
        <button
          className="w-full text-xl font-semibold text-gray-800 bg-gray-100 p-4 rounded-md flex justify-between items-center"
          onClick={toggleLearningOutcomes}
        >
          <span>Learning Outcomes</span>
          <span className="text-2xl">{isLearningOutcomesOpen ? '▼' : '▲'}</span>
        </button>
        {isLearningOutcomesOpen && (
          <div className="mt-4 text-gray-700 space-y-2">
            <p>✔️ Explain the core principles of OOP: abstraction, encapsulation, inheritance, and polymorphism.</p>
            <p>✔️ Use OOP programming languages to develop dynamic and reusable programs.</p>
            <p>✔️ Design, test, and debug OOP solutions using best practices.</p>
            <p>✔️ Communicate complex object-oriented structures effectively through diagrams and documentation.</p>
            <p>✔️ Reflect on the factors that contribute to a successful OOP solution based on real-world examples.</p>
          </div>
        )}
      </div>

      {/* Prerequisites Section */}
      <div className="mb-8">
        <button
          className="w-full text-xl font-semibold text-gray-800 bg-gray-100 p-4 rounded-md flex justify-between items-center"
          onClick={togglePrerequisites}
        >
          <span>Prerequisites</span>
          <span className="text-2xl">{isPrerequisitesOpen ? '▼' : '▲'}</span>
        </button>
        {isPrerequisitesOpen && (
          <div className="mt-4 text-gray-700">
            <p>To ensure you're well-prepared for this unit, please complete one of the following:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>COS10009 Introduction to Programming</li>
              <li>SWE20004 Technical Software Development</li>
              <li>COS10001 Algorithmic Problem Solving</li>
              <li>Equivalent introductory programming courses</li>
            </ul>
          </div>
        )}
      </div>

      {/* Important Dates & Locations Section */}
      <div className="mb-8">
        <button
          className="w-full text-xl font-semibold text-gray-800 bg-gray-100 p-4 rounded-md flex justify-between items-center"
          onClick={toggleDates}
        >
          <span>Important Dates & Locations</span>
          <span className="text-2xl">{isDatesOpen ? '▼' : '▲'}</span>
        </button>
        {isDatesOpen && (
          <div className="mt-4 text-gray-700">
            <p><strong>Semester 1 (2025):</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li>📍 Hawthorn Campus: 03 March - 01 June 2025</li>
              <li>🌐 Online: 10 March - 08 June 2025</li>
            </ul>
            <p className="mt-4"><strong>Semester 2 (2025):</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li>📍 Hawthorn Campus: 04 August - 02 November 2025</li>
              <li>🌐 Online: 03 November 2025 - 08 February 2026</li>
            </ul>
          </div>
        )}
      </div>

      {/* Assessment Section */}
      <div className="mb-8 bg-gray-100 p-6 rounded-md">
        <h3 className="text-2xl font-semibold text-gray-800">Assessment Overview</h3>
        <p className="text-gray-700 mt-2">
          This unit is assessed through a comprehensive portfolio project where you'll demonstrate your understanding of Object-Oriented Programming.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>📋 **Portfolio (100%)**: A detailed portfolio showcasing your design, programming, testing, and debugging skills in OOP.</li>
        </ul>
      </div>
    </div>
  );
};

export default UnitOverview;
