import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <div className="animate-spin rounded-full border-t-4 border-gray-800 border-opacity-25 border-solid h-16 w-16"></div>
    </div>
  );
};

export default Loader;
