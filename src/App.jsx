import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './layouts/header';
import Sidebar from './layouts/sidebar';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Post from './layouts/post';
import StartPostButton from './layouts/PostButton';
import CommunitiesSection from './layouts/CommunitiesSection'; // Import the new component

const App = () => {
  const location = useLocation();
  const hideSidebarPaths = ['/login', '/register'];

  return (
    <div className='bg-gray-50'>
      {/* Header */}
      {!hideSidebarPaths.includes(location.pathname) && (
        <div className="fixed top-0 left-0 w-full h-12 bg-black z-40">
          <Header />
        </div>
      )}

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        {!hideSidebarPaths.includes(location.pathname) && (
          <div className="fixed top-12 left-0 w-64 h-[calc(100vh-3rem)] bg-red-500 z-10">
            <Sidebar />
          </div>
        )}

        {/* Main Content with Right Section */}
        <div
          className={`flex-1 flex ${
            !hideSidebarPaths.includes(location.pathname) ? 'ml-64' : ''
          } mt-24 p-4`}
        >
          {/* Main Content Area */}
          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex flex-col justify-center items-start mt-4">
                    <StartPostButton 
                        userpic = "/src/assets/userpic.JPG"
                    />
                    <div className="max-w-4xl w-full mt-12 ml-8">
                      <Post
                        userPicture="/src/assets/userpic.JPG"
                        postImage={[
                          "/src/assets/postpic.JPG","/src/assets/postpic.JPG","/src/assets/postpic.JPG"
                        ]}
                        username="Zakariae zemat"
                        timestamp="2 hours ago"
                        content="what a amazing experience!"
                      />
                    </div>
                  </div>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>

          {/* Right Section - Communities */}
          
            <CommunitiesSection />
          
        </div>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
