// components/Header.tsx
import React, {useState} from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="shadow-lg border-b border-black-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className='logo md:ml-6 lg:ml-12'>
        <Link href="/">
          {/* <a className="text-2xl font-bold">JobPortal</a> */}
          <li className='uppercase font-bold text-lg'>
            <img src="/images/logo-light.png" className='h-12' alt="none" />
          </li>
        </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/jobs">
            <li className="text-black hover:text-gray-500 transition duration-300">Jobs</li>
          </Link>
          <Link href="/employers">
            <li className="text-black hover:text-gray-500 transition duration-300">Employers</li>
          </Link>
          <Link href="/post-job">
            <li className="text-black hover:text-gray-500 transition duration-300">Post a Job</li>
          </Link>
          <Link href="/login">
            <li className="text-white bg-black px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-900">Login</li>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        {/* <div className="md:hidden"> */}
        <div className="relative inset-0 overflow-hidden md:hidden">
            {/* Hamburger Button */}
            <button
              className="relative text-black p-2 focus:outline-none z-50"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            {/* Overlay for clicking outside the menu to close */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={toggleMenu}
              />
            )}

            {/* Off-Canvas Menu */}
            <div
              className={`${
                isMenuOpen
                  ? 'translate-x-0 transition-transform ease-in duration-300'
                  : 'translate-x-full transition-transform ease-out duration-300'
              } transform fixed inset-y-0 right-0 w-64 bg-black text-white p-8`}
            >
              {/* Add your menu items here */}
              <Link href="/" className="block mb-4" onClick={toggleMenu}>
                <img src="/images/logo-dark.png" className='h-10 mb-8' alt="none" />
              </Link>
              <Link href="/" className="block mb-4" onClick={toggleMenu}>Home</Link>
              <Link href="/jobs" className="block mb-4" onClick={toggleMenu}>Jobs</Link>
              <Link href="/employers" className="block mb-4" onClick={toggleMenu}>Employers</Link>
              <Link href="/post-job" className="block mb-4" onClick={toggleMenu}>Post a Job</Link>
              <Link href="/login" className="block" onClick={toggleMenu}>
                Login
              </Link>
            </div>

            
          </div>
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
