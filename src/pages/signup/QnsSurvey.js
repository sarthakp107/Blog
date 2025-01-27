import React, { useState } from "react";

export default function QnsSurvey() {
  const [currentPage, setCurrentPage] = useState(1);
  const [responses, setResponses] = useState({
    major: "",
    units: [],
    year: "",
  });
  const [customUnit, setCustomUnit] = useState("");
  const [unitsList, setUnitsList] = useState([
    { id: "COS10009", name: "Introduction to Programming" },
    { id: "COS20007", name: "Object-Oriented Programming" },
    { id: "COS30018", name: "Software Development Practices" },
    { id: "COS40003", name: "Cybersecurity Fundamentals" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (unitId) => {
    setResponses((prev) => {
      const isSelected = prev.units.includes(unitId);
      const updatedUnits = isSelected
        ? prev.units.filter((id) => id !== unitId)
        : [...prev.units, unitId];
      return {
        ...prev,
        units: updatedUnits,
      };
    });
  };

  const handleCustomUnitChange = (e) => {
    setCustomUnit(e.target.value);
  };

  const addCustomUnit = () => {
    if (customUnit.trim() !== "") {
      const newUnit = {
        id: `CUSTOM-${unitsList.length + 1}`,
        name: customUnit.trim(),
      };
      setUnitsList((prev) => [...prev, newUnit]);
      setCustomUnit("");
      alert(`Unit "${newUnit.name}" added successfully!`);
    }
  };

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey Responses:", responses);
  };

  const leftSideText = () => {
    if (currentPage === 1) {
      return (
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Before Setting Up Your Profile, Answer a Few Questions!
          </h1>
          <p className="text-xl mt-4">
            Let us know a bit about your academic background so we can tailor your profile better.
          </p>
        </div>
      );
    } else if (currentPage === 2) {
      return (
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Tell Us About Your Units and Coursework!
          </h1>
          <p className="text-xl mt-4">
            Select the units you've completed, or add your own custom units if necessary.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side - Dynamic Text */}
      <div className="w-1/2 bg-blue-600 text-white p-16 flex items-center justify-center">
        {leftSideText()}
      </div>

      {/* Right side - Form */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Student Survey</h2>
          <form onSubmit={handleSubmit}>
            {/* Page 1: Major and Year */}
            {currentPage === 1 && (
              <div>
                <div className="mb-6">
                  <label className="block text-2xl font-medium text-gray-700 mb-2">What is your major?</label>
                  <input
                    type="text"
                    name="major"
                    value={responses.major}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-xl"
                    placeholder="E.g., Computer Science"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-2xl font-medium text-gray-700 mb-2">Which year are you in?</label>
                  <select
                    name="year"
                    value={responses.year}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-xl"
                    required
                  >
                    <option value="">Select your year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>
              </div>
            )}

            {/* Page 2: Units */}
            {currentPage === 2 && (
              <div>
                <div className="mb-6">
                  <label className="block text-2xl font-medium text-gray-700 mb-2">
                    Which units have you taken? (Select or add your own)
                  </label>
                  <div className="space-y-4">
                    {unitsList.map((unit) => (
                      <label key={unit.id} className="flex items-center gap-3 text-xl">
                        <input
                          type="checkbox"
                          checked={responses.units.includes(unit.id)}
                          onChange={() => handleCheckboxChange(unit.id)}
                          className="h-6 w-6"
                        />
                        {unit.name}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-2xl font-medium text-gray-700 mb-2">Add your own unit:</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      value={customUnit}
                      onChange={handleCustomUnitChange}
                      className="w-full p-3 border border-gray-300 rounded-md text-xl"
                      placeholder="E.g., My Custom Unit"
                    />
                    <button
                      type="button"
                      onClick={addCustomUnit}
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xl"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentPage > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-xl"
                >
                  Previous
                </button>
              )}
              {currentPage < 2 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xl"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xl"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
