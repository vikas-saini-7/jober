// components/ThreeBoxedGrid.tsx

interface ModalThreeBoxedGridProps {
    jobType: string;
    location: string;
    quality: string;
}

const ModalThreeBoxedGrid: React.FC<ModalThreeBoxedGridProps> = ({jobType, location, quality}:ModalThreeBoxedGridProps) => {
    return (
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Box 1 */}
        <div className="bg-white border p-12 rounded-lg text-center">
          <div className="flex align-center justify-center mb-6"><img className="md:w-24 w-16" src="/images/modal-2.png" alt="" /></div>
          <h2 className="text-xl w-50p font-semibold mb-2">{jobType}</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
  
        {/* Box 2 */}
        <div className="bg-white border p-12 rounded-lg text-center">
          <div className="flex align-center justify-center mb-6"><img className="md:w-24 w-16" src="/images/modal-1.png" alt="" /></div>
          <h2 className="text-xl w-50p font-semibold mb-2">{location}</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
  
        {/* Box 3 */}
        <div className="bg-white border p-12 rounded-lg text-center">
            <div className="flex align-center justify-center mb-6"><img className="md:w-24 w-16" src="/images/modal-3.png" alt="" /></div>
            <h2 className="text-xl w-50p font-semibold mb-2">{quality}</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  };
  
  export default ModalThreeBoxedGrid;
  