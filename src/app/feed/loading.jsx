// components/LoadingSkeleton.js
import React from "react";

const LoadingSkeleton = () => {
  const skeletons = Array.from({ length: 12 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-10 w-11/12 mx-auto">
      {skeletons.map((_, index) => (
        <div key={index} className="animate-pulse space-y-4">
          <div className="h-40 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
