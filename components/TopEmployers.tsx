import React, { useEffect, useState } from 'react'
import EmployerCard from './EmployerCard';
import Loader from './Loader';


interface Employer {
  _id: string;
  imageUrl: string;
  name: string;
  companyName: string;
  totalJobsPosted: number;
  companySize: string;
}


const TopEmployers = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [employers, setEmployers] = useState<Employer[]>([]);

  useEffect(() => {
    setIsLoading(true);
    // Fetch job data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/employers');
        const data = await response.json();
        setEmployers(data);
        // console.log(data)
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto flex w-full flex-col md:flex-row gap-8 p-8'>
      {isLoading && <Loader />}
      {!isLoading && employers.map((item) => (
        <EmployerCard
          key={item._id}
          imageUrl={item.imageUrl}
          name={item.name}
          companyName={item.companyName}
          totalJobsPosted={item.totalJobsPosted}
          companySize={item.companySize}
        />
      ))}
    </div>
  )
}

export default TopEmployers;