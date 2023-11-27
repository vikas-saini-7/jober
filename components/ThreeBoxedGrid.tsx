// components/ThreeBoxedGrid.tsx
const ThreeBoxedGrid: React.FC = () => {
    return (
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        {/* Box 1 */}
        <div className="bg-white border p-12 rounded-lg text-center">
          <div className="flex align-center justify-center mb-6"><img className="md:w-24 w-44" src="/images/employee.png" alt="" /></div>
          <h2 className="text-xl w-50p font-semibold mb-2">Employee Friendly</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
  
        {/* Box 2 */}
        <div className="bg-white border p-12 rounded-lg text-center">
          <div className="flex align-center justify-center mb-6"><img className="md:w-24 w-44" src="/images/user.png" alt="" /></div>
          <h2 className="text-xl w-50p font-semibold mb-2">User Friendly</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
  
        {/* Box 3 */}
        <div className="bg-white border p-12 rounded-lg text-center">
            <div className="flex align-center justify-center mb-6"><img className="md:w-24 w-44" src="/images/employer.png" alt="" /></div>
            <h2 className="text-xl w-50p font-semibold mb-2">Employer Friendly</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  };
  
  export default ThreeBoxedGrid;
  