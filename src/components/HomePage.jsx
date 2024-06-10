import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-red-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">Welcome to Our Blog</h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mb-8">Explore the latest articles written by our team of experts.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample blog post cards */}
          <div className="bg-red-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upload your views</h2>
            <p className="text-gray-700 mb-4">we're excited to provide you with a platform to share your thoughts, ideas, and stories with the world. Whether you're a seasoned writer or just starting out, our intuitive interface and powerful tools make it easy to create and publish your content.</p>
            
          </div>
          <div className="bg-red-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upload images</h2>
            <p className="text-gray-700 mb-4">along with crafting compelling written content, you can enhance your blog posts with vibrant images that truly bring your stories to life. Whether you're sharing travel adventures, delicious recipes, or insightful tutorials, our image upload feature allows you to visually captivate your audience and make a lasting impression.</p>
           
          </div>
          <div className="bg-red-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Safe and Secure</h2>
            <p className="text-gray-700 mb-4">We're committed to keeping your data safe and secure. With robust encryption and stringent privacy measures in place, you can rest assured that your personal information remains confidential. Enjoy exploring and sharing your thoughts without worrying about compromising your privacy. Happy blogging!"</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;