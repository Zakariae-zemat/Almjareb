import React from 'react';
import AlMjarebIcon from '../../assets/AlMjarebIcon.png';
import AlMjareblg from '../../assets/AlMjareblg.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="max-w-4xl mx-auto font-[sans-serif]">
      <div className="relative w-full max-w-sm mx-auto">
      <Link to="/">
          <img className="mx-auto pointer-events-none select-none" src={AlMjareblg} alt="Your Company" width="300" height="500" />
        </Link>
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
      <div className="text-center mb-16">
        <h4 className="text-gray-800 text-3xl font-bold">Sign up</h4>
      </div>

      <form>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Full name</label>
            <input
              id="id"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Username</label>
            <input
              id="lid"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter a Username"
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email</label>
            <input
              id="email"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Confirm email</label>
            <input
              id="cemail"
              type="email"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Confirm your email"
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input
              id="password"
              type="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter password"
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
            <input
              id="cpassword"
              type="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <div className="!mt-12">
          <button
            type="button"
            className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none"
          >
            Sign up
          </button>
        </div>
      </form>
      <p className="text-center text-sm/6 text-gray-500">
        you have already an account?{' '}
        <Link to="/login" className="font-semibold text-cyan-600 hover:text-cyan-800">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
