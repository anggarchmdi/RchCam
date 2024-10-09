import React from 'react';

function Login() {
  return (
    <div className='w-screen h-screen bg-slate-900 flex justify-center items-center'>
      <div className="bg-slate-800 w-96 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

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

        {/* Password Field */}
        <div className="mb-6">
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

        {/* Login Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
          Login
        </button>

        {/* Additional Links */}
        <div className="text-center mt-4">
          <a href="/" className="text-sm text-blue-400 hover:text-blue-500">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
