// pages/signup.tsx
import React from 'react';
import Link from 'next/link';

const SignupPage: React.FC = () => {
  // Function to handle signup form submission
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="flex flex-col md:flex-row pt-16 md:pt-0 h-screen">
      {/* Left Section (Signup Form) */}
      <div className="md:flex-1 bg-white p-8 flex flex-col items-center justify-center">
        <div className="max-w-md w-full">
          <Link href='/'>
            <img src="/images/logo-light.png" className='h-16 mb-12' alt="none" />
          </Link>
          <h2 className="text-3xl font-extrabold mb-4">Sign Up</h2>
          <form onSubmit={handleSignup}>
            {/* Add your signup form fields here */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded bg-gray-100 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded bg-gray-100 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full border p-2 rounded bg-gray-100 text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black py-3 px-8  text-white rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:shadow-outline-black"
            >
              Sign Up
            </button>
          </form>
          {/* Sign up with Google */}
          <p className="mt-4 text-gray-400 text-sm">Or sign up with Google</p>
          <button className="mt-2 bg-red-700 text-white py-4 px-8 rounded-lg font-semibold">
            Sign up with Google
          </button>

          {/* Link to redirect to login */}
          <p className="mt-4 text-sm">
            Already have an account?{' '}
            <Link href="/login">
              <span className="text-blue-500">Login here</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:flex-1 bg-white hidden md:flex">
        <img
          src="/images/signup.jpg" // Replace with your image URL
          alt="Signup Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default SignupPage;
