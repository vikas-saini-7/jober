import Link from "next/link";
// components/HeroSection.tsx
const Hero: React.FC = () => {
    return (
      <section className="bg-white text-gray-800 py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center p-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-16 md:pl-8">
            <h1 className="leading-snug md:leading-normal lg:leading-normal text-5xl lg:text-6xl font-bold mb-4 text-center md:text-center lg:text-left ">Get, Post a Job <br />  <span className="hidden lg:inline-block">—</span>  quicky and Easily!</h1>
            <p className="text-lg mb-8 custom-color">Explore a world of opportunities with JobPortal. Find the perfect job or top talent effortlessly.</p>
            <Link href="/jobs" >
              <button  className="bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-900">Browse Jobs</button>
            </Link>
          </div>
  
          {/* Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img src="/images/hero.jpg" alt="Job Search" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  