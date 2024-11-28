import React from 'react';
import AlMjarebLogo from '../../assets/AlMjareblg.png';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 relative">
      <div className="relative w-full max-w-sm mx-auto">
      <Link to="/">
          <img className="mx-auto pointer-events-none select-none" src={AlMjarebLogo} alt="Your Company" width="300" height="500" />
        </Link>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email or username</label>
            <input id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-cyan-600" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <input id="password" name="password" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-cyan-600" required />
          </div>
          <button type="submit" className="flex w-full justify-center bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm rounded-md hover:bg-cyan-600">
            Sign in
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? 
          <Link to="/register" className="font-semibold text-cyan-600 hover:text-cyan-800">
          Sign up
        </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
