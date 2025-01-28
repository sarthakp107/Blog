import React, { useState } from "react";
import { projectFirestore } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function QnsSurvey() {
  //database
   const { user } = useAuthContext();
  
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');

  const [responses, setResponses] = useState({
    course: "",
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

  const validCourses = [
    "Bachelor of Computer Science",
    "Bachelor of Information Technology",
    "Bachelor of Software Engineering",
    "Bachelor of Cybersecurity",
    "Bachelor of Data Science",
  ];

  const validMajors = [
    "Software Development",
    "Cybersecurity",
    "Artificial Intelligence",
    "Data Analytics",
    "Network Design",
  ];

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
      return {
        ...prev,
        units: isSelected
          ? prev.units.filter((id) => id !== unitId)
          : [...prev.units, unitId],
      };
    });
  };

  const addCustomUnit = () => {
    if (customUnit.trim() === "") {
      alert("Custom unit name cannot be empty.");
      return;
    }

    const newUnit = {
      id: `CUSTOM-${unitsList.length + 1}`,
      name: customUnit.trim(),
    };
    setUnitsList((prev) => [...prev, newUnit]);
    setCustomUnit("");
    alert(`Unit "${newUnit.name}" added successfully!`);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setError('');
    if (currentPage === 1) {
      if (!responses.course.trim() || !validCourses.includes(responses.course)) {
        setError('Please enter a valid course');
        return;
      }
      if (!responses.major.trim() || !validMajors.includes(responses.major)) {
        setError('Please enter a valid major');
        return;
      }

      if (!responses.year) {
        setError("Please select your year before proceeding.");
        return;
      }
    }

    setCurrentPage((prev) => prev + 1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    //add to the database
    const { uid } = user;
    await projectFirestore.collection('users').doc(uid).update({
      surveryIsDone: true,
      responses
     });
     navigate('/profile')
    
  };

  const leftSideText = () => {
    const pageTexts = [
      {
        title: "Before Setting Up Your Profile, Answer a Few Questions!",
        description:
          "Let us know a bit about your academic background so we can tailor your profile better.",
      },
      {
        title: "Tell Us About Your Units and Coursework!",
        description:
          "Select the units you've completed, or add your own custom units if necessary.",
      },
    ];

    const { title, description } = pageTexts[currentPage - 1];

    return (
      <div>
        <h1 className="text-5xl font-bold leading-tight">{title}</h1>
        <p className="text-xl mt-4">{description}</p>
      </div>
    );
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
          <form >
            {/* Page 1: Major and Year */}
            {currentPage === 1 && (
              <div>
                <div className="mb-6">
                  <label className="block text-2xl font-medium text-gray-700 mb-2">What course are you taking?</label>
                  <select
                    name="course"
                    value={responses.course}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-xl"
                  >
                    <option value="">Select your course</option>
                    {validCourses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-2xl font-medium text-gray-700 mb-2">What is your major?</label>
                  <select
                    name="major"
                    value={responses.major}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-xl"
                  >
                    <option value="">Select your major</option>
                    {validMajors.map((major) => (
                      <option key={major} value={major}>{major}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-2xl font-medium text-gray-700 mb-2">Which year are you in?</label>
                  <select
                    name="year"
                    value={responses.year}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-xl"
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
                      onChange={(e) => setCustomUnit(e.target.value)}
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
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xl"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          {error && (
  <div className="bg-red-500 text-white py-2 px-4 rounded-lg mt-3 b border-2 border-red-900">
    <p className="font-semibold">{error}</p>
  </div>
)}
        </div>
      </div>
    </div>
  );
}
