import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { FaArrowRight } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';



export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { signup, error, isPending } = useSignup();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    console.log(email, password, displayName);
    navigate('/qns')
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Student Email:
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="111111111@student.swin.edu.au"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
          />
        </div>

        {/* Display Name Field */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2" htmlFor="displayName">
            Display Name:
          </label>
          <input
            type="text"
            id="displayName"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Sarthak Pradhan"
          />
        </div>


        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>

      {/* {email &&  (<div className= 'flex justify-end p-6'> */}
      {/* {(<div className= 'flex justify-end p-6'>
          <button onClick={qnsSurveyPage}>
            <FaArrowRight className='h-5 w-'/>
          </button>
        </div>)} */}

      


        {error && (
          <div className="bg-red-500 text-white py-2 px-4 rounded-lg mt-3 b border-2 border-red-900">
            <p className="font-semibold">{error}</p>
          </div>
        )}

      </form>
    </div>
  );
}
