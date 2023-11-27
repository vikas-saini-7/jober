// components/Banner.js

import Link from "next/link";

const HomeBanner = () => {
    return (
      <div className="bg-black text-white py-16 text-center mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to our website
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Explore the amazing features of our website.
        </p>
        <Link href='/jobs'>
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg">
                Discover Jobs
            </button>
        </Link>
      </div>
    );
  };
  
  export default HomeBanner;
  