import React from 'react';

const StartPostButton = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-2xl ml-36 py-12">
      <div className="flex items-center space-x-3">
        <img
          src="/src/assets/userpic.JPG"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
        <div className="flex-1">
          <div className="flex items-center border-2 border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-100">
            <span className="text-gray-500">What's on your mind?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPostButton;
