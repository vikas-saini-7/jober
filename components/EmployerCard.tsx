// components/EmployerCard.tsx
import React from 'react';

interface EmployerCardProps {
  imageUrl: string;
  name: string;
  companyName: string;
  totalJobsPosted: number;
  companySize: string;
}

const EmployerCard: React.FC<EmployerCardProps> = ({
  imageUrl,
  name,
  companyName,
  totalJobsPosted,
  companySize,
}) => {
  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/3 lg:w-1/4">
      <div className="mb-4">
        <img src={imageUrl} alt={`${name} Banner`} className="w-full h-auto object-cover rounded-md mb-4" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">{companyName}</p>
      </div>

      <div className="mb-4">
        <p className="text-lg">
          <span className="font-bold">{totalJobsPosted}</span> Jobs Posted
        </p>
        <p className="text-lg">Company Size: {companySize}</p>
      </div>

      {/* Add more details or actions as needed */}
    </div>
  );
};

export default EmployerCard;
