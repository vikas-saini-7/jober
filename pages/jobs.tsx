import JobCard from '@/components/JobCard';
import Loader from '@/components/Loader';
import NothingFound from '@/components/NothingFound';
import PageHeader from '@/components/PageHeader'
import Pagination from '@/components/Pagination';
import React, { useEffect, useState, KeyboardEvent } from 'react'
import { useRouter } from 'next/router';
import { API_BASE_URL } from '@/constants';

const pageNames = ['home', 'jobs'];

// Example filters (customize based on your requirements)
const locations = ['San Francisco', 'New York', 'Remote', 'Los Angeles'];
const jobLevels = ['Entry Level', 'Mid Level', 'Senior Level'];
const employmentTypes = ['Full Time', 'Part Time', 'Contract'];

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

const jobs = () => {

  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const [searchString, setSearchString] = useState('');
  const [showSearchString, setShowSearchString] = useState(false);

  // jobStartNum
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobStartNum, setJobStartNum] = useState<number>(0);
  const [jobEndNum, setJobEndNum] = useState<number>(5);

  var totalPages = (jobs.length / 5) + 1; // Replace with the actual total number of pages
  if(jobs.length % 5 == 0){
    totalPages = totalPages-1;
  }
  if(jobs.length > 100){
    totalPages = 10;
  }
  
  // Add logic to display data for the selected page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setJobStartNum((page*5) - 5);
    setJobEndNum(page*5);
    router.push('#jobs')
  };

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

  // search implimented
  const handleSearch = async () => {
    setJobStartNum(0);
    setJobEndNum(5);
    setIsLoading(true);
    if(searchString != ''){
      setShowSearchString(true);
    }else {
      setShowSearchString(false);
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/search?q=${searchString}`);
      const data = await response.json();
      setJobs(data.searchedJobs);
      // console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching job data:', error);
      setIsLoading(false);
    }
    router.push('#jobs')
  }
  // enter keyboard key for searching 
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }


  return (

    

    <div>
        <PageHeader
            pageNames={pageNames}
            heading='Jobs you need'
            description='Filter, Find and get the job you need here on our platform'
        />

        <div className="container mx-auto p-8 pt-0">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* First Column (Filters) */}
            <div className="lg:w-1/3 mb-8 md:mb-0 bg-gray-200 p-8 rounded-lg mt-4">
              <h2 className="text-2xl font-semibold mb-4">Filters</h2>

              {/* Job Role Search */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Job Role</label>
                <input
                  type="text"
                  placeholder='Type and hit Enter'
                  // value={jobRoleSearch}
                  onChange={(e) => setSearchString(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full border p-2 rounded focus:outline-none focus:border-black"
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-'>
                {/* Location Filter */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <ul>
                    {locations.map((location, index) => (
                      <li key={index} className="mb-2">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox text-black" />
                          <span className="ml-2 text-black">{location}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Job Level Filter */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Job Level</h3>
                  <ul>
                    {jobLevels.map((level, index) => (
                      <li key={index} className="mb-2">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox text-black" />
                          <span className="ml-2 text-black">{level}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Employment Type Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Employment Type</h3>
                  <ul>
                    {employmentTypes.map((type, index) => (
                      <li key={index} className="mb-2">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox text-black" />
                          <span className="ml-2 text-black">{type}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
               {/* Apply Filters Button  */}
                <button
                  className="bg-black text-white py-2 px-4 rounded-lg mt-4 font-semibold hover:bg-gray-800 focus:outline-none focus:shadow-outline-black"
                  onClick={handleSearch}
                >Apply Filters</button>

            </div>

            {/* Second Column (Job Cards) */}
            <div className="lg:w-2/3 pt-4" id='jobs'>
              {/* loader  */}
              {isLoading && <Loader/>}
              {/* searchquery  */}
              {showSearchString && (
                <h5 className='mb-4 text-gray-500'>
                  <span>
                    Search results for : 
                    <span className='font-bold text-black'>{searchString}</span>
                  </span>
                  <span className='ml-4'>
                    jobs found: 
                    <span className='font-bold text-black'> {jobs.length}</span>
                  </span>
                </h5>
              )}
              {/* jobs list  */}
              {!isLoading && jobs.slice(jobStartNum, jobEndNum).map((item) => (
                <JobCard
                
                jobTitle={item.jobTitle}
                jobDescription={item.jobDescription}
                jobType={item.jobType}
                companyName={item.companyName}
                location={item.location}
                applicationEmail={item.applicationEmail}
                applicationLink={item.applicationLink}
                tags={item.tags}
                />
              ))}

              { jobs.length == 0 && isLoading && (
                <NothingFound/>
              )}
              
              {/* Add more JobCard instances for additional jobs */}
              {/* Pagination */}
              {jobs.length != 0 && (
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
              )}

            </div>
          </div>
        </div>


    </div>
  )
}

export default jobs