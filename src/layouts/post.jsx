// Post.jsx
import React from 'react';

const Post = ({ userPicture, username, timestamp, content, postImage }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w-2xl mx-auto">
    {/* Post Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {/* User Picture */}
        <img
          src={userPicture || "https://via.placeholder.com/40"}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        {/* Username and Post Timestamp */}
        <div>
          <p className="font-bold">{username || "Unknown User"}</p>
          <p className="text-xs text-gray-500">{timestamp || "Just now"}</p>
        </div>
      </div>
      {/* Three-Dot Options */}
      <button className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v.01M12 12v.01M12 18v.01" />
        </svg>
      </button>
    </div>

    {/* Post Content */}
    <div className="mt-4">
      {/* Text Content */}
      <p className="text-gray-700 mb-4">{content}</p>

      {/* Post Image */}
      {Array.isArray(postImage) && postImage.length > 0 && (
        <div className="mt-4 grid gap-4">
          {/* Cas pour une image */}
          {postImage.length === 1 && (
            <img
              src={postImage[0]}
              alt="Post main"
              className="w-full h-full object-cover rounded-md"
            />
          )}

          {/* Cas pour deux images */}
          {postImage.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              {postImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              ))}
            </div>
          )}

          {/* Cas pour trois ou quatre images */}
          {postImage.length >= 3 && (
            <div className="grid grid-cols-[2fr_1fr] gap-4">
              {/* La première image, grande à gauche */}
              <img
                src={postImage[0]}
                alt="Post main"
                className="w-full h-full object-cover rounded-md"
              />
              
              {/* Les autres images, petites à droite */}
              <div
                className={`grid gap-4 ${
                  postImage.length === 3 ? 'grid-rows-2' : 'grid-rows-3'
                }`}
              >
                {postImage.slice(1, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Post ${index + 2}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
)}



    </div>

    {/* Post Actions */}
    <div className="flex mt-4 space-x-8 text-gray-600">
      {/* Like Button */}
      <button className="flex items-center space-x-1 hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>

        <span>Like</span>
      </button>
      
      {/* Comment Button */}
      <button className="flex items-center space-x-1 hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>

        <span>Comment</span>
      </button>
      
      {/* Share Button */}
      <button className="flex items-center space-x-1 hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>
        <span>Share</span>
      </button>
    </div>
  </div>
);

export default Post;
