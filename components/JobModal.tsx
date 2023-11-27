// components/JobModal.tsx
import React from 'react';
import Modal from 'react-modal';
import ModalThreeBoxedGrid from './ModalThreeBoxedGreed';

interface JobModalProps {
    isOpen: boolean;
    onClose: () => void;
    _id?:string;
    jobTitle:string;
    jobDescription:string;
    jobType:string;
    companyName:string;
    location:string;
    applicationEmail:string;
    applicationLink:string;
    tags?:string[];
}

const JobModal: React.FC<JobModalProps> = ({
    isOpen,
    onClose,
    _id,
    jobTitle,
    jobDescription,
    location,
    jobType,
    companyName,
    applicationEmail,
    applicationLink,
    tags
    
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Job Details"
      overlayClassName="modal-overlay ReactModal__Overlay"
      className="modal-content"
    >
        <div className="close-modal-overlay" onClick={onClose}>
            <img src="/images/close-icon.png" className='w-4' alt="" />
        </div>
        <div className="modal-main-content">
            <div className="modal-body ">
                <div className="bg-white text-black p-4 md:p-8 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 flex">
                        <img src="/images/back-icon.png" className='w-8  h-auto object-contain mr-4 cursor-pointer hover:opacity-50' onClick={onClose} alt="" />
                        {jobTitle}
                    </h2>
                    <div className='mb-2'>
                    {tags?.slice(0, 2).map((item) => (
                        <span className='bg-green-600 text-white text-xs mr-2 px-2 py-1 uppercase rounded-md'>{item} </span>
                    ))}
                    </div>
                </div>
                <p className="text-purple-500 md:ml-12 text-lg md:text-xl lg:text-2xl md:mb-8">{companyName}</p>
                <p className="text-md text-gray-500">{jobDescription}</p><ModalThreeBoxedGrid jobType={jobType} location={location} quality='Good Culture'/>

                <div className="mt-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">How to Apply</h2>
                    <div className="flex items-center mb-2">
                    <img src="/images/email-icon.png" className='w-8' alt="" />
                    <p className="text-lg">
                        Email your resume to{' '}
                        <a href={`mailto:${applicationEmail}`} className="text-blue-500">
                        {applicationEmail}
                        </a>
                    </p>
                    </div>
                    <div className="flex items-center">
                    <img src="/images/website-icon.png" className='w-8' alt="" />
                    <p className="text-lg">
                        Apply online at{' '}
                        <a href={applicationLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        {applicationLink}
                        </a>
                    </p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </Modal>
  );
};

export default JobModal;
