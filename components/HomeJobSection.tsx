
import React, { useEffect, useState, KeyboardEvent } from 'react'
import HomeSectionJobCard from './HomeJobSectionCard';
import Link from 'next/link';
import Loader from './Loader';
import {API_BASE_URL} from '@/constants';


interface Job {
    jobTitle: string;
    jobDescription: string;
    companyName: string;
    location: string;
    jobType: string;
    applicationEmail: string;
    applicationLink: string;
    tags?: string[];
  }




const HomeJobSection = () => {
    
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);

    // fetching jobs data on initial render 
    useEffect(() => {
        // Fetch job data when the component mounts
        const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/jobs`);
            const data = await response.json();
            setJobs(data);
            setIsLoading(false);
            // console.log(data)
        } catch (error) {
            console.error('Error fetching job data:', error);
            setIsLoading(false);
        }
        };
        fetchData();
    }, []);

  return (
    <div className='container mx-auto'>
        <h2 className='text-3xl font-bold ml-8 mt-8 md:text-center md:ml-0 md:pt-16 md:text-5xl'>Top Jobs</h2>
        {isLoading &&
          <div className='p-8'>
            <Loader/>
          </div>
        }
      {!isLoading &&
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
            {jobs.slice(0, 8).map((job, index) => (
                <HomeSectionJobCard
                    key={index}
                    jobTitle={job.jobTitle}
                    jobType={job.jobType}
                    companyName={job.companyName}
                    location={job.location}
                    jobDescription={job.jobDescription}
                />
            ))}
          </div>
          <div className='text-center '>
            <Link href='/jobs'>
                <button className='w-fit hover:text-purple-500 text-gray-400'>View All Jobs</button>
            </Link>
          </div>
        </>
      }
    </div>
  );
};

export default HomeJobSection;
