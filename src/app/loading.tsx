import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-200 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="h-12 w-12 bg-green-300 rounded-full"></div>
            <div>
              <div className="h-4 w-20 bg-yellow-300 rounded"></div>
              <div className="h-4 w-16 bg-red-300 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-purple-300 rounded w-2/3"></div>
          <div className="h-4 bg-teal-300 rounded"></div>
          <div className="h-4 bg-pink-300 rounded"></div>
          <div className="h-4 bg-indigo-300 rounded w-1/2"></div>
          <div className="h-4 bg-orange-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-blue-300 rounded w-3/4"></div>
        </div>

        <div className="animate-pulse space-y-4 mt-12">
          <div className="h-4 bg-lime-300 rounded w-2/3"></div>
          <div className="h-4 bg-rose-300 rounded"></div>
          <div className="h-4 bg-cyan-300 rounded"></div>
          <div className="h-4 bg-teal-300 rounded w-1/2"></div>
          <div className="h-4 bg-violet-300 rounded"></div>
          <div className="h-4 bg-sky-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
