import React from 'react';
import { Link } from 'react-router-dom';
import AlMjarebLogo from '../assets/AlMjareblg.png';

function Header() {
  return (
    <header>
      <nav className="bg-white outline outline-1 outline-gray-200 border-gray-200 px-4 py-4 lg:px-6 py-0">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
          <Link to="/" className="flex items-center ml8">
            <img src={AlMjarebLogo} className="mr-3 p-0" alt="Logo" width="260" height="300" />
          </Link>
          <div className="flex items-center lg:order-2 absolute top-8 right-16">
            <Link to="/login" className="text-cyan-700 hover:bg-cyan-50 border border-2 font-semibold border-cyan-500 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              Log in
            </Link>
            <Link to="/register" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:ring-cyan-700 font-semibold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              Sign up
            </Link>
          </div>
          <div className="relative w-96 mx-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500" placeholder="Search Posts, peoples, Groups..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-cyan-500 hover:bg-cyan-600 focus:ring-2 font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
