import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div className="flex flex-col pt-16 md:pt-0 md:flex-row h-screen">
      {/* Left Section (Login Form) */}
      <div className="md:flex-1 bg-white p-8 flex flex-col items-center justify-center">
        <div className="max-w-md w-full">
          <Link href='/'>
            <img src="/images/logo-light.png" className='h-16 mb-12' alt="none" />
          </Link>
          <h2 className="text-3xl font-extrabold mb-4">Login</h2>
          <form 
        //   onSubmit={handleLogin}
          >
            {/* Add your login form fields here */}
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
              className="bg-black text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:shadow-outline-black"
            >
              Login
            </button>
          </form>
          {/* Sign up with Google */}
          {/* <p className="mt-4 text-gray-400 text-sm">Or sign up with Google</p>
          <button className="mt-2 bg-gray-700 text-white py-2 px-4 rounded-full font-semibold">
            Sign up with Google
          </button> */}

          {/* Link to redirect to signup */}
          <p className="mt-4 text-sm">
            Don't have an account?{' '}
            <Link href="/signup">
              <span className="text-blue-500">Sign up here</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:flex-1 bg-white hidden  md:flex">
        <img
          src="/images/login.jpg" // Replace with your image URL
          alt="Login Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

export default login