import React from 'react';

function Register() {
  return (
    <div className='w-screen h-screen bg-slate-900 flex justify-center items-center'>
      <div className="bg-slate-800 w-96 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Register</h2>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your password"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
          Register
        </button>

        {/* Already have an account? */}
        <div className="text-center mt-4">
          <a href="/login" className="text-sm text-blue-400 hover:text-blue-500">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
