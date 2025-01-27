import React, { useState } from "react";

export default function QnsSurvey() {
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const [responses, setResponses] = useState({
    major: "",
    units: "",
    year: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    alert("Thank you for completing the survey!");
  };

  return (
    <div className="p-4 max-w-xl h-auto mt-28 m-auto border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Student Survey</h1>
      <form onSubmit={handleSubmit}>
        {currentPage === 1 && (
          <div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">What is your major?</label>
              <input
                type="text"
                name="major"
                value={responses.major}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="E.g., Computer Science"
                required
              />
            </div>
            <div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Which year are you in?</label>
              <select
                name="year"
                value={responses.year}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select your year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="3rd">4th Year</option>
              </select>
            </div>
          </div>
            
          </div>
        )}

        {currentPage === 2 && (
          <div className="mb-4">
          <label className="block mb-2 font-medium">Which units have you taken?</label>
          <input
            type="text"
            name="units"
            value={responses.units}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="E.g., COS10009, COS20007"
            required
          />
        </div>
        )}

        <div className="flex justify-between mt-4">
          {currentPage > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {currentPage < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
