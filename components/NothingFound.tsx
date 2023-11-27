// NothingFound.js

import React from 'react';
import nothingFoundImage from './nothing-found.png'; // Replace with your image path

const NothingFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto p-8">
      <img src='/images/nothing-found.svg' alt="Nothing Found" className="w-full max-w-sm mb-4" />
      <p className="text-lg font-bold text-gray-800 md:text-center">Sorry, nothing found!</p>
    </div>
  );
};

export default NothingFound;
