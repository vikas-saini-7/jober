import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed inset-0 overflow-hidden md:hidden">
      {/* Hamburger Button */}
      <button
        className="fixed top-5 right-5 text-black p-2 focus:outline-none z-50"
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

      {/* Off-Canvas Menu */}
      <div
        className={`${
          isMenuOpen
            ? 'translate-x-0 transition-transform ease-in duration-300'
            : 'translate-x-full transition-transform ease-out duration-300'
        } transform fixed inset-y-0 right-0 w-64 bg-black text-white p-8`}
      >
        {/* Add your menu items here */}
        <Link href="/" className="block mb-4">Home</Link>
        <Link href="/jobs" className="block mb-4">Jobs</Link>
        <Link href="/employers" className="block mb-4">Employers</Link>
        <Link href="/post-job" className="block">Post a Job</Link>
      </div>

      {/* Overlay for clicking outside the menu to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default MobileMenu;
