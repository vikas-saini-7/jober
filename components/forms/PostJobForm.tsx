
import React, { useState } from 'react';
// toast notification import 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader';

const PostJobForm: React.FC = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState(''); // Assuming job type is a dropdown
  const [applicationEmail, setApplicationEmail] = useState('');
  const [applicationLink, setApplicationLink] = useState('');

  // random tags generating code 
  const allTags = ["Top", 'Best', "Recommanded", "Good", "MNC", "Quality", "Creative", "Perfect", "Leader", "Cool", "Modern"];
  function generateRandomNumber(){
    return Math.floor(Math.random() * 10);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // generating and assigning random tags 
    const tags = [allTags[generateRandomNumber()], allTags[generateRandomNumber()]]
  
    // Posting data to the database
    try {
      let result = await fetch('http://localhost:3000/api/post-job', {
        method: 'post',
        body: JSON.stringify({
          jobTitle,
          jobDescription,
          companyName,
          location,
          jobType,
          applicationEmail,
          applicationLink,
          tags,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
  
      const responseData = await result.json();
  
      // Check the success property in the response
      if (responseData.success) {
        // Show a success notification
        console.log('success')
        toast.success(responseData.message,{
          position: 'bottom-right',
          autoClose: 5000, // Time in milliseconds to close the toast automatically
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
        // Optionally, you can reset your form or redirect the user
      } else {
        // Show an error notification
        console.log('error')
        toast.error(responseData.error);
        setIsLoading(false);
      }
  
    } catch (error) {
      console.error('Error during fetch:', error);
      // Show an error notification
      toast.error('An error occurred while posting the job');
      setIsLoading(false);
    }
    // reset fields 
    setJobTitle('');
    setJobDescription('');
    setCompanyName('');
    setLocation('');
    setJobType('');
    setApplicationEmail('');
    setApplicationLink('');
  };

  return (
    <div className="max-w-screen-md md:mx-auto mt-8 p-6 bg-white border rounded-lg shadow-lg mx-8">
      <ToastContainer/>
      {isLoading && <Loader/>}
      {!isLoading &&
        <>
          <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                className="w-full border p-2 rounded focus:outline-none focus:border-black"
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                className="w-full border p-2 rounded focus:outline-none focus:border-black"
                id="jobDescription"
                name="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                className="w-full border p-2 rounded focus:outline-none focus:border-black"
                type="text"
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                className="w-full border p-2 rounded focus:outline-none focus:border-black"
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
                Job Type
              </label>
              <select
                className="w-full border p-2 rounded focus:outline-none focus:border-black"
                id="jobType"
                name="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                required
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="on-site">On Site</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applicationEmail">
                Application Email
              </label>
              <input
                className="w-full border p-2 rounded focus:outline-none focus:border-black"
                type="email"
                id="applicationEmail"
                name="applicationEmail"
                value={applicationEmail}
                onChange={(e) => setApplicationEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applicationLink">
                Application Link
              </label>
              <input
                className="w-full border p-2 rounded focus:outline-none focus:border-black"
                type="url"
                id="applicationLink"
                name="applicationLink"
                value={applicationLink}
                onChange={(e) => setApplicationLink(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:shadow-outline-black"
            >
              Submit Job
            </button>
          </form>
        </>
      }
    </div>
  );
};

export default PostJobForm;
