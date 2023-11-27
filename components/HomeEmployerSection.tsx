// components/EmployerSection.js

import Link from "next/link";

const HomeEmployerSection = () => {
    return (
        <div className="bg-cover bg-center bg-gradient-to-r from-black to-gray-800 text-white py-16 lg:flex lg:items-center p-8 mt-16">
        <div className="w-full text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Are you an employer?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Post your job opportunities and connect with talented individuals.
          </p>
          <Link href='/post-job'>
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg">
                Post a Job
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default HomeEmployerSection;
  