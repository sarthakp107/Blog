import React, { useState } from "react";
import { FaCode, FaLaptopCode, FaNetworkWired } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExploreUnits = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All Units");

//have to replace with the users major{}
  const userMajor = "Networking and Cybersecurity";

  const categories = [
    {
      major: "Software Development",
      units: [
        {
          title: "Object-Oriented Programming (OOP)",
          description:
            "Learn the principles of OOP, including encapsulation, inheritance, polymorphism, and abstraction.",
          icon: <FaLaptopCode size={40} className="text-blue-500" />, 
          bgColor: "bg-blue-100",
          link: "/oop",
        },
        {
          title: "Introduction to Programming",
          description:
            "Dive into the basics of programming, algorithms, and problem-solving techniques.",
          icon: <FaCode size={40} className="text-green-500" />, 
          bgColor: "bg-green-100",
          link: "/intro-to-programming",
        },
        {
          title: "Software Architecture",
          description:
            "Explore software design principles and architectural patterns to create scalable systems.",
          icon: <FaLaptopCode size={40} className="text-purple-500" />, 
          bgColor: "bg-purple-100",
          link: "/software-architecture",
        },
      ],
    },
    {
      major: "Networking and Cybersecurity",
      units: [
        {
          title: "Network Administration",
          description:
            "Learn how to configure, manage, and troubleshoot network systems effectively.",
          icon: <FaNetworkWired size={40} className="text-orange-500" />, 
          bgColor: "bg-orange-100",
          link: "/network-administration",
        },
        {
          title: "Network Switching and Routing",
          description:
            "Master the fundamentals of switching and routing protocols in modern networks.",
          icon: <FaNetworkWired size={40} className="text-red-500" />, 
          bgColor: "bg-red-100",
          link: "/network-switching",
        },
      ],
    },
  ];

  const allUnits = categories.flatMap((category) => category.units);

  const activeCategory =
    activeTab === "Your Major"
      ? categories.find((category) => category.major === userMajor)
      : activeTab === "All Units"
      ? { units: allUnits }
      : categories.find((category) => category.major === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-10 mt-14">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Units</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("All Units")}
          className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeTab === "All Units" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          All Units
        </button>
        <button
          onClick={() => setActiveTab("Your Major")}
          className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeTab === "Your Major" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Your Major
        </button>
        {categories.map((category) => (
          <button
            key={category.major}
            onClick={() => setActiveTab(category.major)}
            className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-300 ${
              activeTab === category.major ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.major}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="container mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory.units.map((unit, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ${unit.bgColor}`}
              onClick={() => navigate(unit.link)}
            >
              <div className="flex items-center justify-center mb-4">{unit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {unit.title}
              </h3>
              <p className="text-gray-600">{unit.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreUnits;
