import React from 'react'


interface HomeJobSectionCardProps {
  jobTitle: string;
  companyName: string;
  location: string;
  jobDescription: string;
  jobType: string;
}

const HomeJobSectionCard = ({jobTitle, companyName,jobType , location, jobDescription}: HomeJobSectionCardProps) => {
    return (
      <div className="bg-white rounded-md border p-8">
        <h2 className="text-xl font-bold mb-2 ">{jobTitle}</h2>
        <p className="text-gray-600 mb-2 text-purple-500">{companyName}</p>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-400">{jobDescription}</p>
      </div>
    );
  };
  
  export default HomeJobSectionCard;
  