import React from "react";
import { Link } from "react-router";


const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-red-500 to-purple-500 px-4">
      
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center max-w-lg w-full border border-white/20">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-white mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition duration-300">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Errorpage;