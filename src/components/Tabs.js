import React, { useState } from "react";
import { BookOpen, Star, MessageCircle, UserCheck } from "lucide-react";

export default function Tabs() {
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    {
      id: "exploreUnits",
      label: "Explore Units",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      content: "Discover units tailored to your academic and personal goals.",
    },
    {
      id: "topRatedNotes",
      label: "Top Rated Notes",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      content: "Access the most popular and highly rated notes shared by peers.",
    },
    {
      id: "activeDiscussion",
      label: "Active Discussion",
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      content:
        "Engage in meaningful conversations and discussions with your community.",
    },
    {
      id: "findMentorship",
      label: "Find Mentorship",
      icon: <UserCheck className="w-6 h-6 text-purple-500" />,
      content:
        "Connect with mentors to guide you in your academic and career journey.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`relative p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              hoveredTab === tab.id
                ? "bg-blue-50 border-2 border-blue-500"
                : "bg-white border border-gray-300"
            }`}
            style={{ minHeight: "150px" }} // Consistent height
          >
            {/* Tab Header */}
            <div className="flex items-center space-x-4">
              {tab.icon}
              <h3
                className={`text-lg font-semibold ${
                  hoveredTab === tab.id ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {tab.label}
              </h3>
            </div>

            {/* Reserved Space for Description */}
            <div
              className={`mt-4 text-gray-600 transition-opacity duration-300 ${
                hoveredTab === tab.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
