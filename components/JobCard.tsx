import { JobCardProps } from '@/types';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import JobModal from './JobModal';

const JobCard = ({
  jobTitle,
  jobDescription,
  companyName,
  location,
  jobType,
  applicationEmail,
  applicationLink,
  tags
}: JobCardProps) => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Effect to hide the body scrollbar when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore body scrollbar when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);


  return (
    <div className="bg-white rounded-lg p-8 border mb-4 drop-shadow-md" key={jobTitle}>
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{jobTitle}</h2>
        <div className='mb-2'>
          {tags?.slice(0, 2).map((item) => (
            <span className='bg-green-600 text-white text-xs mr-2 px-2 py-1 uppercase rounded-md'>{item} </span>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{jobDescription}</p>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-purple-500">{companyName}</p>
          <p className="text-gray-400">{location}</p>
        </div>
        <div className='flex bg-gray-200 px-2 py-1 rounded-md text-xs'>
          <img src="/images/job-icon.png" className='w-4 h-auto mr-2' alt="" />
          <p className="text-gray-700 ">{jobType}</p>
        </div>
      </div>

      <div className="mt-4">
        {/* <p className="text-blue-500">{applicationEmail}</p> */}
        {/* <a href={applicationLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
          Application Link
        </a> */}
        {/* <Link href={`/jobs/${id}`}> */}
        <button
          className="bg-black text-white py-3 px-7 rounded-lg mt-4 font-semibold hover:bg-gray-800 focus:outline-none focus:shadow-outline-black"
          onClick={handleModalOpen}
        >View Details</button>
        {/* </Link> */}
      </div>
      <JobModal
        key={jobTitle}
        isOpen={isModalOpen}
        onClose={closeModal}
        jobTitle={jobTitle}
        jobDescription={jobDescription}
        jobType={jobType}
        companyName={companyName}
        location={location}
        applicationEmail={applicationEmail}
        applicationLink={applicationLink}
        tags={tags}
        />
    
    </div>
  );
};

export default JobCard;
