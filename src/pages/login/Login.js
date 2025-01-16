import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogin } from '../../hooks/useLogin';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-2 border border-gray-300 rounded-lg"
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
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        {error && (
  <div className="bg-red-500 text-white py-2 px-4 rounded-lg mt-3 b border-2 border-red-900">
    <p className="font-semibold">{error}</p>
  </div>
)}
      </form>
    </div>
  )
}
