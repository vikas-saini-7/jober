// components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Company Information */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <img src="/images/logo-dark.png" className='h-20' alt="none" />
          </h2>
          <p className="text-lg">Post, get a Job — quicky and Easily!</p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/employers">Employers</a></li>
            <li><a href="/post-job">Post a Job</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Email: info@jobportal.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        {/* Section 4: Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p>&copy; 2023 JobPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
