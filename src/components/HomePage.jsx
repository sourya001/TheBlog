import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">Welcome to Our Blog</h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mb-8">Explore the latest articles written by our team of experts.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample blog post cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit amet</h2>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ipsum sit amet lacus finibus, nec fringilla mi semper.</p>
            
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Sed do eiusmod tempor incididunt</h2>
            <p className="text-gray-700 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Duis aute irure dolor in reprehenderit</h2>
            <p className="text-gray-700 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
