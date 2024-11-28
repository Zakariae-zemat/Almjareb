import React from "react";

const CommunitiesSection = () => {
  return (
    <div className="fixed top-[120px] right-4 bg-white shadow-md rounded-lg pl-8 px-24 mt-8 w-84">
      <h2 className="text-lg font-bold my-4 ">Popular Communities</h2>
      <ul className="my-4">
        <li className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="ml-3 cursor-pointer hover:underline">explainlikeimfive</span>
            <span className="ml-auto text-gray-500">22,960,384 membres</span>
          </div>
        </li>
      </ul>
      <ul className="my-4">
        <li className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="ml-3 cursor-pointer hover:underline">explainlikeimfive</span>
            <span className="ml-auto text-gray-500">22,960,384 membres</span>
          </div>
        </li>
      </ul>
      <ul className="my-4">
        <li className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="ml-3 cursor-pointer hover:underline">explainlikeimfive</span>
            <span className="ml-auto text-gray-500">22,960,384 membres</span>
          </div>
        </li>
      </ul>
      <ul className="my-4">
        <li className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="ml-3 cursor-pointer hover:underline">explainlikeimfive</span>
            <span className="ml-auto text-gray-500">22,960,384 membres</span>
          </div>
        </li>
      </ul>
      
      <button className="my-4 text-blue-500">show more</button>
    </div>
  );
};

export default CommunitiesSection;
